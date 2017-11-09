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
    'import/no-extraneous-dependencies': 0,
    'jsx-a11y/accessible-emoji': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-wrap-multilines': [2, { arrow: false }],
    'react/forbid-prop-types': [1, { forbid: ['any']} ],
  }
};
