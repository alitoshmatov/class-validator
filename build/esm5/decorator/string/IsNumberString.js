import { buildMessage, ValidateBy } from '../common/ValidateBy';
import isNumericValidator from 'validator/lib/isNumeric';
import Messages from '../../utils/messages';
export var IS_NUMBER_STRING = 'isNumberString';
/**
 * Checks if the string is numeric.
 * If given value is not a string, then it returns false.
 */
export function isNumberString(value, options) {
    return typeof value === 'string' && isNumericValidator(value, options);
}
/**
 * Checks if the string is numeric.
 * If given value is not a string, then it returns false.
 */
export function IsNumberString(options, validationOptions) {
    return ValidateBy({
        name: IS_NUMBER_STRING,
        constraints: [options],
        validator: {
            validate: function (value, args) { return isNumberString(value, args.constraints[0]); },
            defaultMessage: buildMessage(function (eachPrefix) { return eachPrefix + Messages.numberString; }, validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=IsNumberString.js.map