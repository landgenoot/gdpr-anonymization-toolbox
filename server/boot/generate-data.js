'use strict'

const citizens = require('./../../data/citizens.json')
const debug = require('debug')('app:migration')

/**
 * Let's import fake data representing the citizens
 * of Berlin (+- 3.5 Mil)
 * @param {LoopbackServer} server
 */
module.exports = function generateData (app) {
  var ds = app.dataSources.mysql
  // ds.automigrate(async function () {
  //   debug('Starting migration')
  //   app.models.Citizen.create(citizens).then(result => {
  //     debug('Migration complete')
  //   })
  // })
}
