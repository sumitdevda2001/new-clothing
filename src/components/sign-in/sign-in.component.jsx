import { SignInContainer, ButtonContainer } from "./sign-in.style.jsx";
import { useState } from "react";
import { useDispatch } from "react-redux";
import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../store/user/user.action";

const initialUserData = {
  email: "",
  password: "",
};

const SignUpForm = () => {
  const [userData, setUserData] = useState(initialUserData);
  const { email, password } = userData;
  const dispatch = useDispatch();

  const resetUserData = () => {
    setUserData(initialUserData);
  };

  const signInWithGoogle = async () => {
    dispatch(googleSignInStart());
  };

  const handleFormFieldChange = (e) => {
    const { name, value } = e.target;

    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));

      resetUserData();
    } catch (error) {
      switch (error.code) {
        case "Invalid User Name Or Password":
          alert("incorrect password for e-mail");
          break;

        case "auth/user-not-found":
          alert("incorrect e-mail");
          break;

        default:
          alert(error);
      }
    }
  };

  return (
    <SignInContainer>
    <h2>Already have a account?</h2>  
      <span>Sign in with email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="E-mail"
          type="email"
          onChange={handleFormFieldChange}
          name="email"
          value={email}
          required
        />
        <FormInput
          label="Password"
          type="password"
          onChange={handleFormFieldChange}
          name="password"
          value={password}
          required
        />
        <ButtonContainer>
          <Button type="submit">SIGN-IN</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
          >
            Google Sign-in
          </Button>
        </ButtonContainer>
      </form>
    </SignInContainer>
  );
};

export default SignUpForm;
