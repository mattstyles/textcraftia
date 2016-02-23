
'use strict'

const readline = require( 'readline' )
const chalk = require( 'chalk' )

const actions = require( './actions' )

class App {
  constructor() {
    this.log = this.log.bind( this )

    this.read = readline.createInterface( process.stdin, process.stdout )
    this._prompt = chalk.yellow( '> ' )
    this.read.setPrompt( this._prompt )
    this.read.on( 'line', this.onLine )
  }

  prompt = prop => {
    this.read.setPrompt( prop || this._prompt )
    this.read.prompt()
  };

  onLine = ( line ) => {
    let input = line.trim()

    if ( actions[ input ] ) {
      actions[ input ]( this.prompt )
      return
    }

    actions._default( this.prompt )
  };

  log() {
    let line = this.read.line
    this.read.pause()

    readline.clearLine( process.stdin, 0 )
    readline.moveCursor( process.stdin, 0 - chalk.stripColor( this._prompt ).length - line.length, 0 )

    console.log( ...arguments )
    process.stdout.write( this._prompt + line )
    this.read.resume()
  };
}

module.exports = new App()
