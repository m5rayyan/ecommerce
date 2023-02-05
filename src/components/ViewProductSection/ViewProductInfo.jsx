import React from "react";

// Import Icons
import inStock from "../../assets/Images/Icons/inStock.svg";
import ExtraInfo from "./ExtraInfo";
import PricePerPieces from "./PricePerPieces";
import ProductStatus from "./ProductStatus";
import {
  StyledTopInfo,
  StyledInStock,
  StyledViewedProductName,
} from "./ViewProductSection.style";

function ViewProductInfo() {
  return (
    <div className="ViewProductInfo">
      <StyledTopInfo>
        <StyledInStock>
          <img src={inStock} alt="In Stock" />
          In stock
        </StyledInStock>
        <StyledViewedProductName>
          Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle
        </StyledViewedProductName>
        <ProductStatus />
        <PricePerPieces />
      </StyledTopInfo>
      <ExtraInfo />
    </div>
  );
}

export default ViewProductInfo;
