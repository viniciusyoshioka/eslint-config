// eslint-disable-next-line @stylistic/max-len
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, no-undef
const { name } = require('../../package.json')


throw new Error(
  `The Legacy Config is not supported in the current version of ${name}. `
  + 'Please update ESLint to use the Flat Config or verify version compatibility.',
)
