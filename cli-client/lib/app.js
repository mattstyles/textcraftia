
'use strict';

const readline = require('readline');
const chalk = require('chalk');

const action = require('./action');

class App {
  constructor() {
    this.prompt = prop => {
      this.read.setPrompt(prop || this._prompt);
      this.read.prompt();
    };

    this.onLine = line => {
      let input = line.trim();
      action.run(input);
    };

    this.log = this.log.bind(this);

    this.read = readline.createInterface(process.stdin, process.stdout);
    this._prompt = chalk.yellow('> ');
    this.read.setPrompt(this._prompt);
    this.read.on('line', this.onLine);
  }

  log() {
    let line = this.read.line;
    this.read.pause();

    readline.clearLine(process.stdin, 0);
    readline.moveCursor(process.stdin, 0 - chalk.stripColor(this._prompt).length - line.length, 0);

    console.log(...arguments);
    process.stdout.write(this._prompt + line);
    this.read.resume();
  }

  exit(code) {
    this.log('App exiting');
    process.exit(code || 0);
  }
}

module.exports = new App();