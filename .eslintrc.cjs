const tsConfig = require('./config/eslintrc.ts.cjs')
const svelteConfig = require('./config/eslintrc.svelte.cjs')

const cfg = {
  root: true,
  env: {
    es2021: true,
    browser: true,
    node: true,
  },
  plugins: ['html'],
  parser: '@typescript-eslint/parser',
  ignorePatterns: ['*.scss'],
  extends: ['eslint:recommended', 'prettier', 'plugin:import/recommended'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2021,
    extraFileExtensions: ['.svelte'],
  },
  rules: { ...tsConfig.rules },
  overrides: [...tsConfig.overrides, ...svelteConfig.overrides],
}

module.exports = cfg
