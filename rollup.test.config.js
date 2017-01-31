import pMultiEntry from 'rollup-plugin-multi-entry';
import pNodeResolve from 'rollup-plugin-node-resolve';

const external = [
  'assert', 'dox', 'fs', 'jsverify', 'path', 'q', 'sanctuary', 'sinon', 'vm'
];

export default {
  entry: {
    include: ['./test/*.js'],
    exclude: ['./test/bundled-tests.js']
  },
  dest: './test/bundled-tests.js',
  external,
  format: 'cjs',
  plugins: [
    pNodeResolve({ skip: external }),
    pMultiEntry()
  ],
  intro: '/* eslint-disable */'
};
