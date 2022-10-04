import { buildMessage, ValidateBy } from '../common/ValidateBy';
import isMongoIdValidator from 'validator/lib/isMongoId';
import Messages from '../../utils/messages';
export const IS_MONGO_ID = 'isMongoId';
/**
 * Checks if the string is a valid hex-encoded representation of a MongoDB ObjectId.
 * If given value is not a string, then it returns false.
 */
export function isMongoId(value) {
    return typeof value === 'string' && isMongoIdValidator(value);
}
/**
 * Checks if the string is a valid hex-encoded representation of a MongoDB ObjectId.
 * If given value is not a string, then it returns false.
 */
export function IsMongoId(validationOptions) {
    return ValidateBy({
        name: IS_MONGO_ID,
        validator: {
            validate: (value, args) => isMongoId(value),
            defaultMessage: buildMessage(eachPrefix => eachPrefix + Messages.mongodbId, validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=IsMongoId.js.map