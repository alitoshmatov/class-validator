import { buildMessage, ValidateBy } from '../common/ValidateBy';
import isHashValidator from 'validator/lib/isHash';
import Messages from '../../utils/messages';
export const IS_HASH = 'isHash';
/**
 * Check if the string is a hash of type algorithm.
 * Algorithm is one of ['md4', 'md5', 'sha1', 'sha256', 'sha384', 'sha512', 'ripemd128', 'ripemd160', 'tiger128',
 * 'tiger160', 'tiger192', 'crc32', 'crc32b']
 */
export function isHash(value, algorithm) {
    return typeof value === 'string' && isHashValidator(value, algorithm);
}
/**
 * Check if the string is a hash of type algorithm.
 * Algorithm is one of ['md4', 'md5', 'sha1', 'sha256', 'sha384', 'sha512', 'ripemd128', 'ripemd160', 'tiger128',
 * 'tiger160', 'tiger192', 'crc32', 'crc32b']
 */
export function IsHash(algorithm, validationOptions) {
    return ValidateBy({
        name: IS_HASH,
        constraints: [algorithm],
        validator: {
            validate: (value, args) => isHash(value, args.constraints[0]),
            defaultMessage: buildMessage(eachPrefix => eachPrefix + Messages.hashOfType, validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=IsHash.js.map