"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsPassportNumber = exports.isPassportNumber = exports.IS_PASSPORT_NUMBER = void 0;
const ValidateBy_1 = require("../common/ValidateBy");
const isPassportNumber_1 = __importDefault(require("validator/lib/isPassportNumber"));
const messages_1 = __importDefault(require("../../utils/messages"));
exports.IS_PASSPORT_NUMBER = 'isPassportNumber';
/**
 * Check if the string is a valid passport number relative to a specific country code.
 * If given value is not a string, then it returns false.
 */
function isPassportNumber(value, countryCode) {
    return typeof value === 'string' && (0, isPassportNumber_1.default)(value, countryCode);
}
exports.isPassportNumber = isPassportNumber;
/**
 * Check if the string is a valid passport number relative to a specific country code.
 * If given value is not a string, then it returns false.
 */
function IsPassportNumber(countryCode, validationOptions) {
    return (0, ValidateBy_1.ValidateBy)({
        name: exports.IS_PASSPORT_NUMBER,
        constraints: [countryCode],
        validator: {
            validate: (value, args) => isPassportNumber(value, args.constraints[0]),
            defaultMessage: (0, ValidateBy_1.buildMessage)(eachPrefix => eachPrefix + messages_1.default.passportNumber, validationOptions),
        },
    }, validationOptions);
}
exports.IsPassportNumber = IsPassportNumber;
//# sourceMappingURL=IsPassportNumber.js.map