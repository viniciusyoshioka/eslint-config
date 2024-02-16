# @vinicius1313/eslint-config

This library contains the ESlint configurations I use in my projects. It also supports TypeScript.

## Installation

Note that this library requires `eslint`, `@typescript-eslint/parser` and `@typescript-eslint/eslint-plugin` to work. You can install them with:

```sh
npm install -D @vinicius1313/eslint-config eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
# or
yarn add -D @vinicius1313/eslint-config eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

## Usage

To use the library, edit you eslint config file:

- `.eslintrc.json`:

```json
{
    "extends": "@vinicius1313/eslint-config"
    // ...
}
```

- `.eslintrc.js` as Module:

```js
/** @type {import('eslint').ESLint.ConfigData} */
export default {
    extends: "@vinicius1313/eslint-config",
    // ...
}
```

- `.eslintrc.js` as CommonJS:

```js
/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
    extends: "@vinicius1313/eslint-config",
    // ...
}
```