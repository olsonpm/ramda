import R from '..';
import eq from './shared/eq';


describe('subtract', function() {
  it('subtracts two numbers', function() {
    eq(R.subtract(22, 7), 15);
  });

  it('coerces its arguments to numbers', function() {
    eq(R.subtract('1', '2'), -1);
    eq(R.subtract(1, '2'), -1);
    eq(R.subtract(true, false), 1);
    eq(R.subtract(null, null), 0);
    eq(R.subtract(undefined, undefined), NaN);
    eq(R.subtract(new Date(1), new Date(2)), -1);
  });

  it('is curried', function() {
    var ninesCompl = R.subtract(9);
    eq(ninesCompl(6), 3);
  });

  it('behaves right curried when passed `R.__` for its first argument', function() {
    var minus5 = R.subtract(R.__, 5);
    eq(minus5(17), 12);
  });

});
