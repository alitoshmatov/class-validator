import { buildMessage, ValidateBy } from '../common/ValidateBy';
import Messages from '../../utils/messages';
export var MIN = 'min';
/**
 * Checks if the first number is greater than or equal to the second.
 */
export function min(num, min) {
    return typeof num === 'number' && typeof min === 'number' && num >= min;
}
/**
 * Checks if the first number is greater than or equal to the second.
 */
export function Min(minValue, validationOptions) {
    return ValidateBy({
        name: MIN,
        constraints: [minValue],
        validator: {
            validate: function (value, args) { return min(value, args.constraints[0]); },
            defaultMessage: buildMessage(function (eachPrefix) { return eachPrefix + Messages.notBeLessThan; }, validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=Min.js.map