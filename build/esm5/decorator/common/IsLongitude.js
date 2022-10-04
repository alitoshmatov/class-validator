import { buildMessage, ValidateBy } from './ValidateBy';
import { isLatLong } from './IsLatLong';
import Messages from '../../utils/messages';
export var IS_LONGITUDE = 'isLongitude';
/**
 * Checks if a given value is a longitude.
 */
export function isLongitude(value) {
    return (typeof value === 'number' || typeof value === 'string') && isLatLong("0,".concat(value));
}
/**
 * Checks if a given value is a longitude.
 */
export function IsLongitude(validationOptions) {
    return ValidateBy({
        name: IS_LONGITUDE,
        validator: {
            validate: function (value, args) { return isLongitude(value); },
            defaultMessage: buildMessage(function (eachPrefix) { return eachPrefix + Messages.longitudeStringOrNumber; }, validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=IsLongitude.js.map