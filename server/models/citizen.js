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
}
