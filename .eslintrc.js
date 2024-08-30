module.exports = {
  root: true,
  extends: '@react-native',
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'jsx-quotes': true,
    'react-native/no-inline-styles': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};
