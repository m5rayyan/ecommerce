import React from "react";
import facebookLog from "../../assets/Images/facebookLog.png";
import { StyledLogByFacebook, StyledLogIcon } from "./LogsBySocial.style";
function LogByFacebook() {
  return (
    <StyledLogByFacebook>
      <StyledLogIcon>
        <img src={facebookLog} alt="facebookLog" />
      </StyledLogIcon>
      <h3>Continue with Facebook</h3>
    </StyledLogByFacebook>
  );
}

export default LogByFacebook;
