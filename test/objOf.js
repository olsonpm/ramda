import R from '..';
import eq from './shared/eq';


describe('objOf', function() {

  it('creates an object containing a single key:value pair', function() {
    eq(R.objOf('foo', 42), {foo: 42});
    eq(R.objOf('foo')(42), {foo: 42});
  });

});
