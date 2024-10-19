import { configs } from "./src/index.js"


export default [
  ...configs.default,
  {
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: ".",
      },
    },
  },
]
