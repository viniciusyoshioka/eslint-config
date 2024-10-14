import { formattingConfig } from "./formatting.js"
import { javascriptConfig } from "./javascript.js"
import { typescriptConfig } from "./typescript.js"


export const defaultConfig = [
  ...formattingConfig,
  ...javascriptConfig,
  ...typescriptConfig,
]
