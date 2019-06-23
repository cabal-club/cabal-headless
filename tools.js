exports.scrub = function (key) {
  return key
    .replace('cabal://', '')
    .replace('cbl://', '')
    .replace('dat://', '')
    .replace(/\//g, '')
}

exports.noop = function () {}
