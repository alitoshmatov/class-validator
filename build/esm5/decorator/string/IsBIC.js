import { buildMessage, ValidateBy } from '../common/ValidateBy';
import isBICValidator from 'validator/lib/isBIC';
import Messages from '../../utils/messages';
export var IS_BIC = 'isBIC';
/**
 * Check if a string is a BIC (Bank Identification Code) or SWIFT code.
 * If given value is not a string, then it returns false.
 */
export function isBIC(value) {
    return typeof value === 'string' && isBICValidator(value);
}
/**
 * Check if a string is a BIC (Bank Identification Code) or SWIFT code.
 * If given value is not a string, then it returns false.
 */
export function IsBIC(validationOptions) {
    return ValidateBy({
        name: IS_BIC,
        validator: {
            validate: function (value, args) { return isBIC(value); },
            defaultMessage: buildMessage(function (eachPrefix) { return eachPrefix + Messages.BICOrSWIFT; }, validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=IsBIC.js.map