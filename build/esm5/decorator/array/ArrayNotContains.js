import { buildMessage, ValidateBy } from '../common/ValidateBy';
import Messages from '../../utils/messages';
export var ARRAY_NOT_CONTAINS = 'arrayNotContains';
/**
 * Checks if array does not contain any of the given values.
 * If null or undefined is given then this function returns false.
 */
export function arrayNotContains(array, values) {
    if (!Array.isArray(array))
        return false;
    return values.every(function (value) { return array.indexOf(value) === -1; });
}
/**
 * Checks if array does not contain any of the given values.
 * If null or undefined is given then this function returns false.
 */
export function ArrayNotContains(values, validationOptions) {
    return ValidateBy({
        name: ARRAY_NOT_CONTAINS,
        constraints: [values],
        validator: {
            validate: function (value, args) { return arrayNotContains(value, args.constraints[0]); },
            defaultMessage: buildMessage(function (eachPrefix) { return eachPrefix + Messages.notContainValues; }, validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=ArrayNotContains.js.map