module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    'airbnb',
    'plugin:cypress/recommended',
  ],
  rules: {
    'linebreak-style': 0,
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    'react/no-unknown-property': 'off',
  },
};
