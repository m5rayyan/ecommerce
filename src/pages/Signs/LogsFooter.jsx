import React from "react";
import {
  StyledLogFooter,
  StyledLogFooterContent,
  StyledLogsFooterLinksBox,
  StyledPaymentsBox,
} from "./Logs.style";
import Container from "../../components/global/Container/Container";

import payment1 from "../../assets/Images/payment1.png";
import payment2 from "../../assets/Images/payment2.png";
import payment3 from "../../assets/Images/payment3.png";
import payment4 from "../../assets/Images/payment4.png";
function LogsFooter() {
  return (
    <StyledLogFooter>
      <Container>
        <StyledLogFooterContent>
          <StyledPaymentsBox>
            <img src={payment1} alt="payment method" />
            <img src={payment2} alt="payment method" />
            <img src={payment3} alt="payment method" />
            <img src={payment4} alt="payment method" />
          </StyledPaymentsBox>
          <StyledLogsFooterLinksBox>
            <li>Support</li>
            <li>Privacy & Cookies</li>
            <li>Accessibility</li>
          </StyledLogsFooterLinksBox>
        </StyledLogFooterContent>
      </Container>
    </StyledLogFooter>
  );
}

export default LogsFooter;
