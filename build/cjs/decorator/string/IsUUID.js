"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsUUID = exports.isUUID = exports.IS_UUID = void 0;
const ValidateBy_1 = require("../common/ValidateBy");
const isUUID_1 = __importDefault(require("validator/lib/isUUID"));
const messages_1 = __importDefault(require("../../utils/messages"));
exports.IS_UUID = 'isUuid';
/**
 * Checks if the string is a UUID (version 3, 4 or 5).
 * If given value is not a string, then it returns false.
 */
function isUUID(value, version) {
    return typeof value === 'string' && (0, isUUID_1.default)(value, version);
}
exports.isUUID = isUUID;
/**
 * Checks if the string is a UUID (version 3, 4 or 5).
 * If given value is not a string, then it returns false.
 */
function IsUUID(version, validationOptions) {
    return (0, ValidateBy_1.ValidateBy)({
        name: exports.IS_UUID,
        constraints: [version],
        validator: {
            validate: (value, args) => isUUID(value, args.constraints[0]),
            defaultMessage: (0, ValidateBy_1.buildMessage)(eachPrefix => eachPrefix + messages_1.default.UUID, validationOptions),
        },
    }, validationOptions);
}
exports.IsUUID = IsUUID;
//# sourceMappingURL=IsUUID.js.map