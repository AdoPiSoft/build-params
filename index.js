module.exports = () => {
  const { NODE_ENV, DROP_CONSOLE, DEBUG, prod, LITE, lite } = process.env
  const _lite = LITE || lite
  const _debug = DEBUG || process.env.debug
  const _drop_console = DROP_CONSOLE || process.env.drop_console
  const production = NODE_ENV === 'production' || prod === '1' || prod === 'true' || prod === 'yes'
  const debug = _debug === '1' || _debug === 'true' || _debug === 'yes'
  const drop_console = _drop_console === '1' || _drop_console === 'true' || _drop_console === 'yes'
  const is_lite = _lite === '1' || _lite === 'yes' || _lite === 'true'
  const dev = !production && !debug

  return {
    dev,
    prod: production,
    production,
    debug,
    drop_console,
    lite: is_lite
  }
}
