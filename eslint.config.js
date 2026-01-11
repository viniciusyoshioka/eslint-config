import { configs } from './src/index.js'


/** @type {import("eslint").Linter.Config[]} */
export default [
  ...configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
        projectService: {
          allowDefaultProject: [
            'tests/formatting/javascript.js',
            'tests/formatting/typescript.ts',
            'eslint.config.js',
          ],
        },
      },
    },
  },
]
