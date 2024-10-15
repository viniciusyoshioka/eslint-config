import eslint from "@eslint/js"

import { alwaysIgnorePaths, jsFileAnyPath } from "./constants.js"


/** @type {import("eslint").Linter.Config[]} */
export const javascriptConfig = [
  eslint.configs.recommended,
  {
    ignores: alwaysIgnorePaths,
  },
  {
    files: jsFileAnyPath,
    rules: {
      "no-constant-binary-expression": "warn",
      "no-duplicate-imports": "warn",
      "no-self-compare": "warn",
      "no-unreachable-loop": "warn",
      "max-depth": "warn",
    },
  },
]
