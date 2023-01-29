import React from "react";
import {
  StyledBannerSection,
  StyledBannerSectionContent,
} from "./BannerSection.style";
import Container from "../global/Container/Container";
import CategoryColumn from "./CategoryColumn";
import BannerBoard from "./BannerBoard";
import UserAndBenefitsColumn from "./UserAndBenefitsColumn";
function BannerSection() {
  return (
    <StyledBannerSection>
      <Container>
        <StyledBannerSectionContent>
          <CategoryColumn />
          <BannerBoard />
          <UserAndBenefitsColumn />
        </StyledBannerSectionContent>
      </Container>
    </StyledBannerSection>
  );
}

export default BannerSection;
