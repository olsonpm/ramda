import assert from 'assert';

import R from '..';
import eq from './shared/eq';


describe('takeWhile', function() {
  it('continues taking elements while the function reports `true`', function() {
    eq(R.takeWhile(function(x) {return x !== 5;}, [1, 3, 5, 7, 9]), [1, 3]);
  });

  it('starts at the right arg and acknowledges undefined', function() {
    eq(R.takeWhile(function() { assert(false); }, []), []);
    eq(R.takeWhile(function(x) {return x !== void 0;}, [1, 3, void 0, 5, 7]), [1, 3]);
  });

  it('is curried', function() {
    var takeUntil7 = R.takeWhile(function(x) {return x !== 7;});
    eq(takeUntil7([1, 3, 5, 7, 9]), [1, 3, 5]);
    eq(takeUntil7([2, 4, 6, 8, 10]), [2, 4, 6, 8, 10]);
  });

});
