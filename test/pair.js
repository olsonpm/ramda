import R from '..';
import eq from './shared/eq';


describe('pair', function() {

  it('creates a two-element array', function() {
    eq(R.pair('foo', 'bar'), ['foo', 'bar']);
    eq(R.pair('foo')('bar'), ['foo', 'bar']);
  });

});
