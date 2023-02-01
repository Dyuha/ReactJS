import React from "react";
import { reduxForm } from "redux-form";
import { Input } from "../../common/FormsControll/FormsControll";
import { requiredField, maxLengthCreator } from '../../utils/validators/validators';
import { useSelector } from 'react-redux';
import { login } from "../../redux/authReducer";
import { Navigate } from 'react-router-dom';
import cls from "./../../common/FormsControll/FormsControll.module.css"
import { fieldCreator } from "../../common/FormsControll/FormsControll";
import { useDispatch } from 'react-redux';

const maxLength = maxLengthCreator(30);

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
  return (
      <form onSubmit={handleSubmit}>
        {fieldCreator("Email", "email", Input, [requiredField, maxLength])}
        {fieldCreator("Password", "password", Input, [requiredField, maxLength], {type: "password"})}
        {fieldCreator(null, "rememberMe", Input, [], {type: "checkbox"}, "remember me")}
        {captchaUrl && <img src={captchaUrl} alt="captcha"/>}
        {captchaUrl && fieldCreator("Captcha text", "captcha", Input, [requiredField])}
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


const Login = () => {

  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.auth.isAuth);
  const userID = useSelector(state => state.auth.userID);
  const captchaUrl = useSelector(state => state.auth.captchaUrl);
  const logoutIsFetching = useSelector(state => state.auth.logoutIsFetching);

  const onSubmit = (formData) => {
    dispatch(login(formData.email, formData.password, formData.rememberMe, formData.captcha))
  } 

  if (isAuth && userID !== null && !logoutIsFetching){
    return  <Navigate to={`/profile/${userID}`}/>
  }
  return (
    <div> 
      <h1>LOGIN</h1>
      <LoginReduxForm captchaUrl={captchaUrl} onSubmit={onSubmit}/>
    </div>
  );
};

// const mapDispatchToProps = {
//   login,
// }

// const mapStateToProps = (state) => {
//   return {
//     isAuth: state.auth.isAuth,
//     userID: state.auth.userID,
//     captchaUrl: state.auth.captchaUrl,
//     logoutIsFetching: state.auth.logoutIsFetching,
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Login);

export default Login;