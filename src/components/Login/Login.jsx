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

const maxLength16 = maxLengthCreator(30);
const mapsStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};
const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Navigate to={"/profile"} />;
  }
  return (
    <div className={c.loginPage}>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder='Your Login'
          type='text'
          name='email'
          component={Input}
          validate={[required, maxLength16, email]}
        />
      </div>
      <div>
        <Field
          placeholder='Your Password'
          type='text'
          name='password'
          component={Input}
          validate={[required, maxLength16]}
        />
      </div>
      {props.error && <div className={s.formSummaryError}>{props.error}</div>}
      <div>
        <Field type='checkbox' name='rememberMe' component={Input} /> Remember
        me
      </div>
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
