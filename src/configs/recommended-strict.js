import { formattingStrictConfig } from "./formatting-strict.js"
import { javascriptConfig } from "./javascript.js"
import { typescriptConfig } from "./typescript.js"


/** @type {import("eslint").Linter.Config[]} */
export const recommendedStrictConfig = [
  ...formattingStrictConfig,
  ...javascriptConfig,
  ...typescriptConfig,
]
