import { buildMessage, ValidateBy } from '../common/ValidateBy';
import isEmailValidator from 'validator/lib/isEmail';
import Messages from '../../utils/messages';
export var IS_EMAIL = 'isEmail';
/**
 * Checks if the string is an email.
 * If given value is not a string, then it returns false.
 */
export function isEmail(value, options) {
    return typeof value === 'string' && isEmailValidator(value, options);
}
/**
 * Checks if the string is an email.
 * If given value is not a string, then it returns false.
 */
export function IsEmail(options, validationOptions) {
    return ValidateBy({
        name: IS_EMAIL,
        constraints: [options],
        validator: {
            validate: function (value, args) { return isEmail(value, args.constraints[0]); },
            defaultMessage: buildMessage(function (eachPrefix) { return eachPrefix + Messages.email; }, validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=IsEmail.js.map