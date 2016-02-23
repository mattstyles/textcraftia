
/**
 * Default
 */
module.exports = app => {
  if ( !app ) {
    throw new Error( 'Action mounted without app' )
  }

  return ctx => {
    app.log( 'Eh?' )
    app.prompt()
  }
}
