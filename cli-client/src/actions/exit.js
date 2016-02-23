
/**
 * Exit
 */
module.exports = app => {
  if ( !app ) {
    throw new Error( 'Action mounted without app' )
  }

  return ctx => {
    app.exit( 0 )
  }
}
