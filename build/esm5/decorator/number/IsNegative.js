import { buildMessage, ValidateBy } from '../common/ValidateBy';
import Messages from '../../utils/messages';
export var IS_NEGATIVE = 'isNegative';
/**
 * Checks if the value is a negative number smaller than zero.
 */
export function isNegative(value) {
    return typeof value === 'number' && value < 0;
}
/**
 * Checks if the value is a negative number smaller than zero.
 */
export function IsNegative(validationOptions) {
    return ValidateBy({
        name: IS_NEGATIVE,
        validator: {
            validate: function (value, args) { return isNegative(value); },
            defaultMessage: buildMessage(function (eachPrefix) { return eachPrefix + Messages.negativeNumber; }, validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=IsNegative.js.map