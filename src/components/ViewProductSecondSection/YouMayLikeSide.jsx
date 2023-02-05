import React from "react";
import {
  StyledYouMayLikeSide,
  StyledMayLikeTitle,
  StyledProductBox,
} from "./ViewProductSecondSection.style";
import YouMayLikeProduct from "./YouMayLikeProduct";

function YouMayLikeSide() {
  return (
    <StyledYouMayLikeSide>
      <StyledMayLikeTitle>You may like</StyledMayLikeTitle>
      <StyledProductBox>
        <YouMayLikeProduct />
      </StyledProductBox>
    </StyledYouMayLikeSide>
  );
}

export default YouMayLikeSide;
