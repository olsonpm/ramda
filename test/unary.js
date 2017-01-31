import R from '..';
import eq from './shared/eq';


describe('unary', function() {
  it('turns multiple-argument function into unary one', function() {
    R.unary(function(x, y, z) {
      eq(arguments.length, 1);
      eq(typeof y, 'undefined');
      eq(typeof z, 'undefined');
    })(10, 20, 30);
  });

  it('initial argument is passed through normally', function() {
    R.unary(function(x, y, z) {
      eq(x, 10);
      void z;
    })(10, 20, 30);
  });

});
