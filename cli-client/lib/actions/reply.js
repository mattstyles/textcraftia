'use strict';

/**
 * Reply
 */
module.exports = app => {
  if (!app) {
    throw new Error('Action mounted without app');
  }

  return ctx => {
    app.log('Simulating a reply, 1 second into the future');
    app.prompt();

    setTimeout(() => {
      app.log('A reply later on, to test logging whilst prompting');
    }, 1000);
  };
};