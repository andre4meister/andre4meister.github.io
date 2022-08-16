import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import {Field, InjectedFormProps} from "redux-form";
import { reduxForm } from "redux-form";
// @ts-ignore
import { login, logout } from "../../Redux/auth-reducer.ts";

// @ts-ignore
import { email, maxLengthCreator,  required, } from "../../utils/validators/validators.ts";
// @ts-ignore
import { Input } from "../common/FormControls/FormsControls.tsx";
// @ts-ignore
import c from "./Login.module.css";
// @ts-ignore
import s from "../common/FormControls/FormsControls.module.css";
// @ts-ignore
import { createField } from '../common/FormControls/FormsControls.tsx'
import {AppStateType} from "../../Redux/redux-store";
// @ts-ignore
import React from "react";

const maxLength16 = maxLengthCreator(30);
const mapsStateToProps = (state: AppStateType) => {


    return {
        // @ts-ignore
    isAuth: state.auth.isAuth,
        // @ts-ignore
    captchaUrl: state.auth.captchaUrl
  };
};

type MapStateToPropsType = {
    isAuth: boolean
    captchaUrl: null | string
}
type MapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string | null)=> void
    logout: ()=> void
}
type LoginFormValuesType = {
    email: string
    password: string
    rememberMe: boolean
}
type LoginFormCaptchaType =  {
    captcha: null | string
}
type LoginValuesType = {
    email: string
    captcha: string
    rememberMe: boolean
    password: string
}
type LoginFormValuesKeys = Extract<keyof LoginValuesType, string>
const Login: React.FC<MapStateToPropsType & MapDispatchToPropsType> = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
  };

  if (props.isAuth) {
    return <Navigate to={"/profile"} />;
  }
  return (
    <div className={c.loginPage}>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
  );
};

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormCaptchaType> & LoginFormCaptchaType> = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        {createField<LoginFormValuesKeys>("Your Email", "email", [required, maxLength16, email], Input)}
      </div>
      <div>
        {createField<LoginFormValuesKeys>(
          "Your Password",
          "password",
          [required, maxLength16],
          Input
        )}
      </div>
      {error && <div className={s.formSummaryError}>{error}</div>}
      <div>
        <Field type='checkbox' name='rememberMe' component={Input} /> Remember
        me
      </div>
      {captchaUrl && <img className={c.captcha} src={captchaUrl} alt='Captcha'/>}
      {captchaUrl && createField<LoginFormValuesKeys>("Captcha", "captcha", [required], Input)}
      <div>
        <button>Log in</button>
      </div>
    </form>
  );
};

export const LoginReduxForm = reduxForm<LoginFormValuesType & LoginFormCaptchaType>({
  form: "login",
})(LoginForm);
export default connect(mapsStateToProps, { login, logout })(Login);
