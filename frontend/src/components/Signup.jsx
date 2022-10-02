import InputElement from './InputElement';
import FormSubmitBtn from './FormSubmitBtn';

const Signup = () => {
  return (
    <div className="h-screen bg-zinc-600 text-white font-roboto flex place-content-center items-center gap-2">
      <div className="bg-zinc-500 rounded-lg w-1/4 flex flex-col items-center py-3 gap-3">
        <h1 className="text-3xl font-bold">Signup</h1>
        <InputElement
          labelContenet="Full Name"
          inputType="text"
          inputIcon="Na"
          placeholderText="Enter your full name here"
        />
        <InputElement
          labelContenet="Username"
          inputType="text"
          inputIcon="@"
          placeholderText="Enter your username here"
        />
        <InputElement
          labelContenet="Email"
          inputType="text"
          inputIcon="@"
          placeholderText="Enter your email here"
        />
        <InputElement
          labelContenet="Phone Number"
          inputType="text"
          inputIcon="📞"
          placeholderText="Enter your phone number here"
        />
        <InputElement
          labelContenet="Credit Card Number"
          inputType="text"
          inputIcon="💳"
          placeholderText="Enter your cerdit card number"
        />
        <InputElement
          labelContenet="Password"
          inputType="password"
          inputIcon="🔑"
          placeholderText="Enter your password here"
        />
        <InputElement
          labelContenet="Re-enter Password"
          inputType="password"
          inputIcon="🔑"
          placeholderText="Re-enter your password here"
        />

        <FormSubmitBtn
          textContent="Signup"
          subTitleContent="Already have an account?"
          subTitleLink="/login"
          subTitleLinkContent="Login"
        />
      </div>
    </div>
  );
};

export default Signup;
