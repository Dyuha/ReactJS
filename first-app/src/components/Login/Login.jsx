import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../../common/FormsControll/FormsControll";
import { requiredField, maxLengthCreator } from '../../utils/validators/validators';
import { connect } from 'react-redux';
import { login } from "../../redux/authReducer";
import { Navigate } from 'react-router-dom';
import cls from "./../../common/FormsControll/FormsControll.module.css"

const maxLength = maxLengthCreator(30);

const LoginForm = (props) => {
  return (
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field placeholder={"Email"} name={"email"} component={Input} validate={[requiredField, maxLength]} />
        </div>
        <div>
          <Field placeholder={"Password"} name={"password"} type={"password"} component={Input} validate={[requiredField, maxLength]}/>
        </div>
        <div>
          <Field type={"checkbox"} name={"rememberMe"} component={Input} /> remember me
        </div>
        <div className={cls.formSummaryError}>
            {props.error}
        </div>
        <div>
          <button>login</button>
        </div>
      </form>
  );
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
  //переписать на класс, сделать компонент дидмоунт как в апп
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe)
  } 

  if (props.isAuth && props.userID !== null){
    return  <Navigate to={`/profile/${props.userID}`}/>
  }

  return (
    <div> 
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  );
};

const mapDispatchToProps = {
  login,
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    userID: state.auth.userID,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);