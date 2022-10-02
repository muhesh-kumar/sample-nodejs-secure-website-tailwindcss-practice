import InputElement from './InputElement';
import FormSubmitBtn from './FormSubmitBtn';

const Login = () => {
  return (
    <div className="h-screen bg-zinc-600 text-white font-roboto flex place-content-center items-center gap-2">
      <div className="bg-zinc-500 rounded-lg w-1/4 flex flex-col items-center py-3 gap-3">
        <h1 className="text-3xl font-bold">Login</h1>
        <InputElement
          labelContenet="Username"
          inputType="text"
          inputIcon="@"
          placeholderText="Enter your username here"
        />
        <InputElement
          labelContenet="Password"
          inputType="password"
          inputIcon="🔑"
          placeholderText="Enter your password here"
        />
        <FormSubmitBtn
          textContent="Login"
          subTitleContent="Dont' have an account?"
          subTitleLink="/signup"
          subTitleLinkContent="Signup"
        />
      </div>
    </div>
  );
};

export default Login;
