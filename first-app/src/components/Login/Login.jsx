import React from "react";
import { reduxForm } from "redux-form";
import { Input } from "../../common/FormsControll/FormsControll";
import { requiredField, maxLengthCreator } from '../../utils/validators/validators';
import { connect } from 'react-redux';
import { login } from "../../redux/authReducer";
import { Navigate } from 'react-router-dom';
import cls from "./../../common/FormsControll/FormsControll.module.css"
import { fieldCreator } from "../../common/FormsControll/FormsControll";

const maxLength = maxLengthCreator(30);

const LoginForm = ({handleSubmit, error}) => {
  return (
      <form onSubmit={handleSubmit}>
        {fieldCreator("Email", "email", Input, [requiredField, maxLength])}
        {fieldCreator("Password", "password", Input, [requiredField, maxLength], {type: "password"})}
        {fieldCreator(null, "rememberMe", Input, [], {type: "checkbox"}, "remember me")}
        <div className={cls.formSummaryError}>
            {error}
        </div>
        <div>
          <button>login</button>
        </div>
      </form>
  );
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = ({login, isAuth, userID}) => {
  //переписать на класс, сделать компонент дидмоунт как в апп
  const onSubmit = (formData) => {
    login(formData.email, formData.password, formData.rememberMe)
  } 

  if (isAuth && userID !== null){
    //трабл здеся
    return  <Navigate to={`/profile/${userID}`}/>
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