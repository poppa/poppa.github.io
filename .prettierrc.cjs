module.exports = {
  "useTabs": false,
  "singleQuote": true,
  "trailingComma": "es5",
  "semi": false,
  "printWidth": 80,
  "plugins": ["prettier-plugin-svelte"],
  "pluginSearchDirs": ["."],
  "overrides": [{ "files": "*.svelte", "options": { "parser": "svelte" } }],
  "jsxSingleQuote": true,
  "svelteSortOrder": "options-scripts-markup-styles",
  "svelteStrictMode": false,
  "svelteAllowShorthand": true,
  "svelteIndentScriptAndStyle": false
}
