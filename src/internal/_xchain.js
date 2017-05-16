var _curry2 = require('./_curry2');
var _flatCat = require('./_flatCat');
var map = require('../map');


module.exports = /* #__PURE__ */_curry2(function _xchain(f, xf) {
  return map(f, _flatCat(xf));
});
