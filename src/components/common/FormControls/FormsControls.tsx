import {Field, WrappedFieldMetaProps, WrappedFieldProps} from 'redux-form';
// @ts-ignore
import c from './FormsControls.module.css'
import {ValidatorsType} from "../../../utils/validators/validators";
// @ts-ignore
import React from "react";

type FormsControlParamsType = {
    meta: WrappedFieldMetaProps
}

type FormsControlType = (params: FormsControlParamsType) => React.ReactNode

const FormControl: React.FC<FormsControlType> = ({meta, child, ...props}) => {
    const hasError = meta.touched && meta.error;
    return ( 
        <div className={ c.formControl + ' ' + (hasError ? c.error : '')}>
            <div>
                 {props.children}
            </div>
            {hasError && <span> {meta.error}</span>}
        </div>
    )
}

export const TextArea: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, child, ...restProps} = props;
    return ( 
       <FormControl {...props}>
           <textarea {...props.input} {...restProps}/>
       </FormControl>  
    )
}

export const Input: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, child, ...restProps} = props;
    return ( 
        <FormControl {...props}>
            <input {...props.input} {...restProps}/>
        </FormControl>
    )
}

export function createField<FormKeysType extends string> (placeholder: string | undefined,
                            name: FormKeysType,
                            validators: Array<ValidatorsType>,
                            component: React.FC<WrappedFieldProps>,
                            text = "",
                            props = {})  {
    return <Field
    placeholder={placeholder}
    type='text'
    name={name}
    component={component}
    validate={validators}
  />
}