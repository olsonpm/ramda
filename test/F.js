import R from '..';
import eq from './shared/eq';


describe('F', function() {
  it('always returns false', function() {
    eq(R.F(), false);
    eq(R.F(10), false);
    eq(R.F(true), false);
  });

});
