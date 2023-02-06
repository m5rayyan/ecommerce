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
} from "./Logs.style";
import LogsFooter from "./LogsFooter";

function SignIn() {
  return (
    <StyledLogMain>
      <StyledLogSection>
        <StyledLogBox>
          <StyledLogTitle>Sign in</StyledLogTitle>

          <StyledInputBox>
            <StyledLabel htmlFor="#">Username</StyledLabel>
            <StyledInput type="text" placeholder="Email or phone" />
          </StyledInputBox>

          <StyledInputBox>
            <StyledLabel htmlFor="#">Password</StyledLabel>
            <StyledInput type="password" placeholder="Type here" />
          </StyledInputBox>

          <StyledRememberMe>
            <StyledCheckBox name="rememberMe" id="rememberMe" />
            <StyledLabel htmlFor="rememberMe" name="rememberMe">
              Remember me
            </StyledLabel>
          </StyledRememberMe>

          <Link to="/">
            <StyledButton>Log In</StyledButton>
          </Link>

          <StyledOrLine>
            <p>OR</p>
          </StyledOrLine>

          <Link to="/">
            <LogByGoogle />
          </Link>

          <Link to="/">
            <LogByFacebook />
          </Link>

          <StyledHaveAccount>
            <p>Don’t have an account?</p>
            <Link to="/register">
              <p>Register now</p>
            </Link>
          </StyledHaveAccount>
        </StyledLogBox>
      </StyledLogSection>
      <LogsFooter />
    </StyledLogMain>
  );
}

export default SignIn;
