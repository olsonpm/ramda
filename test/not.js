import R from '..';
import eq from './shared/eq';


describe('not', function() {
  it('reverses argument', function() {
    eq(R.not(false), true);
    eq(R.not(1), false);
    eq(R.not(''), true);
  });

});
