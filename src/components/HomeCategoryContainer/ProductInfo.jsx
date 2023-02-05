import React from "react";
import { Link } from "react-router-dom";
import { StyledProductName } from "../global/ProductName/ProductName.style";
import {
  StyledProductInfo,
  StyledFromPrice,
  StyledProductImg,
} from "./HomeCategorySection.style";

function ProductInfo(props) {
  const { path, productName, fromPrice, productImg } = props;
  return (
    <Link to={path}>
      <StyledProductInfo>
        <div className="ProductInfoBox">
          <StyledProductName>{productName}</StyledProductName>
          <StyledFromPrice>
            <span>From</span>
            <span>USD {fromPrice}</span>
          </StyledFromPrice>
        </div>
        <StyledProductImg src={productImg} alt={productName} />
      </StyledProductInfo>
    </Link>
  );
}

export default ProductInfo;
