import { buildMessage, ValidateBy } from '../common/ValidateBy';
import isAlphaValidator from 'validator/lib/isAlpha';
import Messages from '../../utils/messages';
export const IS_ALPHA = 'isAlpha';
/**
 * Checks if the string contains only letters (a-zA-Z).
 * If given value is not a string, then it returns false.
 */
export function isAlpha(value, locale) {
    return typeof value === 'string' && isAlphaValidator(value, locale);
}
/**
 * Checks if the string contains only letters (a-zA-Z).
 * If given value is not a string, then it returns false.
 */
export function IsAlpha(locale, validationOptions) {
    return ValidateBy({
        name: IS_ALPHA,
        constraints: [locale],
        validator: {
            validate: (value, args) => isAlpha(value, args.constraints[0]),
            defaultMessage: buildMessage(eachPrefix => eachPrefix + Messages.onlyLetters, validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=IsAlpha.js.map