#! /usr/bin/env sh

./node_modules/rollup/bin/rollup -c ./rollup.test.config.js \
  && ./node_modules/mocha/bin/mocha "./test/bundled-tests.js"
