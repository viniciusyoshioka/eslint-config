
/**
 * Keep this `export` to avoid duplicate identifier errors,
 * even if nothing is exported and used in other files.
 */
export { }


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
const emptyAnonymousFunction = function () {}
const emptyArrowFunction = () => {}
function *emptyGeneratorFunction() {}


async function emptyAsyncFunction() {}
const emptyAsyncAnonymousFunction = async function () {}
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
