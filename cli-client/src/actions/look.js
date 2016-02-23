
/**
 * Look
 */
module.exports = app => {
  if ( !app ) {
    throw new Error( 'Action mounted without app' )
  }

  return ctx => {
    app.log( 'You look around' )
    app.prompt()
  }
}
