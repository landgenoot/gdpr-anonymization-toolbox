'use strict'

const faker = require('faker')

/**
 * Let's import fake data representing the citizens
 * of Berlin (+- 3.5 Mil)
 * @param {LoopbackServer} server
 */
module.exports = function generateData (app) {
  var ds = app.dataSources.mysql
  ds.automigrate(async function () {
    for (let i = 0; i < 3.5e6; i++) {
      faker.locale = 'de'
      let address = faker.address.streetAddress()

      faker.locale = faker.helpers.randomize([
        'de', 'de', 'de', 'de', 'de', 'de',
        'tr', 'pl', 'nl', 'fr', 'es', 'cz'
      ])

      await app.models.Citizen.create({
        SSN: faker.random.number({min: 1e8, max: 1e9 - 1}),
        name: faker.name.findName(),
        dateOfBirth: new Date(faker.date.past(50, new Date('Sat Sep 20 1992 21:35:02')).setHours(0, 0, 0, 0)),
        streetAddress: address,
        city: 'Berlin',
        zip: faker.random.number({min: 10000, max: 14169}),
        phoneNumber: faker.phone.phoneNumber(),
        IBAN: faker.finance.iban(),
        salary: faker.random.number({min: 2e4, max: 1e5}),
        jobTitle: faker.name.jobTitle(),
        nationality: faker.locale
      })
      if (i % 1000 === 0) {
        console.log(Math.round(i / 3.5e4) + '%')
      }
    }
  })
}
