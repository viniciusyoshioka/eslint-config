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
      'array-callback-return': 'error',
      'class-methods-use-this': 'off',
      'consistent-return': 'error',
      'default-param-last': 'error',
      'init-declarations': ['warn', 'always'],
      'no-constructor-return': 'error',
      'no-dupe-class-members': 'off',
      'no-implied-eval': 'error',
      'no-invalid-this': 'error',
      'no-irregular-whitespace': ['error', {
        skipStrings: false,
        skipComments: false,
        skipRegExps: true,
        skipTemplates: false,
        skipJSXText: false,
      }],
      'no-magic-numbers': ['error', {
        ignore: [],
        ignoreArrayIndexes: true,
        ignoreDefaultValues: true,
        ignoreClassFieldInitialValues: true,
        enforceConst: true,
        detectObjects: false,
      }],
      'no-promise-executor-return': 'error',
      'no-restricted-imports': 'off',
      'no-self-compare': 'error',
      'no-template-curly-in-string': 'warn',
      'no-unmodified-loop-condition': 'error',
      'no-unreachable-loop': 'error',
      'no-unused-vars': 'warn',
      'no-useless-assignment': 'error',
      'max-depth': ['warn', {
        max: 4,
      }],
      'max-params': ['error', {
        max: 3,
      }],
      'no-array-constructor': 'error',
      'no-eval': 'error',
      'no-extend-native': 'error',
      'no-loop-func': 'error',
      'no-proto': 'warn',
      'no-script-url': 'error',
      'no-shadow': 'off',
      'no-throw-literal': 'error',
      'no-unused-expressions': 'warn',
      'no-useless-constructor': 'warn',
      'no-useless-rename': 'warn',
      'no-useless-return': 'warn',
      'no-var': 'error',
      'prefer-const': 'warn',
      'prefer-destructuring': 'warn',
      'prefer-promise-reject-errors': ['error', {
        allowEmptyReject: false,
      }],
      radix: ['warn', 'as-needed'],
      'require-await': 'warn',
    },
  },
]
