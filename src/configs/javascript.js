import eslint from "@eslint/js"


/** @type {import("eslint").Linter.Config[]} */
export const javascriptConfig = [
  eslint.configs.recommended,
  {
    ignores: [
      "**/node_modules/**",
      "**/build/**",
      "**/dist/**",
      "**/lib/**",
      "**/libs/**",
      "**/public/**",
    ],
  },
  {
    files: [
      "**/*.js",
      "**/*.cjs",
      "**/*.mjs",
    ],
    rules: {
      "no-constant-binary-expression": "warn",
      "no-duplicate-imports": "warn",
      "no-self-compare": "warn",
      "no-unreachable-loop": "warn",
      "max-depth": "warn",
    },
  },
]
