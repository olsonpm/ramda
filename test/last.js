import assert from 'assert';

import R from '..';
import eq from './shared/eq';


describe('last', function() {

  it('returns the first element of an ordered collection', function() {
    eq(R.last([1, 2, 3]), 3);
    eq(R.last([1, 2]), 2);
    eq(R.last([1]), 1);
    eq(R.last([]), undefined);

    eq(R.last('abc'), 'c');
    eq(R.last('ab'), 'b');
    eq(R.last('a'), 'a');
    eq(R.last(''), '');
  });

  it('throws if applied to null or undefined', function() {
    assert.throws(function() { R.last(null); }, TypeError);
    assert.throws(function() { R.last(undefined); }, TypeError);
  });

});
