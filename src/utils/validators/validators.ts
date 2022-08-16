export  type ValidatorsType = (value: string) => undefined | string

export const required: ValidatorsType = (value) => {
    return value ? undefined : 'Field is required';
}

export const maxLengthCreator = (maxLength: number): ValidatorsType => (value) => {
    return value.length <= maxLength ? undefined : `Max length is ${maxLength} symbols`;
}


export const email: ValidatorsType = value => {
    return value.includes('@') ? undefined : 'Incorrect email';
}