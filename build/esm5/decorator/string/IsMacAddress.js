import { isValidationOptions } from '../ValidationOptions';
import { buildMessage, ValidateBy } from '../common/ValidateBy';
import isMacAddressValidator from 'validator/lib/isMACAddress';
import Messages from '../../utils/messages';
export var IS_MAC_ADDRESS = 'isMacAddress';
/**
 * Check if the string is a MAC address.
 * If given value is not a string, then it returns false.
 */
export function isMACAddress(value, options) {
    return typeof value === 'string' && isMacAddressValidator(value, options);
}
export function IsMACAddress(optionsOrValidationOptionsArg, validationOptionsArg) {
    var options = !isValidationOptions(optionsOrValidationOptionsArg) ? optionsOrValidationOptionsArg : undefined;
    var validationOptions = isValidationOptions(optionsOrValidationOptionsArg)
        ? optionsOrValidationOptionsArg
        : validationOptionsArg;
    return ValidateBy({
        name: IS_MAC_ADDRESS,
        constraints: [options],
        validator: {
            validate: function (value, args) { return isMACAddress(value, options); },
            defaultMessage: buildMessage(function (eachPrefix) { return eachPrefix + Messages.MACAddress; }, validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=IsMacAddress.js.map