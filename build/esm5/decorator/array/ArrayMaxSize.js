import { buildMessage, ValidateBy } from '../common/ValidateBy';
import Messages from '../../utils/messages';
export var ARRAY_MAX_SIZE = 'arrayMaxSize';
/**
 * Checks if the array's length is less or equal to the specified number.
 * If null or undefined is given then this function returns false.
 */
export function arrayMaxSize(array, max) {
    return Array.isArray(array) && array.length <= max;
}
/**
 * Checks if the array's length is less or equal to the specified number.
 * If null or undefined is given then this function returns false.
 */
export function ArrayMaxSize(max, validationOptions) {
    return ValidateBy({
        name: ARRAY_MAX_SIZE,
        constraints: [max],
        validator: {
            validate: function (value, args) { return arrayMaxSize(value, args.constraints[0]); },
            defaultMessage: buildMessage(function (eachPrefix) { return eachPrefix + Messages.notMoreThanElements; }, validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=ArrayMaxSize.js.map