# @vinicius1313/eslint-config

This library contains the ESlint configurations I use in my projects.
It also supports TypeScript.

## Installation

Note that this library requires `eslint`, `@stylistic/eslint-plugin`,
`@typescript-eslint/eslint-plugin`, `@typescript-eslint/parser` and
`typescript` to work. You can install them with:

```sh
npm install -D @vinicius1313/eslint-config eslint @stylistic/eslint-plugin @typescript-eslint/eslint-plugin @typescript-eslint/parser typescript
# or
yarn add -D @vinicius1313/eslint-config eslint @stylistic/eslint-plugin @typescript-eslint/eslint-plugin @typescript-eslint/parser typescript
```

## Usage

### Updating `.eslintrc.*` file

To use the library, edit you eslint config file:

- `.eslintrc.js` as Module:

```js
/** @type {import('eslint').ESLint.ConfigData} */
export default {
    extends: "@vinicius1313/eslint-config",
    root: true,
    parserOptions: {
        tsconfigRootDir: __dirname,
    },
    // ...
}
```

- `.eslintrc.js` as CommonJS:

```js
/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
    extends: "@vinicius1313/eslint-config",
    root: true,
    parserOptions: {
        tsconfigRootDir: __dirname,
    },
    // ...
}
```

### Updating `tsconfig.json` file

After updating the ESLint config, change your `tsconfig.json` file to contain the files
to be linted in `include` field. If you haven't added, ESLint won't be able to lint your
files.
