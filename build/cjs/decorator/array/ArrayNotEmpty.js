"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayNotEmpty = exports.arrayNotEmpty = exports.ARRAY_NOT_EMPTY = void 0;
const ValidateBy_1 = require("../common/ValidateBy");
const messages_1 = __importDefault(require("../../utils/messages"));
exports.ARRAY_NOT_EMPTY = 'arrayNotEmpty';
/**
 * Checks if given array is not empty.
 * If null or undefined is given then this function returns false.
 */
function arrayNotEmpty(array) {
    return Array.isArray(array) && array.length > 0;
}
exports.arrayNotEmpty = arrayNotEmpty;
/**
 * Checks if given array is not empty.
 * If null or undefined is given then this function returns false.
 */
function ArrayNotEmpty(validationOptions) {
    return (0, ValidateBy_1.ValidateBy)({
        name: exports.ARRAY_NOT_EMPTY,
        validator: {
            validate: (value, args) => arrayNotEmpty(value),
            defaultMessage: (0, ValidateBy_1.buildMessage)(eachPrefix => eachPrefix + messages_1.default.notBeEmpty, validationOptions),
        },
    }, validationOptions);
}
exports.ArrayNotEmpty = ArrayNotEmpty;
//# sourceMappingURL=ArrayNotEmpty.js.map