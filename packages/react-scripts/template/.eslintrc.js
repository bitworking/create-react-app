module.exports = {
  parser: 'babel-eslint',
  extends: [
    'react-app',
    'plugin:flowtype/recommended',
  ],
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true
  },
  plugins: [
    'flowtype',
  ],
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true
    },
    'import/resolver': {
      node: {
        paths: ['src']
      }
    },
  }
};
