/* eslint spaced-comment:0 */

'use strict'

const CalEvent = require('./CalEvent')
const Easter = require('./Easter')

// --- pre-processor instructions for prepin ---
// #ifndef nojulian
// # const Julian = require('./Julian')
// #endif
// #ifndef noequinox
// # const Equinox = require('./Equinox')
// #endif

class CalEventFactory {
  constructor (opts) {
    switch (opts.fn) {
      case 'easter':
        return new Easter(opts)
        // #ifndef nojulian
// #       case 'julian':
// #         return new Julian(opts)
        // #endif
        // #ifndef noequinox
// #       case 'equinox':
// #         return new Equinox(opts)
        // #endif
      default:
        return new CalEvent(opts)
    }
  }
}
module.exports = CalEventFactory
