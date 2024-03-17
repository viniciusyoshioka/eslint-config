import { Linter } from "eslint";
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
export declare function convertToWarn(rules: Partial<Linter.RulesRecord>): Linter.RulesRecord;
