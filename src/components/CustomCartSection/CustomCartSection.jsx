import React from "react";
import Container from "../global/Container/Container";
import {
  StyledCustomBox,
  StyledCustomBoxInfo,
  StyledCustomBoxText,
  StyledCustomBoxTitle,
  StyledCustomCartContent,
  StyledCustomCartSection,
  StyledCustomImgBox,
} from "./CustomCartSection.style";
import secure from "../../assets/Images/Icons/secure.svg";
import messages from "../../assets/Images/Icons/messages.svg";
import delivery from "../../assets/Images/Icons/delivery.svg";
function CustomCartSection() {
  return (
    <StyledCustomCartSection>
      <Container>
        <StyledCustomCartContent>
          <StyledCustomBox>
            <StyledCustomImgBox>
              <img src={secure} alt="secure" />
            </StyledCustomImgBox>
            <StyledCustomBoxInfo>
              <StyledCustomBoxTitle>Secure payment</StyledCustomBoxTitle>
              <StyledCustomBoxText as="p">
                Have you ever finally just
              </StyledCustomBoxText>
            </StyledCustomBoxInfo>
          </StyledCustomBox>

          <StyledCustomBox>
            <StyledCustomImgBox>
              <img src={messages} alt="support" />
            </StyledCustomImgBox>
            <StyledCustomBoxInfo>
              <StyledCustomBoxTitle>Customer support</StyledCustomBoxTitle>
              <StyledCustomBoxText as="p">
                Have you ever finally just
              </StyledCustomBoxText>
            </StyledCustomBoxInfo>
          </StyledCustomBox>

          <StyledCustomBox>
            <StyledCustomImgBox>
              <img src={delivery} alt="delivery" />
            </StyledCustomImgBox>
            <StyledCustomBoxInfo>
              <StyledCustomBoxTitle>Free delivery</StyledCustomBoxTitle>
              <StyledCustomBoxText as="p">
                Have you ever finally just
              </StyledCustomBoxText>
            </StyledCustomBoxInfo>
          </StyledCustomBox>
        </StyledCustomCartContent>
      </Container>
    </StyledCustomCartSection>
  );
}

export default CustomCartSection;
