import { buildMessage, ValidateBy } from '../common/ValidateBy';
import isDecimalValidator from 'validator/lib/isDecimal';
import Messages from '../../utils/messages';
export var IS_DECIMAL = 'isDecimal';
/**
 * Checks if the string is a valid decimal.
 * If given value is not a string, then it returns false.
 */
export function isDecimal(value, options) {
    return typeof value === 'string' && isDecimalValidator(value, options);
}
/**
 * Checks if the string contains only letters and numbers.
 * If given value is not a string, then it returns false.
 */
export function IsDecimal(options, validationOptions) {
    return ValidateBy({
        name: IS_DECIMAL,
        constraints: [options],
        validator: {
            validate: function (value, args) { return isDecimal(value, args.constraints[0]); },
            defaultMessage: buildMessage(function (eachPrefix) { return eachPrefix + Messages.notValidDecimalNumber; }, validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=IsDecimal.js.map