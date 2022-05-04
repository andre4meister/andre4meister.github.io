import { Field } from "redux-form";
import { reduxForm } from "redux-form";
import { email, maxLengthCreator, required } from "../../utils/validators/validators";
import { Input } from "../common/FormControls/FormsControls";
import c from "./Login.module.css";

const maxLength16 = maxLengthCreator(16);
const Login = (props) => {
   const onSubmit = (formData) => {
      console.log(formData)
   }
   return (
    <div className={c.loginPage}>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  );
};

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
          <div>
            <Field placeholder='Your Login' type='text' name="login" component={Input} 
              validate={[required, maxLength16, email]}/>
          </div>
          <div>
            <Field placeholder='Your Password' type='text' name="password" component={Input}
            validate={[required, maxLength16]}/>
          </div>
          <div>
            <Field type='checkbox' name="rememberMe" component={Input}/> Remember me
          </div>
          <div>
            <button>Log in</button>
          </div>
        </form>
    );
  };

export const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)  
export default Login;
