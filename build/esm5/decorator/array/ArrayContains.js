import { buildMessage, ValidateBy } from '../common/ValidateBy';
import Messages from '../../utils/messages';
export var ARRAY_CONTAINS = 'arrayContains';
/**
 * Checks if array contains all values from the given array of values.
 * If null or undefined is given then this function returns false.
 */
export function arrayContains(array, values) {
    if (!Array.isArray(array))
        return false;
    return values.every(function (value) { return array.indexOf(value) !== -1; });
}
/**
 * Checks if array contains all values from the given array of values.
 * If null or undefined is given then this function returns false.
 */
export function ArrayContains(values, validationOptions) {
    return ValidateBy({
        name: ARRAY_CONTAINS,
        constraints: [values],
        validator: {
            validate: function (value, args) { return arrayContains(value, args.constraints[0]); },
            defaultMessage: buildMessage(function (eachPrefix) { return eachPrefix + Messages.containValues; }, validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=ArrayContains.js.map