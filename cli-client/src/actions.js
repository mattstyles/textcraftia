
'use strict'

const chalk = require( 'chalk' )


class Actions {
  constructor() {

  }

  look( next ) {
    console.log( 'You look around' )
    next()
  }

  exit() {
    process.exit( 0 )
  }

  _default( next ) {
    console.log( 'Eh?' )
    next()
  }
}


module.exports = new Actions()
