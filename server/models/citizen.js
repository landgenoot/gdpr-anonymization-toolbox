'use strict'

export default function (Citizen) {
  /**
   * Overwrite the current find function in order
   * to do the anonymization
   */
  Citizen.on('dataSourceAttached', () => {
    var originalFind = Citizen.find
    Citizen.find = (filter, user, cb) => {
      filter = filter || {} || 1
      filter.limit = 100
      originalFind.call(Citizen, filter, (err, result) => {
        return cb(err, result)
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
