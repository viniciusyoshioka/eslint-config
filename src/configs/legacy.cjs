const { name } = require('../../package.json')


throw new Error(
  `The Legacy Config is not supported in the current version of ${name}. `
  + 'Please update ESLint to use the Flat Config or verify version compatibility.',
)
