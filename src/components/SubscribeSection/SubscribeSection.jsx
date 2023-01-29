import React from "react";
import Container from "../global/Container/Container";
import {
  StyledExtraBoldProductName,
  StyledGrayProductName,
} from "../global/ProductName/ProductName.style";

import {
  StyledSubscribeSection,
  StyledSubscribeContent,
  StyledSubscribeInputBox,
  StyledSubscribeInput,
  StyledSubscribeBox,
  StyledSubscribeIcon,
} from "./SubscribeSection.style";

import { StyledButton } from "../global/Button/Button.style";
import emailIcon from "../../assets/Images/Icons/email.svg";
function SubscribeSection() {
  return (
    <StyledSubscribeSection>
      <Container>
        <StyledSubscribeContent>
          <StyledExtraBoldProductName as="h2">
            Subscribe on our newsletter
          </StyledExtraBoldProductName>
          <StyledGrayProductName>
            Get daily news on upcoming offers from many suppliers all over the
            world
          </StyledGrayProductName>
          <StyledSubscribeBox>
            <StyledSubscribeInputBox>
              <StyledSubscribeIcon src={emailIcon} alt="" />
              <StyledSubscribeInput
                type="email"
                name=""
                id=""
                placeholder="Email"
              />
            </StyledSubscribeInputBox>
            <StyledButton>Subscribe</StyledButton>
          </StyledSubscribeBox>
        </StyledSubscribeContent>
      </Container>
    </StyledSubscribeSection>
  );
}

export default SubscribeSection;
