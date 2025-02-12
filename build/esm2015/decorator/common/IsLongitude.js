import { buildMessage, ValidateBy } from './ValidateBy';
import { isLatLong } from './IsLatLong';
import Messages from '../../utils/messages';
export const IS_LONGITUDE = 'isLongitude';
/**
 * Checks if a given value is a longitude.
 */
export function isLongitude(value) {
    return (typeof value === 'number' || typeof value === 'string') && isLatLong(`0,${value}`);
}
/**
 * Checks if a given value is a longitude.
 */
export function IsLongitude(validationOptions) {
    return ValidateBy({
        name: IS_LONGITUDE,
        validator: {
            validate: (value, args) => isLongitude(value),
            defaultMessage: buildMessage(eachPrefix => eachPrefix + Messages.longitudeStringOrNumber, validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=IsLongitude.js.map