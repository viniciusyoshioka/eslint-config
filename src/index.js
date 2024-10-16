import { defaultConfig } from "./configs/default.js"
import { formattingConfig } from "./configs/formatting.js"
import { javascriptConfig } from "./configs/javascript.js"
import { typescriptConfig } from "./configs/typescript.js"
import { customGlobals } from "./globals/index.js"


export const configs = {
  default: defaultConfig,
  formatting: formattingConfig,
  javascript: javascriptConfig,
  typescript: typescriptConfig,
}

export const globals = customGlobals
