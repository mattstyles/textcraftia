
'use strict'

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
    this.app = null
    this.actions = new Map()
  }

  register( app ) {
    this.app = app
  }

  mountActions( actions ) {
    if ( actions ) {
      console.warn( 'not ready to mount custom actions yet' )
    }

    this.actions.set( 'default', require( './actions/default' )( this.app ) )
    this.actions.set( 'look', require( './actions/look' )( this.app ) )
    this.actions.set( 'exit', require( './actions/exit' )( this.app ) )
    this.actions.set( 'reply', require( './actions/reply' )( this.app ) )
  }

  run( action ) {
    if ( this.actions.has( action ) ) {
      // @TODO pass a context object through to actions
      this.actions.get( action )({
        context: 'this is the context object @TODO'
      })
      return
    }


  }
}



module.exports = new Actions()
