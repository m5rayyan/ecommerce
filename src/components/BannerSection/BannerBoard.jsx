import React from "react";
import {
  StyledBannerBoard,
  StyledBannerBg,
  StyledLastTrendingTitle,
  StyledBannerTitle,
  StyledBannerInfoBox,
} from "./BannerSection.style";

import { WightButton } from "../global/Button/Button.style";
// Import Banner Image
import BannerBg from "../../assets/Images/Banner.png";

function BannerBoard() {
  return (
    <StyledBannerBoard>
      <StyledBannerBg src={BannerBg} alt="BannerBg" />
      <StyledBannerInfoBox>
        <StyledLastTrendingTitle>Last trending</StyledLastTrendingTitle>
        <StyledBannerTitle>Electronic items</StyledBannerTitle>
        <WightButton as="a" href="#" width="112">
          Learn more
        </WightButton>
      </StyledBannerInfoBox>
    </StyledBannerBoard>
  );
}

export default BannerBoard;
