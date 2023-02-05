import React from "react";
import {
  StyledSavedForLaterInfo,
  StyledSavedForLaterProduct,
  StyledSavedForLaterImgBox,
  StyledProductPrice,
} from "./SavedForLaterSection.style";
import { StyledProductName } from "../global/ProductName/ProductName.style";
import MoveToCart from "../MoveToCart/MoveToCart";

function SavedForLaterProduct(props) {
  return (
    <StyledSavedForLaterProduct href="#">
      <StyledSavedForLaterImgBox>
        <img src={props.src} alt={props.alt} />
      </StyledSavedForLaterImgBox>
      <StyledSavedForLaterInfo>
        <StyledProductPrice>{props.price}</StyledProductPrice>
        <StyledProductName>{props.name}</StyledProductName>
        <MoveToCart />
      </StyledSavedForLaterInfo>
    </StyledSavedForLaterProduct>
  );
}

export default SavedForLaterProduct;
