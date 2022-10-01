"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsEnum = exports.isEnum = exports.IS_ENUM = void 0;
const ValidateBy_1 = require("../common/ValidateBy");
const messages_1 = __importDefault(require("../../utils/messages"));
exports.IS_ENUM = 'isEnum';
/**
 * Checks if a given value is an enum
 */
function isEnum(value, entity) {
    const enumValues = Object.keys(entity).map(k => entity[k]);
    return enumValues.indexOf(value) >= 0;
}
exports.isEnum = isEnum;
/**
 * Checks if a given value is an enum
 */
function IsEnum(entity, validationOptions) {
    return (0, ValidateBy_1.ValidateBy)({
        name: exports.IS_ENUM,
        constraints: [entity],
        validator: {
            validate: (value, args) => isEnum(value, args.constraints[0]),
            defaultMessage: (0, ValidateBy_1.buildMessage)(eachPrefix => eachPrefix + messages_1.default.validEnumValue, validationOptions),
        },
    }, validationOptions);
}
exports.IsEnum = IsEnum;
//# sourceMappingURL=IsEnum.js.map