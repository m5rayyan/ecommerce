import React from "react";
import {
  StyledStoreProductBox,
  StyledImgBox,
  StyledProductImg,
} from "./ProductsPageBox.style";
import StoreProductInfoBox from "./ProductsPageInfoBox";

function ProductsPageBox(props) {
  const {
    src,
    productName,
    productPrice,
    oldPrice,
    numberOfOrders,
    isFree,
    aboutProduct,
    viewDetailsLink,
  } = props;
  return (
    <StyledStoreProductBox>
      <StyledImgBox>
        <StyledProductImg
          src={src}
          alt={productName}
          className="StyledProductImg"
        />
      </StyledImgBox>
      <StoreProductInfoBox
        productName={productName}
        productPrice={productPrice}
        oldPrice={oldPrice}
        numberOfOrders={numberOfOrders}
        isFree={isFree}
        aboutProduct={aboutProduct}
        viewDetailsLink={viewDetailsLink}
      />
    </StyledStoreProductBox>
  );
}

export default ProductsPageBox;
