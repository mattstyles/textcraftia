
'use strict';

var IOC = require('socket.io-client');
var chalk = require('chalk');
// var prompt = require( './prompt' )

var app = require('./app');

const PORT = 3000;

console.log('\nAttempting connection to', chalk.grey(PORT));

var client = new IOC('ws://localhost:' + PORT, {
  transports: ['websocket']
});

client.on('error', err => {
  console.error('Client connection error', err);
});

client.on('connect', () => {
  console.log('Connection successful', chalk.grey(client.id));
  app.prompt();

  // function randomLog() {
  //   app.log( 'what happens if we log all over readline', Math.random().toString( 16 ).substring( 2 ) )
  //   setTimeout( randomLog, 2000 )
  // }
  //
  // setTimeout( () => {
  //   randomLog()
  // }, 1000 )
});