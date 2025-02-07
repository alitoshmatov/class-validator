"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Max = exports.max = exports.MAX = void 0;
const ValidateBy_1 = require("../common/ValidateBy");
const messages_1 = __importDefault(require("../../utils/messages"));
exports.MAX = 'max';
/**
 * Checks if the first number is less than or equal to the second.
 */
function max(num, max) {
    return typeof num === 'number' && typeof max === 'number' && num <= max;
}
exports.max = max;
/**
 * Checks if the first number is less than or equal to the second.
 */
function Max(maxValue, validationOptions) {
    return (0, ValidateBy_1.ValidateBy)({
        name: exports.MAX,
        constraints: [maxValue],
        validator: {
            validate: (value, args) => max(value, args.constraints[0]),
            defaultMessage: (0, ValidateBy_1.buildMessage)(eachPrefix => eachPrefix + messages_1.default.notMoreThanElements, validationOptions),
        },
    }, validationOptions);
}
exports.Max = Max;
//# sourceMappingURL=Max.js.map