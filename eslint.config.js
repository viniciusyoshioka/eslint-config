import { configs } from "./src/index.js"


export default [
  ...configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: ".",
      },
    },
  },
]
