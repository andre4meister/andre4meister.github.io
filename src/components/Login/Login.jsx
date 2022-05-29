import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { Field } from "redux-form";
import { reduxForm } from "redux-form";
import { login, logout } from "../../Redux/auth-reducer";
import {
  email,
  maxLengthCreator,
  required,
} from "../../utils/validators/validators";
import { Input } from "../common/FormControls/FormsControls";
import c from "./Login.module.css";
import s from "../common/FormControls/FormsControls.module.css";
import { createField } from '../common/FormControls/FormsControls'

const maxLength16 = maxLengthCreator(30);
const mapsStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl,
  };
};

const Login = (props) => {
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

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        {createField("Your Email", "email", [required, maxLength16, email], Input)}
      </div>
      <div>
        {createField(
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
      {captchaUrl && <img className={c.captcha} src={captchaUrl}/>}
      {captchaUrl && createField("Captcha", "captcha", [required], Input)}
      <div>
        <button>Log in</button>
      </div>
    </form>
  );
};

export const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);
export default connect(mapsStateToProps, { login, logout })(Login);
