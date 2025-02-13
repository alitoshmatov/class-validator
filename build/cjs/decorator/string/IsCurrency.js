"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsCurrency = exports.isCurrency = exports.IS_CURRENCY = void 0;
const ValidateBy_1 = require("../common/ValidateBy");
const isCurrency_1 = __importDefault(require("validator/lib/isCurrency"));
const messages_1 = __importDefault(require("../../utils/messages"));
exports.IS_CURRENCY = 'isCurrency';
/**
 * Checks if the string is a valid currency amount.
 * If given value is not a string, then it returns false.
 */
function isCurrency(value, options) {
    return typeof value === 'string' && (0, isCurrency_1.default)(value, options);
}
exports.isCurrency = isCurrency;
/**
 * Checks if the string is a valid currency amount.
 * If given value is not a string, then it returns false.
 */
function IsCurrency(options, validationOptions) {
    return (0, ValidateBy_1.ValidateBy)({
        name: exports.IS_CURRENCY,
        constraints: [options],
        validator: {
            validate: (value, args) => isCurrency(value, args.constraints[0]),
            defaultMessage: (0, ValidateBy_1.buildMessage)(eachPrefix => eachPrefix + messages_1.default.currency, validationOptions),
        },
    }, validationOptions);
}
exports.IsCurrency = IsCurrency;
//# sourceMappingURL=IsCurrency.js.map