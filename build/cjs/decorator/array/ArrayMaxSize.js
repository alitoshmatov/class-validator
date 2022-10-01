"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayMaxSize = exports.arrayMaxSize = exports.ARRAY_MAX_SIZE = void 0;
const ValidateBy_1 = require("../common/ValidateBy");
const messages_1 = __importDefault(require("../../utils/messages"));
exports.ARRAY_MAX_SIZE = 'arrayMaxSize';
/**
 * Checks if the array's length is less or equal to the specified number.
 * If null or undefined is given then this function returns false.
 */
function arrayMaxSize(array, max) {
    return Array.isArray(array) && array.length <= max;
}
exports.arrayMaxSize = arrayMaxSize;
/**
 * Checks if the array's length is less or equal to the specified number.
 * If null or undefined is given then this function returns false.
 */
function ArrayMaxSize(max, validationOptions) {
    return (0, ValidateBy_1.ValidateBy)({
        name: exports.ARRAY_MAX_SIZE,
        constraints: [max],
        validator: {
            validate: (value, args) => arrayMaxSize(value, args.constraints[0]),
            defaultMessage: (0, ValidateBy_1.buildMessage)(eachPrefix => eachPrefix + messages_1.default.notMoreThanElements, validationOptions),
        },
    }, validationOptions);
}
exports.ArrayMaxSize = ArrayMaxSize;
//# sourceMappingURL=ArrayMaxSize.js.map