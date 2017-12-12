const sortingConfig = require('./.postcss-sorting.json');

module.exports = {
  plugins: {
    precss: {},
    'postcss-import': {},
    'postcss-map': {
      basePath: './public/css/variables',
      maps: ['colors.yml', 'media.yml', 'zindex.yml']
    },
    'postcss-for': {},
    'postcss-sorting': sortingConfig,
    'css-mqpacker': {
      sort: true
    },
    'postcss-discard-comments': {},
    cssnano: {}
  }
};
