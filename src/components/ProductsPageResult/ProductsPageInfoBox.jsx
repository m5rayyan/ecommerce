import React from "react";
import {
  StyledPricesBox,
  StyledPrice,
  StyledOldPrice,
  StyledStarsBox,
  StyledProductStatus,
  StyledRating,
  StyledAboutProduct,
  StyledStoreProductInfoBox,
  StyledAddToCartIconBox,
} from "./ProductsPageBox.style";

import star from "../../assets/Images/Icons/star.svg";
import emptyStar from "../../assets/Images/Icons/emptyStar.svg";
import saveForLater from "../../assets/Images/Icons/saveForLater.svg";

function StoreProductInfoBox(props) {
  return (
    <StyledStoreProductInfoBox>
      <StyledPricesBox>
        <StyledPrice>{props.productPrice}</StyledPrice>
        {props.oldPrice ? (
          <StyledOldPrice>{props.oldPrice}</StyledOldPrice>
        ) : (
          ""
        )}
      </StyledPricesBox>
      <StyledProductStatus>
        <StyledStarsBox>
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={emptyStar} alt="emptyStar" />
          <StyledRating>7.5</StyledRating>
        </StyledStarsBox>
      </StyledProductStatus>
      <StyledAboutProduct className="StyledAboutProduct">
        {props.productName}
      </StyledAboutProduct>
      <StyledAddToCartIconBox>
        <img src={saveForLater} alt="Save For Later" />
      </StyledAddToCartIconBox>
    </StyledStoreProductInfoBox>
  );
}

export default StoreProductInfoBox;
