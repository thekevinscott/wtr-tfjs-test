// const rollupCommonjs = require('@rollup/plugin-commonjs');
// const { fromRollup } = require('@web/dev-server-rollup');

// const commonjs = fromRollup(rollupCommonjs);

module.exports = {
  files: ['**/*.test.ts'],
  // plugins: [
  //   commonjs({
  //     include: [
  //       './node_modules/@tensorflow/**/*',
  //     ],
  //   }),
  // ],
};

