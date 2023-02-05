import React from "react";
import Container from "../global/Container/Container";
import AboutProductSide from "./AboutProductSide";
import {
  StyledViewProductSecondSection,
  StyledViewProductSecondContent,
} from "./ViewProductSecondSection.style";
import YouMayLikeSide from "./YouMayLikeSide";
function ViewProductSecondSection() {
  return (
    <StyledViewProductSecondSection>
      <Container>
        <StyledViewProductSecondContent>
          <AboutProductSide />
          <YouMayLikeSide />
        </StyledViewProductSecondContent>
      </Container>
    </StyledViewProductSecondSection>
  );
}

export default ViewProductSecondSection;
