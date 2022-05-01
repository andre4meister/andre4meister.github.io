import { Field } from "redux-form";
import { reduxForm } from "redux-form";
import c from "./Login.module.css";

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
            <Field placeholder='Your Login' type='text' name="login" component={'input'} />
          </div>
          <div>
            <Field placeholder='Your Password' type='text' name="password" component={'input'}/>
          </div>
          <div>
            <Field type='checkbox' name="rememberMe" component={'input'}/> Remember me
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
