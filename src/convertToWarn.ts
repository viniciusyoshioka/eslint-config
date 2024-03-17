import { Linter } from "eslint"


/**
 * Function to transform all enabled ESLint rules to `warn`.
 * Used to transform the default `@stylistic/eslint-plugin`'s rules, as
 * the enabled rules are configured as `error`, and I choose to set
 * formatting rules to `warn`.
 *
 * Obs.: It transforms the whole object, there is no exception option to
 * skip rule transformation.
 *
 * @param rules The eslint object rules to be transformed
 * @returns The same eslint object, but transformed
 */
export function convertToWarn(rules: Partial<Linter.RulesRecord>): Linter.RulesRecord {
    let transformedRules: Linter.RulesRecord = {}

    const rulesKeys = Object.keys(rules)
    for (let i = 0; i < rulesKeys.length; i++) {
        const ruleKey = rulesKeys[i]
        const ruleValue = rules[ruleKey]

        if (typeof ruleValue === "undefined") {
            continue
        }

        if (typeof ruleValue === "number" && ruleValue === 2) {
            transformedRules[ruleKey] = 1
            continue
        }

        if (typeof ruleValue === "string" && ruleValue === "error") {
            transformedRules[ruleKey] = "warn"
            continue
        }

        if (typeof ruleValue === "object") {
            if (ruleValue[0] === 2) {
                transformedRules[ruleKey] = [1, ...ruleValue.slice(1)]
                continue
            }
            if (ruleValue[0] === "error") {
                transformedRules[ruleKey] = ["warn", ...ruleValue.slice(1)]
                continue
            }
        }

        transformedRules[ruleKey] = ruleValue
    }

    return transformedRules
}
