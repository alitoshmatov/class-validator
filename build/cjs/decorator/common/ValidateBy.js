"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateBy = exports.buildMessage = void 0;
const register_decorator_1 = require("../../register-decorator");
const messages_1 = __importDefault(require("../../utils/messages"));
function buildMessage(impl, validationOptions) {
    return (validationArguments) => {
        const eachPrefix = validationOptions && validationOptions.each ? messages_1.default.eachValueIn : '';
        return impl(eachPrefix, validationArguments);
    };
}
exports.buildMessage = buildMessage;
function ValidateBy(options, validationOptions) {
    return function (object, propertyName) {
        (0, register_decorator_1.registerDecorator)({
            name: options.name,
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: options.constraints,
            validator: options.validator,
        });
    };
}
exports.ValidateBy = ValidateBy;
//# sourceMappingURL=ValidateBy.js.map