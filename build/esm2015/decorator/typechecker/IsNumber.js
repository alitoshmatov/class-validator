import { buildMessage, ValidateBy } from '../common/ValidateBy';
import Messages from '../../utils/messages';
export const IS_NUMBER = 'isNumber';
/**
 * Checks if a given value is a number.
 */
export function isNumber(value, options = {}) {
    if (typeof value !== 'number') {
        return false;
    }
    if (value === Infinity || value === -Infinity) {
        return options.allowInfinity;
    }
    if (Number.isNaN(value)) {
        return options.allowNaN;
    }
    if (options.maxDecimalPlaces !== undefined) {
        let decimalPlaces = 0;
        if (value % 1 !== 0) {
            decimalPlaces = value.toString().split('.')[1].length;
        }
        if (decimalPlaces > options.maxDecimalPlaces) {
            return false;
        }
    }
    return Number.isFinite(value);
}
/**
 * Checks if a value is a number.
 */
export function IsNumber(options = {}, validationOptions) {
    return ValidateBy({
        name: IS_NUMBER,
        constraints: [options],
        validator: {
            validate: (value, args) => isNumber(value, args.constraints[0]),
            defaultMessage: buildMessage(eachPrefix => eachPrefix + Messages.numberToTheSpecifiedConstraint, validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=IsNumber.js.map