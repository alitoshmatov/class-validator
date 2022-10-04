import { buildMessage, ValidateBy } from '../common/ValidateBy';
import Messages from '../../utils/messages';
export var IS_ARRAY = 'isArray';
/**
 * Checks if a given value is an array
 */
export function isArray(value) {
    return Array.isArray(value);
}
/**
 * Checks if a given value is an array
 */
export function IsArray(validationOptions) {
    return ValidateBy({
        name: IS_ARRAY,
        validator: {
            validate: function (value, args) { return isArray(value); },
            defaultMessage: buildMessage(function (eachPrefix) { return eachPrefix + Messages.array; }, validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=IsArray.js.map