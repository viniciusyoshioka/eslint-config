import tslint from 'typescript-eslint'


export const alwaysIgnorePaths = [
  '**/node_modules/**',
  '**/build/**',
  '**/dist/**',
  '**/lib/**',
  '**/libs/**',
  '**/public/**',
]

export const jsFileAnyPath = [
  '**/*.js',
  '**/*.cjs',
  '**/*.mjs',
  '**/*.jsx',
]

export const tsFileAnyPath = [
  '**/*.ts',
  '**/*.cts',
  '**/*.mts',
  '**/*.tsx',
]


/** @type {import("eslint").Linter.Config} */
export const typescriptSupportConfig = {
  plugins: {
    '@typescript-eslint': tslint.plugin,
  },
  languageOptions: {
    parser: tslint.parser,
    parserOptions: {
      projectService: true,
    },
  },
}
