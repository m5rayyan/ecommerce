import React from "react";
import {
  StyledBoldProductName,
  StyledGrayProductName,
} from "../global/ProductName/ProductName.style";
import {
  StyledButton,
  StyledProductInCatDescription,
  StyledProductInCatInfo,
  StyledProductInCart,
  StyledProductInCartImgBox,
  StyledCartButtonsBox,
  StyledPriceInCart,
  StyledSelect,
  StyledOption,
} from "./MyCart.style";
function ProductInCart(props) {
  const { src, productName, size, color, material, seller, price } = props;
  return (
    <StyledProductInCart>
      <StyledProductInCartImgBox>
        <img src={src} alt={productName} />
      </StyledProductInCartImgBox>

      <StyledProductInCatDescription>
        <StyledBoldProductName>{productName}</StyledBoldProductName>
        <StyledProductInCatInfo>
          <StyledGrayProductName as="p">Size: {size},</StyledGrayProductName>
          <StyledGrayProductName as="p">Color: {color},</StyledGrayProductName>
          <StyledGrayProductName as="p">
            Material: {material}
          </StyledGrayProductName>
        </StyledProductInCatInfo>
        <StyledGrayProductName as="p">Seller: {seller}</StyledGrayProductName>

        <StyledCartButtonsBox>
          <StyledButton variant="#FA3434">Remove</StyledButton>
          <StyledButton variant="#0d6efd">Save for later</StyledButton>
        </StyledCartButtonsBox>
      </StyledProductInCatDescription>

      <div className="PriceAndQuantity">
        <StyledPriceInCart>{price}</StyledPriceInCart>

        <StyledSelect name="" id="">
          <StyledOption value="1">Qty: 1</StyledOption>
          <StyledOption value="3">Qty: 3</StyledOption>
          <StyledOption value="9">Qty: 9</StyledOption>
        </StyledSelect>
      </div>
    </StyledProductInCart>
  );
}

export default ProductInCart;
