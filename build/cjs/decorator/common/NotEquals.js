"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotEquals = exports.notEquals = exports.NOT_EQUALS = void 0;
const ValidateBy_1 = require("../common/ValidateBy");
const messages_1 = __importDefault(require("../../utils/messages"));
exports.NOT_EQUALS = 'notEquals';
/**
 * Checks if value does not match ("!==") the comparison.
 */
function notEquals(value, comparison) {
    return value !== comparison;
}
exports.notEquals = notEquals;
/**
 * Checks if value does not match ("!==") the comparison.
 */
function NotEquals(comparison, validationOptions) {
    return (0, ValidateBy_1.ValidateBy)({
        name: exports.NOT_EQUALS,
        constraints: [comparison],
        validator: {
            validate: (value, args) => notEquals(value, args.constraints[0]),
            defaultMessage: (0, ValidateBy_1.buildMessage)(eachPrefix => eachPrefix + messages_1.default.notBeEqualTo, validationOptions),
        },
    }, validationOptions);
}
exports.NotEquals = NotEquals;
//# sourceMappingURL=NotEquals.js.map