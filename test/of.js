import R from '..';
import eq from './shared/eq';


describe('of', function() {
  it('returns its argument as an Array', function() {
    eq(R.of(100), [100]);
    eq(R.of([100]), [[100]]);
    eq(R.of(null), [null]);
    eq(R.of(undefined), [undefined]);
    eq(R.of([]), [[]]);
  });

});
