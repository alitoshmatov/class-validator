import { buildMessage, ValidateBy } from '../common/ValidateBy';
import isBooleanValidator from 'validator/lib/isBoolean';
import Messages from '../../utils/messages';
export var IS_BOOLEAN_STRING = 'isBooleanString';
/**
 * Checks if a string is a boolean.
 * If given value is not a string, then it returns false.
 */
export function isBooleanString(value) {
    return typeof value === 'string' && isBooleanValidator(value);
}
/**
 * Checks if a string is a boolean.
 * If given value is not a string, then it returns false.
 */
export function IsBooleanString(validationOptions) {
    return ValidateBy({
        name: IS_BOOLEAN_STRING,
        validator: {
            validate: function (value, args) { return isBooleanString(value); },
            defaultMessage: buildMessage(function (eachPrefix) { return eachPrefix + Messages.booleanString; }, validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=IsBooleanString.js.map