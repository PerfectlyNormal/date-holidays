/* eslint spaced-comment:0 */

'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CalEvent = require('./CalEvent');
var Easter = require('./Easter');

// --- pre-processor instructions for prepin ---
// #ifndef nojulian
// # var Julian = require('./Julian');
// #endif
// #ifndef noequinox
// # var Equinox = require('./Equinox');
// #endif

var CalEventFactory = function CalEventFactory(opts) {
  _classCallCheck(this, CalEventFactory);

  switch (opts.fn) {
    case 'easter':
      return new Easter(opts);
    // #ifndef nojulian
// #     case 'julian':
// #       return new Julian(opts);
    // #endif
    // #ifndef noequinox
// #     case 'equinox':
// #       return new Equinox(opts);
    // #endif
    default:
      return new CalEvent(opts);
  }
};

module.exports = CalEventFactory;