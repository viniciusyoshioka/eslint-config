
/**
 * Keep this `export` to avoid duplicate identifier errors,
 * even if nothing is exported and used in other files.
 */
export { }


let array
let arrowFunction
let object

let foo
let bar
let a
let b
let c
let d
let e
let f


// @stylistic/array-bracket-newline
array = []

array = [
]

array = [0,
  1,
  2]

array = [
  0,
  1,
  2,
]


// @stylistic/array-bracket-spacing
// array = [ 0, 1, 2, 3, 4 ]
array = [0, 1, 2, 3, 4]


// @stylistic/array-element-newline
array = [
  0, 1, 2,
]

// array = [
//   0,
//   1, 2,
// ]

array = [
  0,
  1,
  2,
]


// @stylistic/arrow-parens
// arrowFunction = (x) => x
arrowFunction = () => {}


// @stylistic/arrow-spacing
// arrowFunction = ()=>{}
arrowFunction = () => {}


// @stylistic/block-spacing
// if (foo) { bar = 0 }

if (foo) bar = 0

if (foo)
  bar = 0

if (foo) {
  bar = 0
}


// @stylistic/brace-style
// if (foo)
// {
//   bar = 0
// }
// else
// {
//   bar = 1
// }

if (foo) {
  bar = 0
} else {
  bar = 1
}


// @stylistic/comma-dangle
// object = {
//   foo: 'foo',
//   bar: 'bar'
// }

object = {
  foo: 'foo',
  bar: 'bar',
}


// @stylistic/comma-spacing
// array = [0 ,1 ,2]
// foo = 'foo' ,bar = 'bar'
array = [0, 1, 2]
foo = 'foo', bar = 'bar'


// @stylistic/comma-style
// array = [
//   0
//   ,1
// ]

array = [
  0,
  1,
]

// var newFoo = 'foo'
//     ,newBar = 'bar'

var newFoo = 'foo',
    newBar = 'bar'


// @stylistic/computed-property-spacing
object = {
  a: 1,
  b: 2,
  c: 3,
}

// a = object[ a]
// a = object[a ]
// a = object[ a ]
a = object[a]
b = object[b]


// @stylistic/dot-location
array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// array.
//   map(x => x * 2).
//   filter(x => x > 0)

array
  .map(x => x * 2)
  .filter(x => x > 0)


// @stylistic/function-call-spacing
// console.log (1)
console.log(1)


// @stylistic/function-call-argument-newline
foo = (a, b, c) => {}

foo(1, 2, { a: 1, b: 2 })

foo(1, 2, {
  a: 1,
  b: 2,
})

// foo(
//   1, 2,
//   {a: 1, b: 2},
// )

foo(
  1,
  2,
  { a: 1, b: 2 },
)

foo(
  1,
  2,
  {
    a: 1,
    b: 2,
  },
)


// @stylistic/function-paren-newline
// foo = function(bar,
//   baz,
// ) {}

// foo = function(
//   bar, baz,
// ) {}

foo = function(bar) {}

foo = function(bar, baz) {}

foo = function(
  bar,
) {}

foo = function(
  bar,
  baz,
) {}

foo(
  function() {
    return baz
  },
)


// @stylistic/generator-star-spacing
// foo = function*() {}

// foo = function* () {}

// foo = function * () {}

foo = function *() {}

// function*foo() {}

// function* foo() {}

// function * foo() {}

function *foo() {}


// @stylistic/implicit-arrow-linebreak
// fooFunction = foo =>
//   bar

fooFunction = foo => bar

// fooFunction = foo =>
//   bar =>
//     foo + bar

fooFunction = foo => bar => foo + bar


// @stylistic/indent
// Implemented in tests/formatting/typescript.ts


// @stylistic/indent-binary-ops
a = true
b = true
c = false
d = true
e = false
f = false

if (a
  && b
  && c
  && (d
    || e
    || f
  )
) {
  foo()
}


// @stylistic/key-spacing
// object = {
//   a:1,
//   b :2,
//   c : 3,
// }

object = {
  a: 1,
  b: 2,
  c: 3,
}


// @stylistic/keyword-spacing
// if(false) {
//   // Processing
// }else if(false) {
//   // Processing
// }else{
//   // Processing
// }

if (false) {
  // Processing
} else if (false) {
  // Processing
} else {
  // Processing
}


// @stylistic/lines-between-class-members
class ClassLinesBetweenClassMembers {
  property1 = 1
  property2 = 2
  property3 = 3

  method5() {}

  method6() {}

  property6 = 6
  property7 = 7

  constructor() {}

  property8 = 8
  property9 = 9

  method1() {}

  method2() {}

  method3() {}

  property4 =
    this.method1()
    && this.method2()
    && this.method3()
    && this.method4()
  property5 = 5

  method4() {}
}


// @stylistic/multiline-ternary
const condition1 = true
const condition2 = false
let result = false

// result = condition1
//   ? 0 : condition2 ? 1 : 2

result = condition1 ? 0 : 1

result = condition1 ? 0 : condition2 ? 1 : 2

result = condition1
  ? 0
  : condition2 ? 1 : 2

result = condition1
  ? 0
  : condition2
    ? 1
    : 2


// @stylistic/newline-per-chained-call
array = [0, 1, 2, 3, 4]

// array.filter(x => x > 0).map(x => x.toString()).map(x => Number(x))

array.filter(x => x > 0).map(x => x.toString())

array.filter(x => x > 0).map(x => x.toString())
  .map(x => Number(x))
  .map(x => String(x))

array
  .filter(x => x > 0)
  .map(x => x.toString())
  .map(x => Number(x))
  .map(x => String(x))


// @stylistic/no-extra-parens
{
  // (array.length ? array : [])
  array.length ? array : []
}

(0).toString()


// @stylistic/object-curly-newline
object = {}

object = { a: 1, b: 2 }

// object = {
//   a: 1,
//   b: 2}

object = {
  a: 1,
  b: 2,
}

object = {
  a: 1, b: 2,
}


// @stylistic/space-before-function-paren
const anonymousFunction = function() {}

const asyncAnonymousFunction = async function() {}

function namedFunction() {}

async function asyncNamedFunction() {}

const normalArrowFunction = () => {}

const asyncArrowFunction = async () => {}


// @stylistic/eol-last
