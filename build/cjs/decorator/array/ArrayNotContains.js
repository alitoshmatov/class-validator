"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayNotContains = exports.arrayNotContains = exports.ARRAY_NOT_CONTAINS = void 0;
const ValidateBy_1 = require("../common/ValidateBy");
const messages_1 = __importDefault(require("../../utils/messages"));
exports.ARRAY_NOT_CONTAINS = 'arrayNotContains';
/**
 * Checks if array does not contain any of the given values.
 * If null or undefined is given then this function returns false.
 */
function arrayNotContains(array, values) {
    if (!Array.isArray(array))
        return false;
    return values.every(value => array.indexOf(value) === -1);
}
exports.arrayNotContains = arrayNotContains;
/**
 * Checks if array does not contain any of the given values.
 * If null or undefined is given then this function returns false.
 */
function ArrayNotContains(values, validationOptions) {
    return (0, ValidateBy_1.ValidateBy)({
        name: exports.ARRAY_NOT_CONTAINS,
        constraints: [values],
        validator: {
            validate: (value, args) => arrayNotContains(value, args.constraints[0]),
            defaultMessage: (0, ValidateBy_1.buildMessage)(eachPrefix => eachPrefix + messages_1.default.notContainValues, validationOptions),
        },
    }, validationOptions);
}
exports.ArrayNotContains = ArrayNotContains;
//# sourceMappingURL=ArrayNotContains.js.map