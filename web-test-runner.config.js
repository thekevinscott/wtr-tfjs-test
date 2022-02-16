const { esbuildPlugin } = require('@web/dev-server-esbuild');

// const rollupCommonjs = require('@rollup/plugin-commonjs');
// const { fromRollup } = require('@web/dev-server-rollup');

// const commonjs = fromRollup(rollupCommonjs);

module.exports = {
  files: ['**/*.test.ts'],
  plugins: [
    esbuildPlugin({ ts: true, target: 'auto' }),

//     commonjs({
//       include: [
//         './node_modules/@tensorflow/**/*',
//       ],
//     }),
  ],
};

