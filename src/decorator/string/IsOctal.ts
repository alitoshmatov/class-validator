import { ValidationOptions } from '../ValidationOptions';
import { buildMessage, ValidateBy } from '../common/ValidateBy';
import isOctalValidator from 'validator/lib/isOctal';
import Messages from '../../utils/messages';

export const IS_OCTAL = 'isOctal';

/**
 * Check if the string is a valid octal number.
 * If given value is not a string, then it returns false.
 */
export function isOctal(value: unknown): boolean {
  return typeof value === 'string' && isOctalValidator(value);
}

/**
 * Check if the string is a valid octal number.
 * If given value is not a string, then it returns false.
 */
export function IsOctal(validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_OCTAL,
      validator: {
        validate: (value, args): boolean => isOctal(value),
        defaultMessage: buildMessage(eachPrefix => eachPrefix + Messages.octalNumber, validationOptions),
      },
    },
    validationOptions
  );
}
