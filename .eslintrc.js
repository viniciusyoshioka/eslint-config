const stylistic = require("@stylistic/eslint-plugin")

const { convertToWarn } = require("./lib/convertToWarn")


const recommendedExtendsRules = convertToWarn(
    stylistic.configs["recommended-extends"].rules
)


/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@stylistic/disable-legacy",
    ],

    plugins: [
        "@typescript-eslint",
        "@stylistic",
    ],

    parser: "@typescript-eslint/parser",
    env: {
        node: true,
    },
    rules: {
        // @stylistic - stylistic rules
        ...recommendedExtendsRules,
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
        "@stylistic/indent": ["warn", 4, {
            SwitchCase: 1,
            ignoredNodes: [
                "FunctionExpression > .params[decorators.length > 0]",
                "FunctionExpression > .params > :matches(Decorator, :not(:first-child))",
                "ClassBody.body > PropertyDefinition[decorators.length > 0] > .key",
            ],
        }],
        "@stylistic/indent-binary-ops": ["warn", 4],
        "@stylistic/jsx-curly-brace-presence": ["warn", {
            props: "always",
            children: "ignore",
            propElementValues: "always",
        }],
        "@stylistic/jsx-indent": ["warn", 4, {
            checkAttributes: true,
            indentLogicalExpressions: true,
        }],
        "@stylistic/jsx-indent-props": ["warn", 4],
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
}
