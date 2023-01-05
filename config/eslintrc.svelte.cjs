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
  plugins: ['svelte3', '@typescript-eslint'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2021,
    extraFileExtensions: ['.svelte'],
  },
  rules: { ...jsRules },
  overrides: [
    {
      files: ['*.svelte'],
      settings: {
        'svelte3/typescript': () => require('typescript'),
        // ignore style tags in Svelte because of Tailwind CSS
        // See https://github.com/sveltejs/eslint-plugin-svelte3/issues/70
        'svelte3/ignore-styles': () => true,
      },
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/typescript',
      ],
      processor: 'svelte3/svelte3',
      plugins: ['svelte3', '@typescript-eslint', 'prettier'],
      rules: {
        ...tsRules,
        // Svelte doesn't handle these
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
      },
      parserOptions: {
        tsconfigRootDir: join(__dirname, '..'),
        project: ['./tsconfig.json'],
        extraFileExtensions: ['.svelte'],
      },
    },
  ],
}
