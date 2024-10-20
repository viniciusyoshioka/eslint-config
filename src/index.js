import { formattingConfig } from "./configs/formatting.js"
import { javascriptConfig } from "./configs/javascript.js"
import { recommendedStrictConfig } from "./configs/recommended-strict.js"
import { recommendedConfig } from "./configs/recommended.js"
import { typescriptConfig } from "./configs/typescript.js"
import { customGlobals } from "./globals/index.js"


export const configs = {
  recommended: recommendedConfig,
  recommendedStrict: recommendedStrictConfig,
  formatting: formattingConfig,
  javascript: javascriptConfig,
  typescript: typescriptConfig,
}

export const globals = customGlobals
