import tslint from 'typescript-eslint'

import {
  alwaysIgnorePaths,
  jsFileAnyPath,
  tsFileAnyPath,
  typescriptSupportConfig,
} from '../constants.js'


/** @type {import("eslint").Linter.Config[]} */
export const typescriptConfig = [
  {
    ignores: alwaysIgnorePaths,
  },

  ...tslint.configs.recommended,
  typescriptSupportConfig,
  {
    name: 'typescript_lint',
    files: [
      ...jsFileAnyPath,
      ...tsFileAnyPath,
    ],
    rules: {
      // stylistic @typescript-eslint rule
      '@typescript-eslint/adjacent-overload-signatures': 'off',
      // stylistic @typescript-eslint rule
      '@typescript-eslint/array-type': 'off',
      '@typescript-eslint/await-thenable': 'warn',
      // stylistic @typescript-eslint rule
      '@typescript-eslint/ban-tslint-comment': 'off',
      // stylistic @typescript-eslint rule
      '@typescript-eslint/class-literal-property-style': 'off',
      'class-methods-use-this': 'off',
      '@typescript-eslint/class-methods-use-this': ['off', {
        exceptMethods: [],
        enforceForClassFields: false,
        ignoreOverrideMethods: true,
        ignoreClassesThatImplementAnInterface: false,
      }],
      // stylistic @typescript-eslint rule
      '@typescript-eslint/consistent-generic-constructors': 'off',
      // stylistic @typescript-eslint rule
      '@typescript-eslint/consistent-indexed-object-style': 'off',
      'consistent-return': 'off',
      '@typescript-eslint/consistent-return': 'error',
      // stylistic @typescript-eslint rule
      '@typescript-eslint/consistent-type-assertions': 'off',
      // stylistic @typescript-eslint rule
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/consistent-type-exports': ['error', {
        fixMixedExportsWithInlineTypeSpecifier: false,
      }],
      '@typescript-eslint/consistent-type-imports': ['error', {
        disallowTypeAnnotations: true,
        fixStyle: 'separate-type-imports',
        prefer: 'type-imports',
      }],
      'default-param-last': 'off',
      '@typescript-eslint/default-param-last': 'error',
      // stylistic @typescript-eslint rule
      '@typescript-eslint/dot-notation': 'off',
      '@typescript-eslint/explicit-function-return-type': ['warn', {
        allowConciseArrowFunctionExpressionsStartingWithVoid: false,
        allowDirectConstAssertionInArrowFunctions: true,
        allowedNames: [],
        allowExpressions: true,
        allowFunctionsWithoutTypeParameters: true,
        allowHigherOrderFunctions: true,
        allowIIFEs: true,
        allowTypedFunctionExpressions: true,
      }],
      '@typescript-eslint/explicit-member-accessibility': ['warn', {
        accessibility: 'no-public',
        ignoredMethodNames: [],
        overrides: {
          accessors: 'no-public',
          constructors: 'no-public',
          methods: 'no-public',
          parameterProperties: 'explicit',
          properties: 'no-public',
        },
      }],
      '@typescript-eslint/explicit-module-boundary-types': ['off', {
        allowArgumentsExplicitlyTypedAsAny: false,
        allowDirectConstAssertionInArrowFunctions: true,
        allowedNames: [],
        allowHigherOrderFunctions: true,
        allowTypedFunctionExpressions: true,
      }],
      'init-declarations': 'off',
      '@typescript-eslint/init-declarations': ['warn', 'always'],
      'max-params': 'off',
      '@typescript-eslint/max-params': ['warn', {
        max: 3,
        countVoidThis: false,
      }],
      '@typescript-eslint/member-ordering': 'off',
      '@typescript-eslint/method-signature-style': 'off',
      '@typescript-eslint/naming-convention': 'off',
      'no-array-constructor': 'off',
      '@typescript-eslint/no-array-constructor': 'error',
      '@typescript-eslint/no-array-delete': 'error',
      '@typescript-eslint/no-base-to-string': 'error',
      // stylistic @typescript-eslint rule
      '@typescript-eslint/no-confusing-non-null-assertion': 'off',
      '@typescript-eslint/no-confusing-void-expression': ['warn', {
        ignoreArrowShorthand: true,
        ignoreVoidOperator: false,
        ignoreVoidReturningFunctions: false,
      }],
      '@typescript-eslint/no-deprecated': ['warn', {
        allow: [],
      }],
      'no-dupe-class-members': 'off',
      '@typescript-eslint/no-dupe-class-members': 'off',
      '@typescript-eslint/no-duplicate-enum-values': 'error',
      '@typescript-eslint/no-duplicate-type-constituents': ['warn', {
        ignoreIntersections: true,
        ignoreUnions: false,
      }],
      '@typescript-eslint/no-dynamic-delete': 'error',
      // stylistic @typescript-eslint rule
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-empty-object-type': ['warn', {
        allowInterfaces: 'always',
        allowObjectTypes: 'never',
      }],
      '@typescript-eslint/no-explicit-any': ['error', {
        fixToUnknown: false,
        ignoreRestArgs: false,
      }],
      '@typescript-eslint/no-extra-non-null-assertion': 'warn',
      '@typescript-eslint/no-extraneous-class': ['off', {
        allowConstructorOnly: true,
        allowEmpty: false,
        allowStaticOnly: false,
        allowWithDecorator: false,
      }],
      '@typescript-eslint/no-floating-promises': ['off', {
        allowForKnownSafeCalls: [],
        allowForKnownSafePromises: [],
        checkThenables: false,
        ignoreIIFE: false,
        ignoreVoid: true,
      }],
      '@typescript-eslint/no-for-in-array': 'error',
      'no-implied-eval': 'off',
      '@typescript-eslint/no-implied-eval': 'error',
      '@typescript-eslint/no-import-type-side-effects': 'off',
      // stylistic @typescript-eslint rule
      '@typescript-eslint/no-inferrable-types': 'off',
      'no-invalid-this': 'off',
      '@typescript-eslint/no-invalid-this': 'error',
      '@typescript-eslint/no-invalid-void-type': ['error', {
        allowAsThisParameter: false,
        allowInGenericTypeArguments: true,
      }],
      'no-loop-func': 'off',
      '@typescript-eslint/no-loop-func': 'error',
      'no-magic-numbers': 'off',
      '@typescript-eslint/no-magic-numbers': ['off', {
        ignore: [],
        ignoreArrayIndexes: true,
        ignoreDefaultValues: true,
        ignoreClassFieldInitialValues: true,
        enforceConst: true,
        detectObjects: false,
        ignoreEnums: true,
        ignoreNumericLiteralTypes: true,
        ignoreReadonlyClassProperties: true,
        ignoreTypeIndexes: true,
      }],
      '@typescript-eslint/no-meaningless-void-operator': ['warn', {
        checkNever: false,
      }],
      '@typescript-eslint/no-misused-new': 'error',
      '@typescript-eslint/no-misused-promises': ['off', {
        checksConditionals: true,
        checksSpreads: true,
        checksVoidReturn: {
          arguments: true,
          attributes: true,
          inheritedMethods: true,
          properties: true,
          returns: true,
          variables: true,
        },
      }],
      '@typescript-eslint/no-misused-spread': ['error', {
        allow: [],
      }],
      '@typescript-eslint/no-mixed-enums': 'error',
      '@typescript-eslint/no-namespace': ['error', {
        allowDeclarations: false,
        allowDefinitionFiles: true,
      }],
      '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
      '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
      '@typescript-eslint/no-non-null-assertion': 'error',
      'no-redeclare': 'off',
      '@typescript-eslint/no-redeclare': ['off', {
        builtinGlobals: true,
        ignoreDeclarationMerge: true,
      }],
      '@typescript-eslint/no-redundant-type-constituents': 'error',
      '@typescript-eslint/no-require-imports': 'off',
      'no-restricted-imports': 'off',
      '@typescript-eslint/no-restricted-imports': 'off',
      '@typescript-eslint/no-restricted-types': 'off',
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': 'off',
      '@typescript-eslint/no-this-alias': ['error', {
        allowDestructuring: false,
        allowedNames: [],
      }],
      '@typescript-eslint/no-unnecessary-boolean-literal-compare': ['error', {
        allowComparingNullableBooleansToFalse: true,
        allowComparingNullableBooleansToTrue: true,
      }],
      '@typescript-eslint/no-unnecessary-condition': ['warn', {
        allowConstantLoopConditions: true,
        checkTypePredicates: false,
      }],
      '@typescript-eslint/no-unnecessary-parameter-property-assignment': 'warn',
      '@typescript-eslint/no-unnecessary-qualifier': 'warn',
      '@typescript-eslint/no-unnecessary-template-expression': 'warn',
      '@typescript-eslint/no-unnecessary-type-arguments': 'warn',
      '@typescript-eslint/no-unnecessary-type-assertion': ['warn', {
        typesToIgnore: [],
      }],
      '@typescript-eslint/no-unnecessary-type-constraint': 'warn',
      '@typescript-eslint/no-unnecessary-type-parameters': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'error',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-call': 'error',
      '@typescript-eslint/no-unsafe-declaration-merging': 'error',
      '@typescript-eslint/no-unsafe-enum-comparison': 'error',
      '@typescript-eslint/no-unsafe-function-type': 'error',
      '@typescript-eslint/no-unsafe-member-access': 'error',
      '@typescript-eslint/no-unsafe-return': 'error',
      '@typescript-eslint/no-unsafe-type-assertion': 'off',
      '@typescript-eslint/no-unsafe-unary-minus': 'error',
      'no-unused-expressions': 'off',
      '@typescript-eslint/no-unused-expressions': 'warn',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': ['off', {
        functions: false,
        classes: true,
        variables: true,
        allowNamedExports: false,
        enums: true,
        typedefs: true,
        ignoreTypeReferences: true,
      }],
      'no-useless-constructor': 'off',
      '@typescript-eslint/no-useless-constructor': 'warn',
      '@typescript-eslint/no-useless-empty-export': 'warn',
      '@typescript-eslint/no-wrapper-object-types': 'warn',
      // stylistic @typescript-eslint rule
      '@typescript-eslint/non-nullable-type-assertion-style': 'off',
      'no-throw-literal': 'off',
      '@typescript-eslint/only-throw-error': ['error', {
        allow: [],
        allowThrowingAny: false,
        allowThrowingUnknown: false,
      }],
      '@typescript-eslint/parameter-properties': ['off', {
        allow: [
          'readonly',
          'public',
          'protected',
          'private',
          'public readonly',
          'protected readonly',
          'private readonly',
        ],
        prefer: 'class-property',
      }],
      '@typescript-eslint/prefer-as-const': 'warn',
      'prefer-destructuring': 'off',
      '@typescript-eslint/prefer-destructuring': ['warn', {
        array: true,
        object: true,
      }],
      '@typescript-eslint/prefer-enum-initializers': 'error',
      // stylistic @typescript-eslint rule
      '@typescript-eslint/prefer-find': 'off',
      // stylistic @typescript-eslint rule
      '@typescript-eslint/prefer-for-of': 'off',
      // stylistic @typescript-eslint rule
      '@typescript-eslint/prefer-function-type': 'off',
      // stylistic @typescript-eslint rule
      '@typescript-eslint/prefer-includes': 'off',
      '@typescript-eslint/prefer-literal-enum-member': ['error', {
        allowBitwiseExpressions: false,
      }],
      '@typescript-eslint/prefer-namespace-keyword': 'error',
      // stylistic @typescript-eslint rule
      '@typescript-eslint/prefer-nullish-coalescing': 'off',
      // stylistic @typescript-eslint rule
      '@typescript-eslint/prefer-optional-chain': 'off',
      'prefer-promise-reject-errors': 'off',
      '@typescript-eslint/prefer-promise-reject-errors': ['error', {
        allowEmptyReject: false,
        allowThrowingAny: false,
        allowThrowingUnknown: false,
      }],
      '@typescript-eslint/prefer-readonly': ['warn', {
        onlyInlineLambdas: false,
      }],
      '@typescript-eslint/prefer-readonly-parameter-types': ['off', {
        allow: [],
        checkParameterProperties: true,
        ignoreInferredTypes: false,
        treatMethodsAsReadonly: false,
      }],
      // stylistic @typescript-eslint rule
      '@typescript-eslint/prefer-regexp-exec': 'off',
      '@typescript-eslint/prefer-return-this-type': 'error',
      // stylistic @typescript-eslint rule
      '@typescript-eslint/prefer-string-starts-ends-with': 'off',
      '@typescript-eslint/promise-function-async': ['warn', {
        allowAny: true,
        allowedPromiseNames: [],
        checkArrowFunctions: true,
        checkFunctionDeclarations: true,
        checkFunctionExpressions: true,
        checkMethodDeclarations: true,
      }],
      '@typescript-eslint/related-getter-setter-pairs': 'warn',
      'require-await': 'off',
      '@typescript-eslint/require-await': 'warn',
      '@typescript-eslint/restrict-plus-operands': ['error', {
        allowAny: false,
        allowBoolean: false,
        allowNullish: false,
        allowNumberAndString: false,
        allowRegExp: false,
      }],
      '@typescript-eslint/restrict-template-expressions': ['error', {
        allow: [{ name: ['Error', 'URL', 'URLSearchParams'], from: 'lib' }],
        allowAny: true,
        allowBoolean: true,
        allowNullish: true,
        allowNumber: true,
        allowRegExp: true,
      }],
      '@typescript-eslint/return-await': ['error', 'always'],
      '@typescript-eslint/strict-boolean-expressions': ['off', {
        allowAny: false,
        allowNullableBoolean: false,
        allowNullableEnum: false,
        allowNullableNumber: false,
        allowNullableObject: true,
        allowNullableString: false,
        allowNumber: true,
        allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
        allowString: true,
      }],
      '@typescript-eslint/switch-exhaustiveness-check': ['error', {
        allowDefaultCaseForExhaustiveSwitch: true,
        considerDefaultExhaustiveForUnions: true,
        requireDefaultForNonUnion: false,
      }],
      '@typescript-eslint/triple-slash-reference': ['error', {
        lib: 'always',
        path: 'never',
        types: 'prefer-import',
      }],
      '@typescript-eslint/typedef': ['error', {
        arrayDestructuring: false,
        arrowParameter: false,
        memberVariableDeclaration: false,
        objectDestructuring: false,
        parameter: false,
        propertyDeclaration: false,
        variableDeclaration: false,
        variableDeclarationIgnoreFunction: false,
      }],
      '@typescript-eslint/unbound-method': ['off', {
        ignoreStatic: false,
      }],
      '@typescript-eslint/unified-signatures': ['error', {
        ignoreDifferentlyNamedParameters: false,
      }],
      '@typescript-eslint/use-unknown-in-catch-callback-variable': 'warn',
    },
  },

  {
    name: 'disable_eslint_rules_handled_by_typescript_compiler',
    files: [
      ...jsFileAnyPath,
      ...tsFileAnyPath,
    ],
    rules: {
      'constructor-super': 'off',
      'getter-return': 'off',
      'no-class-assign': 'off',
      'no-const-assign': 'off',
      'no-dupe-args': 'off',
      'no-dupe-class-members': 'off',
      'no-dupe-keys': 'off',
      'no-func-assign': 'off',
      'no-import-assign': 'off',
      'no-new-native-nonconstructor': 'off',
      'no-obj-calls': 'off',
      'no-setter-return': 'off',
      'no-this-before-super': 'off',
      'no-undef': 'off',
      'no-unreachable': 'off',
      'no-unsafe-negation': 'off',
      'no-invalid-this': 'off',
      'no-redeclare': 'off',
    },
  },
]
