"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MinLength = exports.minLength = exports.MIN_LENGTH = void 0;
const ValidateBy_1 = require("../common/ValidateBy");
const isLength_1 = __importDefault(require("validator/lib/isLength"));
const messages_1 = __importDefault(require("../../utils/messages"));
exports.MIN_LENGTH = 'minLength';
/**
 * Checks if the string's length is not less than given number. Note: this function takes into account surrogate pairs.
 * If given value is not a string, then it returns false.
 */
function minLength(value, min) {
    return typeof value === 'string' && (0, isLength_1.default)(value, { min });
}
exports.minLength = minLength;
/**
 * Checks if the string's length is not less than given number. Note: this function takes into account surrogate pairs.
 * If given value is not a string, then it returns false.
 */
function MinLength(min, validationOptions) {
    return (0, ValidateBy_1.ValidateBy)({
        name: exports.MIN_LENGTH,
        constraints: [min],
        validator: {
            validate: (value, args) => minLength(value, args.constraints[0]),
            defaultMessage: (0, ValidateBy_1.buildMessage)(eachPrefix => eachPrefix + messages_1.default.longerThanOrEqualTo, validationOptions),
        },
    }, validationOptions);
}
exports.MinLength = MinLength;
//# sourceMappingURL=MinLength.js.map