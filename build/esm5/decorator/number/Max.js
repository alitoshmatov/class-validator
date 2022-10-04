import { buildMessage, ValidateBy } from '../common/ValidateBy';
import Messages from '../../utils/messages';
export var MAX = 'max';
/**
 * Checks if the first number is less than or equal to the second.
 */
export function max(num, max) {
    return typeof num === 'number' && typeof max === 'number' && num <= max;
}
/**
 * Checks if the first number is less than or equal to the second.
 */
export function Max(maxValue, validationOptions) {
    return ValidateBy({
        name: MAX,
        constraints: [maxValue],
        validator: {
            validate: function (value, args) { return max(value, args.constraints[0]); },
            defaultMessage: buildMessage(function (eachPrefix) { return eachPrefix + Messages.notMoreThanElements; }, validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=Max.js.map