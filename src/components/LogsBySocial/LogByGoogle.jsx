import React from "react";
import google from "../../assets/Images/google.png";
import { StyledLogByGoogle, StyledLogIcon } from "./LogsBySocial.style";
function LogByGoogle() {
  return (
    <StyledLogByGoogle>
      <StyledLogIcon>
        <img src={google} alt="google" />
      </StyledLogIcon>
      <h3>Continue with Google</h3>
    </StyledLogByGoogle>
  );
}

export default LogByGoogle;
