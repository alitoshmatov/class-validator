import { buildMessage, ValidateBy } from '../common/ValidateBy';
import isBtcAddressValidator from 'validator/lib/isBtcAddress';
import Messages from '../../utils/messages';
export const IS_BTC_ADDRESS = 'isBtcAddress';
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
            validate: (value, args) => isBtcAddress(value),
            defaultMessage: buildMessage(eachPrefix => eachPrefix + Messages.BTCAddress, validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=IsBtcAddress.js.map