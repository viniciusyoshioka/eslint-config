import { configs } from './src/index.js'


/** @type {import("eslint").Linter.Config[]} */
export default [
  ...configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: '.',
      },
    },
  },
]
