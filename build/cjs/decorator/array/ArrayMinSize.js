"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayMinSize = exports.arrayMinSize = exports.ARRAY_MIN_SIZE = void 0;
const ValidateBy_1 = require("../common/ValidateBy");
const messages_1 = __importDefault(require("../../utils/messages"));
exports.ARRAY_MIN_SIZE = 'arrayMinSize';
/**
 * Checks if the array's length is greater than or equal to the specified number.
 * If null or undefined is given then this function returns false.
 */
function arrayMinSize(array, min) {
    return Array.isArray(array) && array.length >= min;
}
exports.arrayMinSize = arrayMinSize;
/**
 * Checks if the array's length is greater than or equal to the specified number.
 * If null or undefined is given then this function returns false.
 */
function ArrayMinSize(min, validationOptions) {
    return (0, ValidateBy_1.ValidateBy)({
        name: exports.ARRAY_MIN_SIZE,
        constraints: [min],
        validator: {
            validate: (value, args) => arrayMinSize(value, args.constraints[0]),
            defaultMessage: (0, ValidateBy_1.buildMessage)(eachPrefix => eachPrefix + messages_1.default.atLeastElements, validationOptions),
        },
    }, validationOptions);
}
exports.ArrayMinSize = ArrayMinSize;
//# sourceMappingURL=ArrayMinSize.js.map