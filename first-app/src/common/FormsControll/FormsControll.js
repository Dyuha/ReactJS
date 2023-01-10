import cls from "./FormsControll.module.css"

const FormControl = ({input, meta, children, ...props}) => {
  return(
    <div className={cls.formControl + " " + (meta.touched && meta.error ? cls.error : "")}>
      {children}
      {meta.touched && meta.error ? <span>{meta.error}</span> : undefined}
    </div>
  )  
}

export const Textarea = (props) => {
  return <FormControl {...props} ><textarea {...props.input} {...props}/></FormControl>
};

export const Input = (props) => {
  return <FormControl {...props} ><input {...props.input} {...props}/></FormControl>
};

