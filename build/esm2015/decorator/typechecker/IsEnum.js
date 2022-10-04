import { buildMessage, ValidateBy } from '../common/ValidateBy';
import Messages from '../../utils/messages';
export const IS_ENUM = 'isEnum';
/**
 * Checks if a given value is an enum
 */
export function isEnum(value, entity) {
    const enumValues = Object.keys(entity).map(k => entity[k]);
    return enumValues.indexOf(value) >= 0;
}
/**
 * Checks if a given value is an enum
 */
export function IsEnum(entity, validationOptions) {
    return ValidateBy({
        name: IS_ENUM,
        constraints: [entity],
        validator: {
            validate: (value, args) => isEnum(value, args.constraints[0]),
            defaultMessage: buildMessage(eachPrefix => eachPrefix + Messages.validEnumValue, validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=IsEnum.js.map