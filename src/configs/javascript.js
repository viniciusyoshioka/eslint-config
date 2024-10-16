import eslint from "@eslint/js"
import tslint from "typescript-eslint"

import { alwaysIgnorePaths, jsFileAnyPath, tsFileAnyPath } from "./constants.js"


/** @type {import("eslint").Linter.Config[]} */
export const javascriptConfig = [
  eslint.configs.recommended,
  {
    ignores: alwaysIgnorePaths,
  },
  {
    name: "javascript_lint",
    files: [
      ...jsFileAnyPath,
      ...tsFileAnyPath,
    ],
    plugins: {
      "@typescript-eslint": tslint.plugin,
    },
    languageOptions: {
      parser: tslint.parser,
    },
    rules: {
      "no-constant-binary-expression": "warn",
      "no-duplicate-imports": "warn",
      "no-self-compare": "warn",
      "no-unreachable-loop": "warn",
      "max-depth": "warn",
    },
  },
]
