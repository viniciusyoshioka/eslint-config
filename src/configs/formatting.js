import stylistic from '@stylistic/eslint-plugin'

import {
  alwaysIgnorePaths,
  jsFileAnyPath,
  tsFileAnyPath,
  typescriptSupportConfig,
} from '../constants.js'


const INDENT = 2
const MAX_LINE_LENGTH = 90
const IS_SINGLE_QUOTES = true


/** @type {import("eslint").Linter.Config[]} */
export const formattingConfig = [
  {
    ignores: alwaysIgnorePaths,
  },

  {
    name: 'formatting',
    files: [
      ...jsFileAnyPath,
      ...tsFileAnyPath,
    ],
    plugins: stylistic.configs['recommended'].plugins,
    rules: {
      '@stylistic/array-bracket-newline': ['warn', 'consistent'],
      '@stylistic/array-bracket-spacing': ['warn', 'never'],
      '@stylistic/array-element-newline': ['warn', 'consistent'],
      '@stylistic/arrow-parens': ['warn', 'as-needed', {
        requireForBlockBody: false,
      }],
      '@stylistic/arrow-spacing': ['warn', {
        before: true,
        after: true,
      }],
      '@stylistic/block-spacing': ['warn', 'always'],
      '@stylistic/brace-style': ['warn', '1tbs', {
        allowSingleLine: true,
      }],
      '@stylistic/comma-dangle': ['warn', {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
        importAttributes: 'always-multiline',
        dynamicImports: 'always-multiline',
        enums: 'always-multiline',
        generics: 'always-multiline',
        tuples: 'always-multiline',
      }],
      '@stylistic/comma-spacing': ['warn', {
        before: false,
        after: true,
      }],
      '@stylistic/comma-style': ['warn', 'last'],
      '@stylistic/computed-property-spacing': ['warn', 'never', {
        enforceForClassMembers: true,
      }],
      '@stylistic/curly-newline': ['off', {
        consistent: true,
      }],
      '@stylistic/dot-location': ['warn', 'property'],
      '@stylistic/eol-last': ['warn', 'always'],
      '@stylistic/function-call-spacing': ['warn', 'never'],
      '@stylistic/function-call-argument-newline': ['warn', 'consistent'],
      '@stylistic/function-paren-newline': ['warn', 'multiline-arguments'],
      '@stylistic/generator-star-spacing': ['warn', {
        before: true,
        after: false,
      }],
      '@stylistic/implicit-arrow-linebreak': ['warn', 'beside'],
      '@stylistic/indent': ['warn', INDENT, {
        ArrayExpression: 1,
        CallExpression: {
          arguments: 1,
        },
        flatTernaryExpressions: false,
        FunctionDeclaration: {
          body: 1,
          parameters: 1,
        },
        FunctionExpression: {
          body: 1,
          parameters: 1,
        },
        ignoreComments: false,
        ignoredNodes: [
          'FunctionExpression > .params[decorators.length > 0]',
          'FunctionExpression > .params > :matches(Decorator, :not(:first-child))',
          'ClassBody.body > PropertyDefinition[decorators.length > 0] > .key',
        ],
        ImportDeclaration: 1,
        MemberExpression: 1,
        ObjectExpression: 1,
        offsetTernaryExpressions: true,
        outerIIFEBody: 1,
        SwitchCase: 1,
        tabLength: INDENT,
        VariableDeclarator: 'first',
      }],
      '@stylistic/indent-binary-ops': ['warn', INDENT],
      '@stylistic/jsx-child-element-spacing': 'off',
      '@stylistic/jsx-closing-bracket-location': ['warn', 'tag-aligned'],
      '@stylistic/jsx-closing-tag-location': ['warn', 'tag-aligned'],
      '@stylistic/jsx-curly-brace-presence': ['warn', {
        props: 'always',
        children: 'ignore',
        propElementValues: 'always',
      }],
      '@stylistic/jsx-curly-newline': ['warn', {
        singleline: 'consistent',
        multiline: 'consistent',
      }],
      '@stylistic/jsx-curly-spacing': ['warn', {
        when: 'never',
      }],
      '@stylistic/jsx-equals-spacing': ['warn', 'never'],
      '@stylistic/jsx-first-prop-new-line': ['warn', 'multiline-multiprop'],
      '@stylistic/jsx-function-call-newline': ['warn', 'multiline'],
      '@stylistic/jsx-indent': ['warn', INDENT, {
        checkAttributes: true,
        indentLogicalExpressions: true,
      }],
      '@stylistic/jsx-indent-props': ['warn', INDENT],
      '@stylistic/jsx-max-props-per-line': ['warn', {
        maximum: 3,
        when: 'always',
      }],
      '@stylistic/jsx-newline': ['off', {
        prevent: false,
        allowMultilines: false,
      }],
      '@stylistic/jsx-one-expression-per-line': ['off', {
        allow: 'none',
      }],
      '@stylistic/jsx-pascal-case': 'off',
      '@stylistic/jsx-props-no-multi-spaces': 'warn',
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      '@stylistic/jsx-quotes': ['warn', IS_SINGLE_QUOTES ? 'prefer-single' : 'prefer-double'],
      '@stylistic/jsx-self-closing-comp': ['warn', {
        component: true,
        html: true,
      }],
      '@stylistic/jsx-sort-props': 'off',
      '@stylistic/jsx-tag-spacing': ['warn', {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
        beforeClosing: 'never',
      }],
      '@stylistic/jsx-wrap-multilines': ['warn', {
        arrow: 'parens',
        // assignment: "parens",
        condition: 'parens',
        // declaration: "parens",
        logical: 'parens',
        prop: 'parens',
        propertyValue: 'parens',
        return: 'parens',
      }],
      '@stylistic/key-spacing': ['warn', {
        beforeColon: false,
        afterColon: true,
      }],
      '@stylistic/keyword-spacing': ['warn', {
        before: true,
        after: true,
      }],
      '@stylistic/line-comment-position': ['warn', {
        position: 'above',
      }],
      '@stylistic/linebreak-style': ['warn', 'unix'],
      '@stylistic/lines-around-comment': ['warn', {
        beforeBlockComment: true,
      }],
      '@stylistic/lines-between-class-members': 'off',
      '@stylistic/max-len': ['warn', {
        code: MAX_LINE_LENGTH,
        tabWidth: INDENT,
        comments: MAX_LINE_LENGTH,
        // ignorePattern: "",
        ignoreComments: false,
        ignoreTrailingComments: false,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      }],
      '@stylistic/max-statements-per-line': ['error', {
        max: 1,
      }],
      '@stylistic/member-delimiter-style': ['warn', {
        singleline: {
          delimiter: 'comma',
          requireLast: false,
        },
        multiline: {
          delimiter: 'none',
          requireLast: false,
        },
        multilineDetection: 'brackets',
      }],
      '@stylistic/multiline-comment-style': ['off', 'starred-block'],
      '@stylistic/multiline-ternary': ['warn', 'always-multiline'],
      '@stylistic/new-parens': ['warn', 'always'],
      '@stylistic/newline-per-chained-call': ['warn', {
        ignoreChainWithDepth: 2,
      }],
      '@stylistic/no-confusing-arrow': ['warn', {
        allowParens: true,
        onlyOneSimpleParam: true,
      }],
      '@stylistic/no-extra-parens': ['off', 'all', {
        // allowParensAfterCommentPattern: "any-string-pattern",
        // conditionalAssign: false,
        // enforceForArrowConditionals: false,
        // enforceForFunctionPrototypeMethods: false,
        // enforceForNewInMemberExpressions: false,
        // enforceForSequenceExpressions: false,
        // ignoreJSX: "none",
        // nestedBinaryExpressions: false,
        // returnAssign: false,
        // ternaryOperandBinaryExpressions: false,
      }],
      '@stylistic/no-extra-semi': 'warn',
      '@stylistic/no-floating-decimal': 'warn',
      '@stylistic/no-mixed-operators': ['warn', {
        groups: [
          ['+', '-', '*', '/', '%', '**'],
          ['&', '|', '^', '~', '<<', '>>', '>>>'],
          ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
          ['&&', '||'],
          ['in', 'instanceof'],
        ],
        allowSamePrecedence: true,
      }],
      '@stylistic/no-mixed-spaces-and-tabs': 'warn',
      '@stylistic/no-multi-spaces': ['warn', {
        ignoreEOLComments: false,
        exceptions: {
          Property: true,
        },
        includeTabs: true,
      }],
      '@stylistic/no-multiple-empty-lines': ['warn', {
        max: 2,
        maxBOF: 1,
        maxEOF: 0,
      }],
      '@stylistic/no-tabs': 'warn',
      '@stylistic/no-trailing-spaces': ['warn', {
        skipBlankLines: false,
        ignoreComments: false,
      }],
      '@stylistic/no-whitespace-before-property': 'warn',
      '@stylistic/nonblock-statement-body-position': ['warn', 'any'],
      '@stylistic/object-curly-newline': ['warn', {
        consistent: true,
      }],
      '@stylistic/object-curly-spacing': ['warn', 'always'],
      '@stylistic/object-property-newline': 'off',
      '@stylistic/one-var-declaration-per-line': ['warn', 'initializations'],
      '@stylistic/operator-linebreak': ['warn', 'before', {
        overrides: {
          '=': 'after',
        },
      }],
      '@stylistic/padded-blocks': 'off',
      '@stylistic/padding-line-between-statements': 'off',
      '@stylistic/quote-props': ['warn', 'as-needed'],
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      '@stylistic/quotes': ['warn', IS_SINGLE_QUOTES ? 'single' : 'double', {
        avoidEscape: true,
        allowTemplateLiterals: true,
      }],
      '@stylistic/rest-spread-spacing': ['warn', 'never'],
      '@stylistic/semi': ['warn', 'never', {
        beforeStatementContinuationChars: 'never',
      }],
      '@stylistic/semi-spacing': ['warn', {
        before: false,
        after: true,
      }],
      '@stylistic/semi-style': ['warn', 'last'],
      '@stylistic/space-before-blocks': ['warn', 'always'],
      '@stylistic/space-before-function-paren': ['warn', {
        anonymous: 'never',
        asyncArrow: 'always',
        named: 'never',
      }],
      '@stylistic/space-in-parens': ['warn', 'never'],
      '@stylistic/space-infix-ops': 'warn',
      '@stylistic/space-unary-ops': ['warn', {
        words: true,
        nonwords: false,
      }],
      '@stylistic/spaced-comment': ['warn', 'always', {
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
      '@stylistic/switch-colon-spacing': ['warn', {
        before: false,
        after: true,
      }],
      '@stylistic/template-curly-spacing': ['warn', 'never'],
      '@stylistic/template-tag-spacing': ['warn', 'never'],
      '@stylistic/type-annotation-spacing': ['warn', {
        before: false,
        after: true,
        overrides: {
          arrow: {
            before: true,
            after: true,
          },
        },
      }],
      '@stylistic/type-generic-spacing': 'warn',
      '@stylistic/type-named-tuple-spacing': 'warn',
      '@stylistic/wrap-iife': ['warn', 'inside', {
        functionPrototypeMethods: true,
      }],
      '@stylistic/wrap-regex': 'off',
      '@stylistic/yield-star-spacing': ['warn', 'before'],
    },
  },
  stylistic.configs['disable-legacy'],

  typescriptSupportConfig,
  {
    name: 'typescript_formatting',
    files: tsFileAnyPath,
    rules: {
      '@typescript-eslint/adjacent-overload-signatures': 'warn',
      '@typescript-eslint/array-type': ['warn', {
        default: 'array',
      }],
      '@typescript-eslint/ban-tslint-comment': 'off',
      '@typescript-eslint/class-literal-property-style': 'off',
      '@typescript-eslint/consistent-generic-constructors': ['warn', 'constructor'],
      '@typescript-eslint/consistent-indexed-object-style': 'off',
      '@typescript-eslint/consistent-type-assertions': ['warn', {
        assertionStyle: 'as',
        objectLiteralTypeAssertions: 'allow',
      }],
      '@typescript-eslint/consistent-type-definitions': 'off',
      'dot-notation': 'off',
      '@typescript-eslint/dot-notation': ['warn', {
        // eslint options
        allowKeywords: true,
        allowPattern: '^([a-zA-Z_]+[a-zA-Z0-9_]*)?(_[a-zA-Z0-9_]*)$',

        // typescript-eslint options
        allowPrivateClassPropertyAccess: false,
        allowProtectedClassPropertyAccess: false,
        allowIndexSignaturePropertyAccess: false,
      }],
      '@typescript-eslint/no-confusing-non-null-assertion': 'error',
      'no-empty-function': 'off',
      '@typescript-eslint/no-empty-function': ['warn', {
        allow: [
          // eslint options
          'constructors',

          // typescript-eslint options
          'private-constructors',
          'protected-constructors',
          'overrideMethods',
        ],
      }],
      '@typescript-eslint/no-inferrable-types': ['warn', {
        ignoreParameters: false,
        ignoreProperties: false,
      }],
      '@typescript-eslint/non-nullable-type-assertion-style': 'warn',
      '@typescript-eslint/prefer-find': 'warn',
      '@typescript-eslint/prefer-for-of': 'warn',
      '@typescript-eslint/prefer-function-type': 'warn',
      '@typescript-eslint/prefer-includes': 'warn',
      '@typescript-eslint/prefer-nullish-coalescing': ['warn', {
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
      '@typescript-eslint/prefer-optional-chain': ['warn', {
        allowPotentiallyUnsafeFixesThatModifyTheReturnTypeIKnowWhatImDoing: false,
        checkAny: true,
        checkUnknown: true,
        checkBigInt: true,
        checkBoolean: true,
        checkNumber: true,
        checkString: true,
        requireNullish: false,
      }],
      '@typescript-eslint/prefer-regexp-exec': 'warn',
      '@typescript-eslint/prefer-string-starts-ends-with': ['warn', {
        allowSingleElementEquality: 'never',
      }],
    },
  },
]
