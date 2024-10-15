import { formattingConfig } from "./formatting.js"
import { javascriptConfig } from "./javascript.js"
import { typescriptConfig } from "./typescript.js"


/** @type {import("eslint").Linter.Config[]} */
export const defaultConfig = [
  ...formattingConfig,
  ...javascriptConfig,
  ...typescriptConfig,
]
