import tslint from "typescript-eslint"


/** @type {import("eslint").Linter.Config[]} */
export const typescriptConfig = [
  ...tslint.configs.recommended,
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
      "**/*.ts",
      "**/*.cts",
      "**.*.mts",
    ],
    ignores: [
      "**/*.js",
      "**/*.cjs",
      "**/*.mjs",
    ],
    plugins: {
      "@typescript-eslint": tslint.plugin,
    },
    languageOptions: {
      parser: tslint.parser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      // typescript-eslint - stylistic rules
      "@typescript-eslint/adjacent-overload-signatures": "warn",

      // typescript-eslint - lint rules
      "consistent-return": "off",
      "@typescript-eslint/consistent-return": "error",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "max-params": "off",
      "@typescript-eslint/max-params": "warn",
      "no-empty-function": "off",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-empty-interface": "off",
      "@typescript-eslint/no-unsafe-unary-minus": "error",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-var-requires": "off",
      "prefer-promise-reject-errors": "off",
      "@typescript-eslint/prefer-promise-reject-errors": "warn",
      "@typescript-eslint/promise-function-async": "warn",
      "no-return-await": "off",
      "@typescript-eslint/return-await": ["error", "always"],
      "@typescript-eslint/strict-boolean-expressions": "error",
    },
  },
]
