import eslint from '@eslint/js'

import {
  alwaysIgnorePaths,
  jsFileAnyPath,
  tsFileAnyPath,
  typescriptSupportConfig,
} from '../constants.js'


/** @type {import("eslint").Linter.Config[]} */
export const javascriptConfig = [
  {
    ignores: alwaysIgnorePaths,
  },

  eslint.configs.recommended,
  typescriptSupportConfig,
  {
    name: 'javascript_lint',
    files: [
      ...jsFileAnyPath,
      ...tsFileAnyPath,
    ],
    rules: {
      'no-constant-binary-expression': 'warn',
      'no-duplicate-imports': 'warn',
      'no-self-compare': 'warn',
      'no-unreachable-loop': 'warn',
      'max-depth': 'warn',
    },
  },
]
