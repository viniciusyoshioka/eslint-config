import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react"


const SomeContext = createContext({ a: 1, b: 2, c: 3 })


function Component() {

  const { a, b, c } = useContext(SomeContext)
  const ref = useRef(null)
  const [state, setState] = useState(false)
  const [reducer, dispatch] = useReducer(() => ({}), {})
  const memoValue = useMemo(() => state, [state])

  const callback = useCallback(() => {}, [])

  useEffect(() => {}, [])
  useLayoutEffect(() => {}, [])

  return null
}


/**
 * Keep this `export` to avoid duplicate identifier errors,
 * even if nothing is exported and used in other files.
 */
export { }


// @stylistic/indent

// ArrayExpression
let newArray = [
  0,
  1,
  2,
]

// CallExpression
function localFunction(a: number, b: number, c: object) {
  return a + b
}

localFunction(1, 2, { a: 1, b: 2 })

localFunction(
  1,
  2,
  { a: 1, b: 2 },
)

localFunction(
  1,
  2,
  {
    a: 1,
    b: 2,
  },
)

// flatTernaryExpressions
{
  let condition1 = true
  let condition2 = true
  condition1
    ? 1
    : condition2
      ? 2
      : 3
}

// FunctionDeclaration
function functionDeclaration(
  a: number,
  b: number,
  c: number,
  d: number,
) {
  return a + b + c + d
}

// FunctionExpression
let functionExpression = function(
  a: number,
  b: number,
  c: number,
  d: number,
) {
  return a + b + c + d
}

// ignoreComments
let functionWithIndent = () => {
  // Comment
  function localFunction() {}

  // Comment
  function otherLocalFunction() {}
}

// ignoredNodes
// Cannot be tested as it modifies other rule's options

// ImportDeclaration
// Tested on the top of the file

// MemberExpression
newArray
  .map(item => item * item)
  .filter(item => item > 0)
  .concat(newArray)

// ObjectExpression
let newObject = {
  a: 1,
  b: 2,
  c: 3,
}

// offsetTernaryExpressions
let condition1 = true
let condition2 = true

// condition1
//   ? () => (
//     "a === b"
//   )
//   : condition2
//     ? () => (
//       "a > b"
//     )
//     : () => (
//       "a < b"
//     )

let r = condition1
  ? () => {
      return "a === b"
    }
  : condition2
    ? () => {
        return "a > b"
      }
    : () => {
        return "a < b"
      }


// outerIIFEBody
{
  (function() {
    function functionInsideBlock(x: number, y: number) {
      return x + y
    }
  })()
}


// SwitchCase
let someVariable = 1
switch (someVariable) {
  case 1:
    break
  case 2:
    break
  default:
    break
}

// tabLength
// Cannot be tested when indent is set to 2 spaces

// VariableDeclarator
var var1, var2, var3
var var4,
    var5,
    var6

let let1, let2, let3
let let4,
    let5,
    let6

const const1 = 1,
      const2 = 2


// @typescript-eslint/adjacent-overload-signatures
class FooClass {
  foo(param: string): void
  foo(param: number): void
  foo(param: string | number): void {}

  bar(): void {}
}


// @typescript-eslint/array-type
// const numberArray: Array<number> = [1, 2, 3]
const numberArray: number[] = [1, 2, 3]


// @typescript-eslint/class-literal-property-style
class ClassLiteralPropertyStyle {
  readonly propertyLiteral = 1
  readonly propertyNotLiteral = [1, 2, 3]

  get methodLiteralNumber() {
    return 1
  }

  get methodNotLiteral() {
    return [1, 2, 3]
  }
}


// @typescript-eslint/consistent-generic-constructors
const set1 = new Set()
const set2 = new Set<string>()
// const set3: Set<string> = new Set()
const set4: Set<string> = new Set<string>()


// @typescript-eslint/consistent-type-assertions
type FooType = {
  foo: number
}

type BarType = {
  bar: number
}


const foo: FooType & BarType = {
  foo: 1,
  bar: 2,
}


const fooWithDeclaration: FooType = {
  foo: 1,
  // extra: "bar",
}

const fooWithAsAssertion = {
  foo: 1,
  extra: "bar",
} as FooType


function barFunction(fooParam: FooType) {
  return fooParam
}

barFunction({
  foo: 1,
  // extra: "bar",
})

barFunction({
  foo: 1,
  extra: "bar",
} as FooType)


// @typescript-eslint/dot-notation
class ClassDotNotation {
  interface = 1
  property = 2
  snake_case_property = 3

  class() {}

  method() {}

  snake_case_method() {}
}

const test = new ClassDotNotation()

test.interface
test.property
test.snake_case_property
test["snake_case_property"]

test.class()
test.method()
test.snake_case_method()
test["snake_case_method"]()


// @typescript-eslint/no-confusing-non-null-assertion
// const isEqualsBar = foo.bar! == 1
// const isEqualsNum = 1 + foo.bar! == 2
const isEqualsBar = (foo.bar!) == 1
const isEqualsNum = (1 + foo.bar!) == 2


// @typescript-eslint/no-empty-function
function emptyFunction() {}
const emptyAnonymousFunction = function() {}
const emptyArrowFunction = () => {}
function *emptyGeneratorFunction() {}


async function emptyAsyncFunction() {}
const emptyAsyncAnonymousFunction = async function() {}
const emptyAsyncArrowFunction = async () => {}


class ClassWithEmptyMethods {
  emptyMethod() {}

  *emptyGeneratorMethod() {}

  /**
   * Getters must return a value due to TypeScript, but can be
   * empty for eslint/typescript-eslint 'no-empty-function' rule.
   */
  // get emptyGetter() {}

  set emptySetter(value: number) {}

  async emptyAsyncMethod() {}
}


class ClassWithEmptyPublicConstructor {
  constructor() {}
}

class ClassWithEmptyProtectedConstructor {
  protected constructor() {}
}

class ClassWithEmptyPrivateConstructor {
  private constructor() {}
}


class ClassWithBaseMethod {
  baseMethodNotEmpty(): void {}

  baseMethod(): void {
    Math.random().toFixed(0)
  }
}

class ClassWithOverrideMethod extends ClassWithBaseMethod {
  override baseMethodNotEmpty(): void {}

  override baseMethod(): void {}
}


// @typescript-eslint/no-inferrable-types
function functionNoInferrableTypes(
  a = 1,
  // b: number = 2,
  c: number | undefined,
  d: number | undefined = 4,
  e: number | undefined = undefined,
) {}

class ClassNoInferrableTypes {
  propertyA = 5
  // propertyB: number = 5
  propertyC: number | undefined
  propertyD: number | undefined = 4
  propertyE: number | undefined = undefined
}


// @typescript-eslint/non-nullable-type-assertion-style
const maybe: string | undefined = Math.random() > 0.5 ? "string" : undefined
// const definitely = maybe as string
// const alsoDefinitely = maybe as string
const definitely = maybe!
const alsoDefinitely = maybe!


// @typescript-eslint/prefer-find
const array = [1, 2, 3]
// const found = array.filter(item => item === 2)[0]
const found = array.find(item => item === 2)


// @typescript-eslint/prefer-for-of
const arrayForOf = [1, 2, 3]

// for (let i = 0; i < arrayForOf.length; i++) {
//   const item = arrayForOf[i]
//   if (item % 2 === 0) {
//     break
//   }
//   // if (i % 2 === 0) {
//   //   break
//   // }
// }

for (const item of arrayForOf) {
  if (item % 2 === 0) {
    break
  }
}
