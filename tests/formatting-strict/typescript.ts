
/**
 * Keep this `export` to avoid duplicate identifier errors,
 * even if nothing is exported and used in other files.
 */
export { }


// @typescript-eslint/class-literal-property-style
class ClassLiteralPropertyStyle {
  readonly propertyLiteral = 1
  readonly propertyNotLiteral = [1, 2, 3]

  // get methodLiteralNumber() {
  //   return 1
  // }

  get methodNotLiteral() {
    return [1, 2, 3]
  }
}


// @typescript-eslint/no-empty-function
// function emptyFunction() {}
// const emptyAnonymousFunction = function () {}
// const emptyArrowFunction = () => {}
// function *emptyGeneratorFunction() {}


// async function emptyAsyncFunction() {}
// const emptyAsyncAnonymousFunction = async function () {}
// const emptyAsyncArrowFunction = async () => {}


class ClassWithEmptyMethods {
  // emptyMethod() {}

  // *emptyGeneratorMethod() {}

  // get emptyGetter() {}

  // set emptySetter(value: number) {}

  // async emptyAsyncMethod() {}
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
  // baseMethodNotEmpty(): void {}

  baseMethod(): void {
    Math.random().toFixed(0)
  }
}

class ClassWithOverrideMethod extends ClassWithBaseMethod {
  // override baseMethodNotEmpty(): void {}

  override baseMethod(): void {}
}
