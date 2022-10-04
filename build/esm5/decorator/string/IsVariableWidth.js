import { buildMessage, ValidateBy } from '../common/ValidateBy';
import isVariableWidthValidator from 'validator/lib/isVariableWidth';
import Messages from '../../utils/messages';
export var IS_VARIABLE_WIDTH = 'isVariableWidth';
/**
 * Checks if the string contains variable-width chars.
 * If given value is not a string, then it returns false.
 */
export function isVariableWidth(value) {
    return typeof value === 'string' && isVariableWidthValidator(value);
}
/**
 * Checks if the string contains variable-width chars.
 * If given value is not a string, then it returns false.
 */
export function IsVariableWidth(validationOptions) {
    return ValidateBy({
        name: IS_VARIABLE_WIDTH,
        validator: {
            validate: function (value, args) { return isVariableWidth(value); },
            defaultMessage: buildMessage(function (eachPrefix) { return eachPrefix + Messages.fullWidthAndHalfWidthChars; }, validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=IsVariableWidth.js.map