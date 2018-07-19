'use strict'

const mondrian = require('node-mondrian')

export default function (Citizen) {
  /**
   * Overwrite the current find function in order
   * to do the anonymization
   */
  Citizen.on('dataSourceAttached', () => {
    const originalFind = Citizen.find
    Citizen.find = (filter, user, cb) => {
      filter = filter || {} || 1
      filter.limit = 200
      let k = (filter.k > 3 && filter.k < 15) ? filter.k : 3
      let l = (filter.l > 3 && filter.l < 15) ? filter.l : 2
      originalFind.call(Citizen, filter, async (err, result) => {
        if (result.length < 10) {
          return cb('Not enough results', [])
        }
        const attributes = Citizen.definition.properties
        // const kanonymized = await mondrian.kAnonymity(result, attributes, k)
        const ldiversed = await mondrian.lDiversity(result, attributes, l)
        const shuffled = ldiversed.sort(() => Math.random() - 0.5)
        return cb(err, shuffled)
      })
    }
  })

  Citizen.disableRemoteMethodByName('create')
  Citizen.disableRemoteMethodByName('upsert')
  Citizen.disableRemoteMethodByName('deleteById')
  Citizen.disableRemoteMethodByName('updateAll')
  Citizen.disableRemoteMethodByName('prototype.updateAttributes')
  Citizen.disableRemoteMethodByName('createChangeStream')
  Citizen.disableRemoteMethodByName('upsertWithWhere')
  Citizen.disableRemoteMethodByName('replaceOrCreate')
  Citizen.disableRemoteMethodByName('findOne')
  Citizen.disableRemoteMethodByName('count')
  Citizen.disableRemoteMethodByName('replace')
  Citizen.disableRemoteMethodByName('exists')
  Citizen.disableRemoteMethodByName('replaceById')
  Citizen.disableRemoteMethodByName('findById')
}
