import { buildMessage, ValidateBy } from '../common/ValidateBy';
import isPortValidator from 'validator/lib/isPort';
import Messages from '../../utils/messages';
export var IS_PORT = 'isPort';
/**
 * Check if the string is a valid port number.
 */
export function isPort(value) {
    return typeof value === 'string' && isPortValidator(value);
}
/**
 * Check if the string is a valid port number.
 */
export function IsPort(validationOptions) {
    return ValidateBy({
        name: IS_PORT,
        validator: {
            validate: function (value, args) { return isPort(value); },
            defaultMessage: buildMessage(function (eachPrefix) { return eachPrefix + Messages.port; }, validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=IsPort.js.map