import { buildMessage, ValidateBy } from '../common/ValidateBy';
import Messages from '../../utils/messages';
export var ARRAY_MIN_SIZE = 'arrayMinSize';
/**
 * Checks if the array's length is greater than or equal to the specified number.
 * If null or undefined is given then this function returns false.
 */
export function arrayMinSize(array, min) {
    return Array.isArray(array) && array.length >= min;
}
/**
 * Checks if the array's length is greater than or equal to the specified number.
 * If null or undefined is given then this function returns false.
 */
export function ArrayMinSize(min, validationOptions) {
    return ValidateBy({
        name: ARRAY_MIN_SIZE,
        constraints: [min],
        validator: {
            validate: function (value, args) { return arrayMinSize(value, args.constraints[0]); },
            defaultMessage: buildMessage(function (eachPrefix) { return eachPrefix + Messages.atLeastElements; }, validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=ArrayMinSize.js.map