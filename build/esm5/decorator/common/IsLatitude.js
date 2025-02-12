import { buildMessage, ValidateBy } from './ValidateBy';
import { isLatLong } from './IsLatLong';
import Messages from '../../utils/messages';
export var IS_LATITUDE = 'isLatitude';
/**
 * Checks if a given value is a latitude.
 */
export function isLatitude(value) {
    return (typeof value === 'number' || typeof value === 'string') && isLatLong("".concat(value, ",0"));
}
/**
 * Checks if a given value is a latitude.
 */
export function IsLatitude(validationOptions) {
    return ValidateBy({
        name: IS_LATITUDE,
        validator: {
            validate: function (value, args) { return isLatitude(value); },
            defaultMessage: buildMessage(function (eachPrefix) { return eachPrefix + Messages.latitudeStringOrNumber; }, validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=IsLatitude.js.map