import { buildMessage, ValidateBy } from '../common/ValidateBy';
import isLowercaseValidator from 'validator/lib/isLowercase';
import Messages from '../../utils/messages';
export const IS_LOWERCASE = 'isLowercase';
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
            validate: (value, args) => isLowercase(value),
            defaultMessage: buildMessage(eachPrefix => eachPrefix + Messages.lowercaseString, validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=IsLowercase.js.map