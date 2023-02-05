import React from "react";
import soldIcon from "../../assets/Images/Icons/sold.svg";
import reviewsIcon from "../../assets/Images/Icons/reviews.svg";
import star from "../../assets/Images/Icons/star.svg";
import emptyStar from "../../assets/Images/Icons/emptyStar.svg";
import {
  StyledProductStatus,
  StyledProductRating,
  StyledRatingIcons,
  StyledReviews,
  StyledDot,
  StyledSold,
} from "./ViewProductSection.style";
function ProductStatus() {
  return (
    <StyledProductStatus>
      <StyledProductRating>
        <StyledRatingIcons>
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={emptyStar} alt="emptyStar" />
        </StyledRatingIcons>
        9.3
      </StyledProductRating>

      <StyledDot />

      <StyledReviews>
        <img src={reviewsIcon} alt="Reviews Icon" />
        <div>
          <span>32</span> reviews
        </div>
      </StyledReviews>

      <StyledDot />

      <StyledSold>
        <img src={soldIcon} alt="Sold Icon" />
        <div>
          <span>154</span> sold
        </div>
      </StyledSold>
    </StyledProductStatus>
  );
}

export default ProductStatus;
