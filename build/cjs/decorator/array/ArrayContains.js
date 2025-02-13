"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayContains = exports.arrayContains = exports.ARRAY_CONTAINS = void 0;
const ValidateBy_1 = require("../common/ValidateBy");
const messages_1 = __importDefault(require("../../utils/messages"));
exports.ARRAY_CONTAINS = 'arrayContains';
/**
 * Checks if array contains all values from the given array of values.
 * If null or undefined is given then this function returns false.
 */
function arrayContains(array, values) {
    if (!Array.isArray(array))
        return false;
    return values.every(value => array.indexOf(value) !== -1);
}
exports.arrayContains = arrayContains;
/**
 * Checks if array contains all values from the given array of values.
 * If null or undefined is given then this function returns false.
 */
function ArrayContains(values, validationOptions) {
    return (0, ValidateBy_1.ValidateBy)({
        name: exports.ARRAY_CONTAINS,
        constraints: [values],
        validator: {
            validate: (value, args) => arrayContains(value, args.constraints[0]),
            defaultMessage: (0, ValidateBy_1.buildMessage)(eachPrefix => eachPrefix + messages_1.default.containValues, validationOptions),
        },
    }, validationOptions);
}
exports.ArrayContains = ArrayContains;
//# sourceMappingURL=ArrayContains.js.map