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
/** @type {import("eslint").ESLint.ConfigData} */
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
/** @type {import("eslint").ESLint.ConfigData} */
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

After updating the ESLint config, change your `tsconfig.json` file to
contain the files to be linted in the `include` field. If you haven't added,
ESLint won't be able to lint your files.

### Configuring to lint the files without compiling them

To be able to lint your code, ESLint needs your `tsconfig.json` file.
And to do so, you also have to add the paths of the files to be linted
in the `include` field of `tsconfig.json`.

However, sometimes you have files that you just want to lint, but not compile.
In this case, you can fix the problem creating a second TypeScript configuration
file, just for ESLint. The [`@typescript-eslint` documentation](https://typescript-eslint.io/troubleshooting/#fixing-the-error) recommends calling
it `tsconfig.eslint.json`.

In `tsconfig.eslint.json`, extends the configuration from you main `tsconfig.json`
and add all the files you want to lint in the `include` field.

Then, change the `parserOptions` field of `.eslintrc.js` to:

```js
/** @type {import("eslint").ESLint.ConfigData} */
module.exports = {
    extends: "@vinicius1313/eslint-config",
    root: true,
    parserOptions: {
        project: "tsconfig.eslint.json",
        tsconfigRootDir: __dirname,
    },
    // ...
}
```
