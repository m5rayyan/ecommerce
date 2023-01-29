import React from "react";
import { StyledBoldProductName } from "../global/ProductName/ProductName.style";
import {
  StyledPricesBox,
  StyledPrice,
  StyledOldPrice,
  StyledStarsBox,
  StyledProductStatus,
  StyledRating,
  StyledNumberOfOrders,
  StyledFreeShipping,
  StyledDotBetween,
  StyledAboutProduct,
  StyledViewDetails,
  StyledStoreProductInfoBox,
  StyledAddToCartIconBox,
} from "./StoreProductBox.style";

import star from "../../assets/Images/Icons/star.svg";
import emptyStar from "../../assets/Images/Icons/emptyStar.svg";
import addToCart from "../../assets/Images/Icons/addToCart.svg";

function StoreProductInfoBox(props) {
  return (
    <StyledStoreProductInfoBox>
      <StyledBoldProductName>{props.productName}</StyledBoldProductName>
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

        <StyledDotBetween />

        <StyledNumberOfOrders>
          {props.numberOfOrders} orders
        </StyledNumberOfOrders>

        <StyledDotBetween />

        {props.isFree ? (
          <StyledFreeShipping>Free Shipping</StyledFreeShipping>
        ) : (
          ""
        )}
      </StyledProductStatus>
      <StyledAboutProduct className="StyledAboutProduct">
        {props.aboutProduct}
      </StyledAboutProduct>

      <StyledViewDetails href="#">{props.viewDetailsLink}</StyledViewDetails>

      <StyledAddToCartIconBox>
        <img src={addToCart} alt="" />
      </StyledAddToCartIconBox>
    </StyledStoreProductInfoBox>
  );
}

export default StoreProductInfoBox;
