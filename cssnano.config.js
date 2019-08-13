const advancedPreset = require('cssnano-preset-advanced');

module.exports = advancedPreset({
  discardComments: {
    remove: comment => comment[0] === "@"
  }
});
