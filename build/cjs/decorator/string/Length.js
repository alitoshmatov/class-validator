"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Length = exports.length = exports.IS_LENGTH = void 0;
const ValidateBy_1 = require("../common/ValidateBy");
const isLength_1 = __importDefault(require("validator/lib/isLength"));
const messages_1 = __importDefault(require("../../utils/messages"));
exports.IS_LENGTH = 'isLength';
/**
 * Checks if the string's length falls in a range. Note: this function takes into account surrogate pairs.
 * If given value is not a string, then it returns false.
 */
function length(value, min, max) {
    return typeof value === 'string' && (0, isLength_1.default)(value, { min, max });
}
exports.length = length;
/**
 * Checks if the string's length falls in a range. Note: this function takes into account surrogate pairs.
 * If given value is not a string, then it returns false.
 */
function Length(min, max, validationOptions) {
    return (0, ValidateBy_1.ValidateBy)({
        name: exports.IS_LENGTH,
        constraints: [min, max],
        validator: {
            validate: (value, args) => length(value, args.constraints[0], args.constraints[1]),
            defaultMessage: (0, ValidateBy_1.buildMessage)((eachPrefix, args) => {
                const isMinLength = args.constraints[0] !== null && args.constraints[0] !== undefined;
                const isMaxLength = args.constraints[1] !== null && args.constraints[1] !== undefined;
                if (isMinLength && (!args.value || args.value.length < args.constraints[0])) {
                    return eachPrefix + messages_1.default.longerThanOrEqualTo;
                }
                else if (isMaxLength && args.value.length > args.constraints[1]) {
                    return eachPrefix + messages_1.default.shorterThanOrEqualTo;
                }
                return eachPrefix + messages_1.default.longerThanOrEqualToAndShorter;
            }, validationOptions),
        },
    }, validationOptions);
}
exports.Length = Length;
//# sourceMappingURL=Length.js.map