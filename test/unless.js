import R from '..';
import eq from './shared/eq';


describe('unless', function() {
  it('calls the whenFalse function if the validator returns a falsy value', function() {
    eq(R.unless(R.isArrayLike, R.of)(10), [10]);
  });

  it('returns the argument unmodified if the validator returns a truthy value', function() {
    eq(R.unless(R.isArrayLike, R.of)([10]), [10]);
  });

  it('returns a curried function', function() {
    eq(R.unless(R.isArrayLike)(R.of)(10), [10]);
    eq(R.unless(R.isArrayLike)(R.of)([10]), [10]);
  });

});
