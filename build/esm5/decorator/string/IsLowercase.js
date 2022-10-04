import { buildMessage, ValidateBy } from '../common/ValidateBy';
import isLowercaseValidator from 'validator/lib/isLowercase';
import Messages from '../../utils/messages';
export var IS_LOWERCASE = 'isLowercase';
/**
 * Checks if the string is lowercase.
 * If given value is not a string, then it returns false.
 */
export function isLowercase(value) {
    return typeof value === 'string' && isLowercaseValidator(value);
}
/**
 * Checks if the string is lowercase.
 * If given value is not a string, then it returns false.
 */
export function IsLowercase(validationOptions) {
    return ValidateBy({
        name: IS_LOWERCASE,
        validator: {
            validate: function (value, args) { return isLowercase(value); },
            defaultMessage: buildMessage(function (eachPrefix) { return eachPrefix + Messages.lowercaseString; }, validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=IsLowercase.js.map