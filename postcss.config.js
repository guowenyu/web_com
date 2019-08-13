module.exports = () => ({
  plugins: [
    require('postcss-easy-import')({
      extensions: [
        '.pcss',
        '.css',
        '.postcss',
        '.sss'
      ]
    }),
    require('stylelint')({
      configFile: '.stylelintrc'
    }),
    require('postcss-mixins'),
    require('postcss-nesting'),
    require('postcss-custom-media'),
    require('postcss-selector-not'),
    require('postcss-discard-comments'),
    require('autoprefixer')({
      browsers: [
        "> 1%",
        "last 2 versions",
        "ie >= 8",
        "Android > 0",
        "ChromeAndroid > 0",
        "ios_saf > 0"
      ]
    }),
    require('cssnano')({
      preset: 'advanced'
    }),
    require('postcss-reporter')({
      clearReportedMessages: true,
      noPlugin: true
    })
  ]
});
