import React from "react";
import { Link } from "react-router-dom";
import { StyledButton } from "../../components/global/Button/Button.style";
import LogByFacebook from "../../components/LogsBySocial/LogByFacebook";
import LogByGoogle from "../../components/LogsBySocial/LogByGoogle";
import {
  StyledLogBox,
  StyledLogFooter,
  StyledLogMain,
  StyledLogSection,
  StyledLogTitle,
  StyledInputBox,
  StyledLabel,
  StyledInput,
  StyledCheckBox,
  StyledRememberMe,
  StyledOrLine,
  StyledHaveAccount,
  StyledContainerInputBox,
} from "./Logs.style";
import LogsFooter from "./LogsFooter";

function Register() {
  return (
    <StyledLogMain>
      <StyledLogSection>
        <StyledLogBox>
          <StyledLogTitle>Register</StyledLogTitle>

          <StyledContainerInputBox>
            <StyledInputBox>
              <StyledLabel htmlFor="name">Name</StyledLabel>
              <StyledInput id="name" type="text" placeholder="Type here" />
            </StyledInputBox>

            <StyledInputBox>
              <StyledLabel htmlFor="surname">Surname</StyledLabel>
              <StyledInput id="surname" type="text" placeholder="Type here" />
            </StyledInputBox>
          </StyledContainerInputBox>

          <StyledInputBox>
            <StyledLabel htmlFor="email">Your e-mail</StyledLabel>
            <StyledInput
              id="email"
              type="email"
              placeholder="example@mail.com"
            />
          </StyledInputBox>

          <StyledInputBox>
            <StyledLabel htmlFor="phone">Phone</StyledLabel>
            <StyledInput id="phone" type="tel" placeholder="00-000-00-00" />
          </StyledInputBox>

          <StyledInputBox>
            <StyledLabel htmlFor="password">Password</StyledLabel>
            <StyledInput
              id="password"
              type="password"
              placeholder="At least 6 characters."
            />
          </StyledInputBox>

          <StyledInputBox>
            <StyledLabel htmlFor="repeatPassword">Repeat password</StyledLabel>
            <StyledInput
              id="repeatPassword"
              type="password"
              placeholder="Type here"
            />
          </StyledInputBox>

          <Link to="/">
            <StyledButton>Register now</StyledButton>
          </Link>

          <StyledRememberMe>
            <StyledCheckBox name="rememberMe" id="rememberMe" />
            <StyledLabel htmlFor="rememberMe" name="rememberMe">
              I agree with <a>Terms and Conditions</a>
            </StyledLabel>
          </StyledRememberMe>

          <StyledOrLine />

          <StyledHaveAccount>
            <p>Already have an account?</p>
            <Link to="/sign">
              <p>Login in</p>
            </Link>
          </StyledHaveAccount>
        </StyledLogBox>
      </StyledLogSection>
      <LogsFooter />
    </StyledLogMain>
  );
}

export default Register;
