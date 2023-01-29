import React from "react";
import { StyledProductName } from "../global/ProductName/ProductName.style";
import {
  StyledProductInfo,
  StyledFromPrice,
  StyledProductImg,
} from "./HomeCategorySection.style";

function ProductInfo(props) {
  const { href, productName, fromPrice, productImg } = props;
  return (
    <StyledProductInfo href={href}>
      <div className="ProductInfoBox">
        <StyledProductName>{productName}</StyledProductName>
        <StyledFromPrice>
          <span>From</span>
          <span>USD {fromPrice}</span>
        </StyledFromPrice>
      </div>
      <StyledProductImg src={productImg} alt={productName} />
    </StyledProductInfo>
  );
}

export default ProductInfo;
