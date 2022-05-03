import {InputType} from "./option-field/input.type";
import {ValidateType} from "./option-field/validate.type";


export interface OptionFields {
    type: keyof typeof InputType,
    name: string,
    placeholder?: string,
    validate?: keyof typeof ValidateType,
    className?: string,
    value?: string,
}

export interface Options {
    el: string,
    fields: Array<OptionFields>
}

