"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Min = exports.min = exports.MIN = void 0;
const ValidateBy_1 = require("../common/ValidateBy");
const messages_1 = __importDefault(require("../../utils/messages"));
exports.MIN = 'min';
/**
 * Checks if the first number is greater than or equal to the second.
 */
function min(num, min) {
    return typeof num === 'number' && typeof min === 'number' && num >= min;
}
exports.min = min;
/**
 * Checks if the first number is greater than or equal to the second.
 */
function Min(minValue, validationOptions) {
    return (0, ValidateBy_1.ValidateBy)({
        name: exports.MIN,
        constraints: [minValue],
        validator: {
            validate: (value, args) => min(value, args.constraints[0]),
            defaultMessage: (0, ValidateBy_1.buildMessage)(eachPrefix => eachPrefix + messages_1.default.notBeLessThan, validationOptions),
        },
    }, validationOptions);
}
exports.Min = Min;
//# sourceMappingURL=Min.js.map