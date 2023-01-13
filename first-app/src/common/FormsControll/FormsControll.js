import cls from "./FormsControll.module.css"
import { Field } from 'redux-form';

const FormControl = ({meta: {touched, error}, children}) => {
  return(
    <div className={cls.formControl + " " + (touched && error ? cls.error : "")}>
      {children}
      {touched && error ? <span>{error}</span> : undefined}
    </div>
  )  
}

export const Textarea = (props) => {
  return <FormControl {...props} ><textarea {...props.input} {...props}/></FormControl>
};

export const Input = (props) => {
  return <FormControl {...props} ><input {...props.input} {...props}/></FormControl>
};

export const fieldCreator = (placeholder, name, component, validators, props={}, text="") => (
  <div>
    <Field
      placeholder={placeholder}
      name={name}
      component={component}
      validate={validators}
      {...props}
    />
    {text}
  </div>
);
