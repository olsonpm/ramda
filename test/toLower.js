import R from '..';
import eq from './shared/eq';


describe('toLower', function() {
  it('returns the lower-case equivalent of the input string', function() {
    eq(R.toLower('XYZ'), 'xyz');
  });

});
