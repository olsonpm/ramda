import R from '..';
import eq from './shared/eq';


describe('sort', function() {
  it('sorts the elements of a list', function() {
    eq(R.sort(function(a, b) {return a - b;}, [3, 1, 8, 1, 2, 5]), [1, 1, 2, 3, 5, 8]);
  });

  it('does not affect the list passed supplied', function() {
    var list = [3, 1, 8, 1, 2, 5];
    eq(R.sort(function(a, b) {return a - b;}, list), [1, 1, 2, 3, 5, 8]);
    eq(list, [3, 1, 8, 1, 2, 5]);
  });

  it('is curried', function() {
    var sortByLength = R.sort(function(a, b) {return a.length - b.length;});
    eq(sortByLength(['one', 'two', 'three', 'four', 'five', 'six']),
       ['one', 'two', 'six', 'four', 'five', 'three']);
  });

});
