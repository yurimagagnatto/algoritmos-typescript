/* eslint-env node */
module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,
  "rules": {
    "@typescript-eslint/typedef": [
      "error",
      {
        "arrowParameter": true,
        "variableDeclaration": true
      }
    ],
    "indent": ["error", 2],
    "semi": [2, "always"],
    "no-var": 2,
    "no-unused-vars": 0,
    "prefer-const": 0,
    "@typescript-eslint/no-unused-vars": 0,
    "no-trailing-spaces": 2
  }
};