import c from './FormsControls.module.css'

const FormControl = ({input, meta, child, ...props}) => {
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

export const TextArea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return ( 
       <FormControl {...props}>
           <textarea {...props.input} {...restProps}/>
       </FormControl>  
    )
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return ( 
        <FormControl {...props}>
            <input {...props.input} {...restProps}/>
        </FormControl>
    )
}