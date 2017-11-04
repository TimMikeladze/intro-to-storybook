module.exports = {
  extends: ['airbnb', 'plugin:jest/recommended'],
  env: {
    node: true,
    browser: true,
    'jest/globals': true
  },
  plugins: [
    'babel',
    'import',
    'jsx-a11y',
    'jest'
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'import/no-extraneous-dependencies': 0,
    'jsx-a11y/accessible-emoji': 0
  }
};
