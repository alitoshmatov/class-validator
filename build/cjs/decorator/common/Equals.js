"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Equals = exports.equals = exports.EQUALS = void 0;
const ValidateBy_1 = require("../common/ValidateBy");
const messages_1 = __importDefault(require("../../utils/messages"));
exports.EQUALS = 'equals';
/**
 * Checks if value matches ("===") the comparison.
 */
function equals(value, comparison) {
    return value === comparison;
}
exports.equals = equals;
/**
 * Checks if value matches ("===") the comparison.
 */
function Equals(comparison, validationOptions) {
    return (0, ValidateBy_1.ValidateBy)({
        name: exports.EQUALS,
        constraints: [comparison],
        validator: {
            validate: (value, args) => equals(value, args.constraints[0]),
            defaultMessage: (0, ValidateBy_1.buildMessage)(eachPrefix => eachPrefix + messages_1.default.equalTo, validationOptions),
        },
    }, validationOptions);
}
exports.Equals = Equals;
//# sourceMappingURL=Equals.js.map