import { ValidationOptions } from '../ValidationOptions';
import { buildMessage, ValidateBy } from '../common/ValidateBy';
import containsValidator from 'validator/lib/contains';
import Messages from '../../utils/messages';

export const CONTAINS = 'contains';

/**
 * Checks if the string contains the seed.
 * If given value is not a string, then it returns false.
 */
export function contains(value: unknown, seed: string): boolean {
  return typeof value === 'string' && containsValidator(value, seed);
}

/**
 * Checks if the string contains the seed.
 * If given value is not a string, then it returns false.
 */
export function Contains(seed: string, validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      name: CONTAINS,
      constraints: [seed],
      validator: {
        validate: (value, args): boolean => contains(value, args.constraints[0]),
        defaultMessage: buildMessage(eachPrefix => eachPrefix + Messages.containAString, validationOptions),
      },
    },
    validationOptions
  );
}
