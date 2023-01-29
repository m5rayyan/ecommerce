import React from "react";
import {
  StyledSendRequestsContent,
  StyledBackgroundImg,
} from "./SendRequestsSection.style";

// Import Img
import SendRequestsBg from "../../assets/Images/SendRequestsBg.png";
import SendRequestsInfo from "./SendRequestsInfo";
import SendRequestsForm from "./SendRequestsForm";

function SendRequestsContent() {
  return (
    <StyledSendRequestsContent>
      <StyledBackgroundImg src={SendRequestsBg} alt="Send Requests Bg" />
      <SendRequestsInfo />
      <SendRequestsForm />
    </StyledSendRequestsContent>
  );
}

export default SendRequestsContent;
