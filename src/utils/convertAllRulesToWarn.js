
/**
 * Asserts that the severity of a ESLint rule has a valid
 * type and value.
 *
 * @param {import("eslint").Linter.RuleSeverity} severity
 *
 * @returns {asserts severity is Linter.RuleSeverity}
 */
function assertSeverity(severity) {
  const validTypes = ["number", "string"]
  const validNumberValues = [0, 1, 2]
  const valueStringValues = ["off", "warn", "error"]

  const severityType = typeof severity
  if (!validTypes.includes(severityType)) {
    const expectedTypes = validTypes.join(" ")
    throw new TypeError(
      `Invalid severity type: '${severityType}'. Expected one of: ${expectedTypes}`,
    )
  }

  const isNumberSeverityInvalid =
    typeof severity === "number" && !validNumberValues.includes(severity)
  const isStringSeverityInvalid =
    typeof severity === "string" && !valueStringValues.includes(severity)

  if (isNumberSeverityInvalid || isStringSeverityInvalid) {
    const expectedSeverityValues = [...validNumberValues, ...valueStringValues].join(" ")
    throw new Error(
      `Invalid severity: '${severity}'. Expected one of: ${expectedSeverityValues}`,
    )
  }
}

/**
 * Converts the severity of a ESLint primitive rule to `warn`.
 * Only affect enabled rules.
 *
 * @param {import("eslint").Linter.RuleSeverity} ruleValue
 *
 * @returns {import("eslint").Linter.RuleSeverity}
 */
function convertPrimitiveRule(ruleValue) {
  assertSeverity(ruleValue)

  if (ruleValue === 2) {
    return 1
  }
  if (ruleValue === "error") {
    return "warn"
  }

  return ruleValue
}

/**
 * Converts the severity of a ESLint array rule to `warn`.
 * Only affect enabled rules.
 *
 * @param {import("eslint").Linter.RuleSeverityAndOptions} ruleValue
 *
 * @returns {import("eslint").Linter.RuleSeverityAndOptions}
 */
function convertArrayRule(ruleValue) {
  const ruleSeverity = ruleValue[0]
  assertSeverity(ruleSeverity)

  if (ruleSeverity === 2) {
    ruleValue[0] = 1
  }
  if (ruleSeverity === "error") {
    ruleValue[0] = "warn"
  }

  return ruleValue
}


/**
 * Function to transform all enabled ESLint rules to `warn`.
 *
 * Obs.: It transforms the whole object, there is no exception option
 * to skip a rule.
 *
 * @param {Partial<import("eslint").Linter.RulesRecord>} rules
 * The eslint object rules to be transformed
 *
 * @returns {import("eslint").Linter.RulesRecord} The same eslint object,
 * but with enabled rules transformed to `warn`
 */
export function convertAllRulesToWarn(rules) {
  const transformedRules = {}

  const rulesKeys = Object.keys(rules)
  rulesKeys.forEach(ruleKey => {
    const ruleValue = rules[ruleKey]

    if (ruleValue === undefined || ruleValue === null) {
      return
    }

    if (Array.isArray(ruleValue)) {
      transformedRules[ruleKey] = convertArrayRule(ruleValue)
    } else {
      transformedRules[ruleKey] = convertPrimitiveRule(ruleValue)
    }
  })

  return transformedRules
}
