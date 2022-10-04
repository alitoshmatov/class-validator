import { buildMessage, ValidateBy } from '../common/ValidateBy';
import isIsinValidator from 'validator/lib/isISIN';
import Messages from '../../utils/messages';
export var IS_ISIN = 'isIsin';
/**
 * Checks if the string is an ISIN (stock/security identifier).
 * If given value is not a string, then it returns false.
 */
export function isISIN(value) {
    return typeof value === 'string' && isIsinValidator(value);
}
/**
 * Checks if the string is an ISIN (stock/security identifier).
 * If given value is not a string, then it returns false.
 */
export function IsISIN(validationOptions) {
    return ValidateBy({
        name: IS_ISIN,
        validator: {
            validate: function (value, args) { return isISIN(value); },
            defaultMessage: buildMessage(function (eachPrefix) { return eachPrefix + Messages.ISIN; }, validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=IsISIN.js.map