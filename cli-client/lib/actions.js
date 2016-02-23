
'use strict';

const chalk = require('chalk');

const actions = new Map();

// class Actions {
//   constructor() {
//
//   }
//
//   reply( next ) {
//     app.log( 'Wait for the reply' )
//   }
//
//   look( next ) {
//     console.log( 'You look around' )
//     next()
//   }
//
//   exit() {
//     process.exit( 0 )
//   }
//
//   _default( next ) {
//     console.log( 'Eh?' )
//     next()
//   }
// }

class Actions {
  constructor() {
    this.app = null;
  }

  register(app) {
    this.app = app;
  }

  mountActions(actions) {
    if (actions) {
      console.warn('not ready to mount custom actions yet');
    }

    actions.set('look', require('./actions/look')(this.app));
  }

  run(action) {

    if (actions.has(action)) {
      actions.get(action)();
    }
  }
}

module.exports = new Actions();