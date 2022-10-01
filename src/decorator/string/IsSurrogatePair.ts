import { ValidationOptions } from '../ValidationOptions';
import { buildMessage, ValidateBy } from '../common/ValidateBy';
import isSurrogatePairValidator from 'validator/lib/isSurrogatePair';
import Messages from '../../utils/messages';

export const IS_SURROGATE_PAIR = 'isSurrogatePair';

/**
 * Checks if the string contains any surrogate pairs chars.
 * If given value is not a string, then it returns false.
 */
export function isSurrogatePair(value: unknown): boolean {
  return typeof value === 'string' && isSurrogatePairValidator(value);
}

/**
 * Checks if the string contains any surrogate pairs chars.
 * If given value is not a string, then it returns false.
 */
export function IsSurrogatePair(validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_SURROGATE_PAIR,
      validator: {
        validate: (value, args): boolean => isSurrogatePair(value),
        defaultMessage: buildMessage(eachPrefix => eachPrefix + Messages.surrogatePairChars, validationOptions),
      },
    },
    validationOptions
  );
}
