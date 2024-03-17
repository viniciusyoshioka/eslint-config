"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToWarn = void 0;
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
function convertToWarn(rules) {
    var transformedRules = {};
    var rulesKeys = Object.keys(rules);
    for (var i = 0; i < rulesKeys.length; i++) {
        var ruleKey = rulesKeys[i];
        var ruleValue = rules[ruleKey];
        if (typeof ruleValue === "undefined") {
            continue;
        }
        if (typeof ruleValue === "number" && ruleValue === 2) {
            transformedRules[ruleKey] = 1;
            continue;
        }
        if (typeof ruleValue === "string" && ruleValue === "error") {
            transformedRules[ruleKey] = "warn";
            continue;
        }
        if (typeof ruleValue === "object") {
            if (ruleValue[0] === 2) {
                transformedRules[ruleKey] = __spreadArray([1], ruleValue.slice(1), true);
                continue;
            }
            if (ruleValue[0] === "error") {
                transformedRules[ruleKey] = __spreadArray(["warn"], ruleValue.slice(1), true);
                continue;
            }
        }
        transformedRules[ruleKey] = ruleValue;
    }
    return transformedRules;
}
exports.convertToWarn = convertToWarn;
