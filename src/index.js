import { formattingStrictConfig } from "./configs/formatting-strict.js"
import { formattingConfig } from "./configs/formatting.js"
import { javascriptConfig } from "./configs/javascript.js"
import { recommendedStrictConfig } from "./configs/recommended-strict.js"
import { recommendedConfig } from "./configs/recommended.js"
import { typescriptConfig } from "./configs/typescript.js"


export const configs = {
  recommended: recommendedConfig,
  recommendedStrict: recommendedStrictConfig,
  formatting: formattingConfig,
  formattingStrict: formattingStrictConfig,
  javascript: javascriptConfig,
  typescript: typescriptConfig,
}
