const { join } = require('path')
const { jsRules, tsRules } = require('./eslint.rules.cjs')

module.exports = {
  root: true,
  env: {
    es2021: true,
    browser: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  extends: ['eslint:recommended', 'prettier'],
  plugins: ['@typescript-eslint'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2021,
  },
  rules: { ...jsRules },
  overrides: [
    {
      files: ['*.ts'],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/typescript',
      ],
      parserOptions: {
        tsconfigRootDir: join(__dirname, '..'),
        project: ['./tsconfig.json'],
      },
      rules: { ...tsRules },
    },
  ],
}
