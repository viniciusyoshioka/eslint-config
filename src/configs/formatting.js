import stylistic from "@stylistic/eslint-plugin"
import tslint from "typescript-eslint"

import { alwaysIgnorePaths, jsFileAnyPath, tsFileAnyPath } from "../constants.js"
import { convertAllRulesToWarn } from "../utils/convertAllRulesToWarn.js"


const stylisticRecommended = stylistic.configs["recommended-flat"]
stylisticRecommended.rules = convertAllRulesToWarn(stylisticRecommended.rules ?? {})


/** @type {import("eslint").Linter.Config[]} */
export const formattingConfig = [
  stylisticRecommended,
  stylistic.configs["disable-legacy"],
  {
    ignores: alwaysIgnorePaths,
  },
  {
    name: "formatting",
    files: [
      ...jsFileAnyPath,
      ...tsFileAnyPath,
    ],
    rules: {
      "@stylistic/array-bracket-newline": ["warn", "consistent"],
      "@stylistic/arrow-parens": ["warn", "as-needed"],
      "@stylistic/brace-style": ["warn", "1tbs"],
      "@stylistic/dot-location": ["warn", "property"],
      "@stylistic/function-call-spacing": ["warn", "never"],
      "@stylistic/function-paren-newline": ["warn", "multiline-arguments"],
      "@stylistic/generator-star-spacing": ["warn", {
        before: true,
        after: false,
      }],
      "@stylistic/implicit-arrow-linebreak": ["warn", "beside"],
      "@stylistic/indent": ["warn", 2, {
        SwitchCase: 1,
        ignoredNodes: [
          "FunctionExpression > .params[decorators.length > 0]",
          "FunctionExpression > .params > :matches(Decorator, :not(:first-child))",
          "ClassBody.body > PropertyDefinition[decorators.length > 0] > .key",
        ],
      }],
      "@stylistic/indent-binary-ops": ["warn", 2],
      "@stylistic/jsx-curly-brace-presence": ["warn", {
        props: "always",
        children: "ignore",
        propElementValues: "always",
      }],
      "@stylistic/jsx-indent": ["warn", 2, {
        checkAttributes: true,
        indentLogicalExpressions: true,
      }],
      "@stylistic/jsx-indent-props": ["warn", 2],
      "@stylistic/jsx-quotes": ["warn", "prefer-double"],
      "@stylistic/jsx-self-closing-comp": ["warn", {
        component: true,
        html: true,
      }],
      "@stylistic/max-len": ["warn", {
        code: 90,
        comments: 90,
        ignorePattern: "^\\s*var\\s.+=\\s*require\\s*\\(",
        ignoreRegExpLiterals: true,
        ignoreTemplateLiterals: true,
        ignoreUrls: true,
      }],
      "@stylistic/member-delimiter-style": ["warn", {
        singleline: {
          delimiter: "comma",
          requireLast: false,
        },
        multiline: {
          delimiter: "none",
          requireLast: false,
        },
        multilineDetection: "brackets",
      }],
      "@stylistic/new-parens": ["warn", "always"],
      "@stylistic/newline-per-chained-call": ["warn", {
        ignoreChainWithDepth: 2,
      }],
      "@stylistic/no-confusing-arrow": ["warn", {
        allowParens: true,
        onlyOneSimpleParam: true,
      }],
      "@stylistic/no-floating-decimal": "warn",
      "@stylistic/no-mixed-operators": ["warn", {
        groups: [
          ["+", "-", "*", "/", "%", "**"],
          ["&", "|", "^", "~", "<<", ">>", ">>>"],
          ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
          ["&&", "||"],
          ["in", "instanceof"],
        ],
        allowSamePrecedence: true,
      }],
      "@stylistic/no-mixed-spaces-and-tabs": "warn",
      "@stylistic/no-multiple-empty-lines": ["warn", {
        max: 2,
        maxBOF: 1,
        maxEOF: 0,
      }],
      "@stylistic/operator-linebreak": ["warn", "before", {
        overrides: {
          "=": "after",
        },
      }],
      "@stylistic/padded-blocks": "off",
      "@stylistic/quotes": ["warn", "double", {
        avoidEscape: true,
        allowTemplateLiterals: true,
      }],
      "@stylistic/semi": ["warn", "never", {
        beforeStatementContinuationChars: "never",
      }],
      "@stylistic/spaced-comment": ["warn", "always", {
        block: {
          balanced: true,
          exceptions: [],
          markers: [],
        },
        line: {
          exceptions: [],
          markers: [],
        },
      }],
      "@stylistic/switch-colon-spacing": ["warn", {
        before: false,
        after: true,
      }],
      "@stylistic/wrap-iife": ["warn", "inside", {
        functionPrototypeMethods: true,
      }],
      "@stylistic/wrap-regex": "off",
      "@stylistic/yield-star-spacing": ["warn", "before"],
    },
  },
  {
    name: "typescript_formatting",
    plugins: {
      "@typescript-eslint": tslint.plugin,
    },
    languageOptions: {
      parser: tslint.parser,
      parserOptions: {
        projectService: true,
      },
    },
    rules: {
      "@typescript-eslint/adjacent-overload-signatures": "warn",
      "@typescript-eslint/array-type": ["warn", {
        default: "array",
      }],
      "@typescript-eslint/ban-tslint-comment": "off",
      "@typescript-eslint/class-literal-property-style": "off",
      "@typescript-eslint/consistent-generic-constructors": ["warn", "constructor"],
      "@typescript-eslint/consistent-indexed-object-style": "off",
      "@typescript-eslint/consistent-type-assertions": ["warn", {
        assertionStyle: "as",
        objectLiteralTypeAssertions: "allow",
      }],
      "@typescript-eslint/consistent-type-definitions": "off",
      "dot-notation": "off",
      "@typescript-eslint/dot-notation": ["warn", {
        // eslint options
        allowKeywords: true,
        allowPattern: "^([a-zA-Z_]+[a-zA-Z0-9_]*)?(_[a-zA-Z0-9_]*)$",

        // typescript-eslint options
        allowPrivateClassPropertyAccess: false,
        allowProtectedClassPropertyAccess: false,
        allowIndexSignaturePropertyAccess: false,
      }],
      "@typescript-eslint/no-confusing-non-null-assertion": "error",
      "no-empty-function": "off",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-inferrable-types": ["warn", {
        ignoreParameters: false,
        ignoreProperties: false,
      }],
      "@typescript-eslint/non-nullable-type-assertion-style": "warn",
      "@typescript-eslint/prefer-find": "warn",
      "@typescript-eslint/prefer-for-of": "warn",
      "@typescript-eslint/prefer-function-type": "warn",
      "@typescript-eslint/prefer-includes": "warn",
      "@typescript-eslint/prefer-nullish-coalescing": ["warn", {
        allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
        ignoreConditionalTests: true,
        ignoreMixedLogicalExpressions: false,
        ignorePrimitives: {
          number: false,
          string: false,
          boolean: false,
          bigint: false,
        },
        ignoreTernaryTests: false,
      }],
      "@typescript-eslint/prefer-optional-chain": ["warn", {
        allowPotentiallyUnsafeFixesThatModifyTheReturnTypeIKnowWhatImDoing: false,
        checkAny: true,
        checkUnknown: true,
        checkBigInt: true,
        checkBoolean: true,
        checkNumber: true,
        checkString: true,
        requireNullish: false,
      }],
      "@typescript-eslint/prefer-regexp-exec": "warn",
      "@typescript-eslint/prefer-string-starts-ends-with": ["warn", {
        allowSingleElementEquality: "never",
      }],
    },
  },
]
