import React from "react";
import Container from "../global/Container/Container";
import {
  StyledCopyRightFooter,
  StyledCopyRightContent,
  StyledCopyRightText,
  StyledFooterLang,
  StyledFooterDropDown,
  StyledFooterFlagBox,
  StyledFooterFlagImg,
} from "./Footer.style";

// Import Images
import USAFlag from "../../assets/Images/USA.png";
import dropDown from "../../assets/Images/Icons/dropDown.svg";

function CopyRightFooter() {
  return (
    <StyledCopyRightFooter>
      <Container>
        <StyledCopyRightContent>
          <StyledCopyRightText>© 2023 Ecommerce.</StyledCopyRightText>
          <StyledFooterLang>
            <StyledFooterFlagBox>
              <StyledFooterFlagImg src={USAFlag} alt="Lang Flag" />
            </StyledFooterFlagBox>
            <StyledCopyRightText>English</StyledCopyRightText>
            <StyledFooterDropDown src={dropDown} alt="dropDown Icon" />
          </StyledFooterLang>
        </StyledCopyRightContent>
      </Container>
    </StyledCopyRightFooter>
  );
}

export default CopyRightFooter;
