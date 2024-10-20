import { configs } from "./src/index.js"


export default [
  ...configs.recommendedConfig,
  {
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: ".",
      },
    },
  },
]
