import { buildMessage, ValidateBy } from '../common/ValidateBy';
import matchesValidator from 'validator/lib/matches';
import Messages from '../../utils/messages';
export const MATCHES = 'matches';
export function matches(value, pattern, modifiers) {
    return typeof value === 'string' && matchesValidator(value, pattern, modifiers);
}
export function Matches(pattern, modifiersOrAnnotationOptions, validationOptions) {
    let modifiers;
    if (modifiersOrAnnotationOptions && modifiersOrAnnotationOptions instanceof Object && !validationOptions) {
        validationOptions = modifiersOrAnnotationOptions;
    }
    else {
        modifiers = modifiersOrAnnotationOptions;
    }
    return ValidateBy({
        name: MATCHES,
        constraints: [pattern, modifiers],
        validator: {
            validate: (value, args) => matches(value, args.constraints[0], args.constraints[1]),
            defaultMessage: buildMessage((eachPrefix, args) => eachPrefix + Messages.matchRegularExpression, validationOptions),
        },
    }, validationOptions);
}
//# sourceMappingURL=Matches.js.map