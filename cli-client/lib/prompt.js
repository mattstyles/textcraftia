
'use strict';

const readline = require('readline');
const chalk = require('chalk');

const actions = require('./actions');

const rl = readline.createInterface(process.stdin, process.stdout);

const prompter = chalk.yellow('> ');

rl.setPrompt(prompter);

const prompt = props => {
  rl.prompt();
};

const onLine = line => {
  let input = line.trim();

  if (actions[input]) {
    actions[input](prompt);
    return;
  }

  actions._default(prompt);
};

rl.on('line', onLine);

prompt.log = function () {
  let line = rl.line;
  rl.pause();
  readline.clearLine(process.stdout, 0);
  readline.moveCursor(process.stdout, -2 - line.length, 0);

  console.log(...arguments);
  process.stdout.write(prompter + line);
  rl.resume();
};

module.exports = prompt;