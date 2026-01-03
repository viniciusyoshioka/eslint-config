# @vinicius1313/eslint-config

ESLint config I use in my projects.

It supports linting and formatting JavaScript and TypeScript files.

## Installation

> [!NOTE]
> This library requires `eslint` and `@stylistic/eslint-plugin`.
> If you use TypeScript, it also requires `typescript` and `typescript-eslint`.

> [!WARNING]
> When using TypeScript, be aware of version compatibility!
> This is due to `typescript-eslint`'s version compatibility.
> The configuration may not work if you use an incompatible version.

Install the dependencies with:

- NPM
  ```sh
  npm install -D @vinicius1313/eslint-config typescript eslint typescript-eslint @stylistic/eslint-plugin
  ```

- Yarn

  ```sh
  yarn add -D @vinicius1313/eslint-config typescript eslint typescript-eslint @stylistic/eslint-plugin
  ```

## Version compatibility

| Library version | ESLint version | ESLint Config | TypeScript version | Previous documentation |
|-----------------|----------------|---------------|--------------------|------------------------|
`>= 2.1.0` | `>= 9` | Flat | `>=4.8.4 <6.0.0` | -
`>= 2.0.0` | `>= 9` | Flat | `>=4.8.4 <5.8.0` | -
`>= 1.0.0 <=1.2.2` | `< 9` | Legacy | ? | [See v1 documentation](./docs/README-v1.md)

## Usage example

Create a file called `eslint.config.mjs` at the root of your project and add the following content to it:

```js
import { configs } from '@vinicius1313/eslint-config'


/** @type {import('eslint').Linter.Config[]} */
export default [
  ...configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
]
```

Or, if you want to add other config:

```js
import { configs } from '@vinicius1313/eslint-config'


/** @type {import('eslint').Linter.Config[]} */
export default [
  ...configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    // Your ESLint config
  },
]
```

## Configs

- `recommended`

    This config is the recommended. It includes `formatting`, `javascript` and
    `typescript` configs.

- `formatting`

    This config enables formatting rules for JavaScript and TypeScript files.

- `javascript`

    This config enables linting rules for JavaScript and TypeScript files. It does not
    lint TypeScript syntax, it lints JavaScript syntax written in TypeScript files. To
    enable linting TypeScript syntax, use `typescript` config.

- `typescript`

    This config enables linting rules for TypeScript syntax.

## Troubleshooting

- `<file> was not found by the project service. Consider either including it in the tsconfig.json or including it in allowDefaultProject.`

If some file can't be lint due to the error above, its probably because the
file is not in the `include` list of your `tsconfig.json`.

To fix this, you can just add the file path to the `include` field of your
`tsconfig.json` or add the following config to your `eslint.config.mjs`:

```js
import { configs } from '@vinicius1313/eslint-config'


/** @type {import('eslint').Linter.Config[]} */
export default [
  ...configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
        projectService: {
          allowDefaultProject: [
            // Other files to enable linting
          ],
        },
      },
    },
  },
]
```
