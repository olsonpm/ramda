import assert from 'assert';

import R from '..';
import eq from './shared/eq';


describe('times', function() {
  it('takes a map func', function() {
    eq(R.times(R.identity, 5), [0, 1, 2, 3, 4]);
    eq(R.times(function(x) {
      return x * 2;
    }, 5), [0, 2, 4, 6, 8]);
  });

  it('is curried', function() {
    var mapid = R.times(R.identity);
    eq(mapid(5), [0, 1, 2, 3, 4]);
  });

  it('throws if second argument is not a valid array length', function() {
    assert.throws(function() { R.times(3)('cheers!'); }, RangeError);
    assert.throws(function() { R.times(R.identity, -1); }, RangeError);
  });

});
