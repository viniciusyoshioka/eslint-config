# @vinicius1313/eslint-config

ESLint config I use in my projects.

It supports linting and formatting JavaScript and TypeScript files.

## Installation

> [!NOTE]
> This library requires `eslint`. If you use TypeScript, it is also required.

> [!WARNING]
> When using TypeScript, be aware of version compatibility!
> This is due to `typescript-eslint`, a dependency that uses `typescript`.
> The configuration may not work correctly or may not work at all if you
> use an incompatible version.

```sh
npm install -D eslint typescript @vinicius1313/eslint-config
# or
yarn add -D eslint typescript @vinicius1313/eslint-config
```

## Version compatibility

| Library version | ESLint version | ESLint Config | TypeScript version | Previous documentation |
|-----------------|----------------|---------------|--------------------|------------------------|
`>= 2.0.0` | `>= 9` | Flat | `< 5.6` | -
`>= 1.0.0 <=1.2.2` | `< 9` | Legacy | ? | [See v1 documentation](./docs/README-v1.md)

## Usage example

Create a file called `eslint.config.mjs` at the root of your project and add the following content to it:

```js
import { configs } from "@vinicius1313/eslint-config"


/** @type {import('eslint').Linter.Config[]} */
export default configs.default
```

Or, if you want to add other config:

```js
import { configs } from "@vinicius1313/eslint-config"


/** @type {import('eslint').Linter.Config[]} */
export default [
  ...configs.default,
  {
    // Custom ESLint config
  },
]
```

## Configs

- `default`

    This config is the default. It includes `formatting`, `javascript` and
    `typescript` configs.

- `formatting`

    This config enables formatting rules for JavaScript and TypeScript files.

- `javascript`

    This config enables linting rules for JavaScript and TypeScript files. It does not
    lint TypeScript syntax, it lints JavaScript syntax written in TypeScript files. To
    enable linting TypeScript syntax, use `typescript` config.

- `typescript`

    This config enables linting rules for TypeScript syntax.
