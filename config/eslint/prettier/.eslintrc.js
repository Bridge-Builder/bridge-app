module.exports = {
  extends: ['plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 100,
        trailingComma: 'none',
        tabWidth: 2,
        semi: true,
        singleQuote: true,
        arrowParens: 'avoid'
      }
    ]
  }
};
