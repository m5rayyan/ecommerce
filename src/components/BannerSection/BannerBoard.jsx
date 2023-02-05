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
import { Link } from "react-router-dom";

function BannerBoard() {
  return (
    <StyledBannerBoard>
      <StyledBannerBg src={BannerBg} alt="BannerBg" />
      <StyledBannerInfoBox>
        <StyledLastTrendingTitle>Last trending</StyledLastTrendingTitle>
        <StyledBannerTitle>Electronic items</StyledBannerTitle>
        <Link to="/storeList">
          <WightButton width="112">Learn more</WightButton>
        </Link>
      </StyledBannerInfoBox>
    </StyledBannerBoard>
  );
}

export default BannerBoard;
