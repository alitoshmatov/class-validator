import { ValidationOptions } from '../ValidationOptions';
import { buildMessage, ValidateBy } from '../common/ValidateBy';
import isJSONValidator from 'validator/lib/isJSON';
import Messages from '../../utils/messages';

export const IS_JSON = 'isJson';

/**
 * Checks if the string is valid JSON (note: uses JSON.parse).
 * If given value is not a string, then it returns false.
 */
export function isJSON(value: unknown): boolean {
  return typeof value === 'string' && isJSONValidator(value);
}

/**
 * Checks if the string is valid JSON (note: uses JSON.parse).
 * If given value is not a string, then it returns false.
 */
export function IsJSON(validationOptions?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_JSON,
      validator: {
        validate: (value, args): boolean => isJSON(value),
        defaultMessage: buildMessage(eachPrefix => eachPrefix + Messages.JsonString, validationOptions),
      },
    },
    validationOptions
  );
}
