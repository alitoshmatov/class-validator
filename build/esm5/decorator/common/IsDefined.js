import { buildMessage, ValidateBy } from './ValidateBy';
import { ValidationTypes } from '../../validation/ValidationTypes';
import Messages from '../../utils/messages';
// isDefined is (yet) a special case
export var IS_DEFINED = ValidationTypes.IS_DEFINED;
/**
 * Checks if value is defined (!== undefined, !== null).
 */
export function isDefined(value) {
    return value !== undefined && value !== null;
}
/**
 * Checks if value is defined (!== undefined, !== null).
 */
export function IsDefined(validationOptions) {
    return ValidateBy({
        name: IS_DEFINED,
        validator: {
            validate: function (value) { return isDefined(value); },
            defaultMessage: buildMessage(function (eachPrefix) { return eachPrefix + Messages.notBeNullOrUndefined; }, validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=IsDefined.js.map