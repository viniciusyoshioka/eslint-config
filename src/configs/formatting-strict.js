import { formattingConfig } from "./formatting.js"


/** @type {import("eslint").Linter.Config[]} */
export const formattingStrictConfig = [
  ...formattingConfig,
  {
    name: "formatting_strict",
  },
  {
    name: "typescript_formatting_strict",
    rules: {
      "@typescript-eslint/class-literal-property-style": ["warn", "fields"],
      "@typescript-eslint/no-empty-function": ["error", {
        allow: [
          // eslint options
          "constructors",

          // typescript-eslint options
          "private-constructors",
          "protected-constructors",
          "overrideMethods",
        ],
      }],
    },
  },
]
