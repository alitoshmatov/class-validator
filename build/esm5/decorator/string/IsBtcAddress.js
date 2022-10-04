import { buildMessage, ValidateBy } from '../common/ValidateBy';
import isBtcAddressValidator from 'validator/lib/isBtcAddress';
import Messages from '../../utils/messages';
export var IS_BTC_ADDRESS = 'isBtcAddress';
/**
 * Check if the string is a valid BTC address.
 * If given value is not a string, then it returns false.
 */
export function isBtcAddress(value) {
    return typeof value === 'string' && isBtcAddressValidator(value);
}
/**
 * Check if the string is a valid BTC address.
 * If given value is not a string, then it returns false.
 */
export function IsBtcAddress(validationOptions) {
    return ValidateBy({
        name: IS_BTC_ADDRESS,
        validator: {
            validate: function (value, args) { return isBtcAddress(value); },
            defaultMessage: buildMessage(function (eachPrefix) { return eachPrefix + Messages.BTCAddress; }, validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=IsBtcAddress.js.map