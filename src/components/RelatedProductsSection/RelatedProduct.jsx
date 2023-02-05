import React from "react";
import {
  StyledRelatedInfo,
  StyledRelatedProduct,
  StyledRelatedImgBox,
} from "./RelatedProductsSection.style";
import {
  StyledGrayProductName,
  StyledProductName,
} from "../global/ProductName/ProductName.style";

function RelatedProduct(props) {
  return (
    <StyledRelatedProduct href="#">
      <StyledRelatedImgBox>
        <img src={props.src} alt={props.alt} />
      </StyledRelatedImgBox>
      <StyledRelatedInfo>
        <StyledProductName>{props.name}</StyledProductName>
        <StyledGrayProductName as="p">
          <span className="price-from">{props.priceFrom}</span>-
          <span className="price-top">{props.priceTo}</span>
        </StyledGrayProductName>
      </StyledRelatedInfo>
    </StyledRelatedProduct>
  );
}

export default RelatedProduct;
