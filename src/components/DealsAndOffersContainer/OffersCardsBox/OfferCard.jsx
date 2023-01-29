import React from "react";
import StyledProductName from "../../global/ProductName/ProductName";

import {
  OfferCardStyled,
  OfferedProductImg,
  OfferAmount,
  StyledOfferedProductImgBox,
} from "./OffersCardsBox.style";
function OfferCard(props) {
  const { href, src, productName, offerAmount } = props;
  return (
    <OfferCardStyled href={href}>
      <StyledOfferedProductImgBox>
        <OfferedProductImg src={src} alt={productName} />
      </StyledOfferedProductImgBox>
      <StyledProductName>{productName}</StyledProductName>
      <OfferAmount>{offerAmount}</OfferAmount>
    </OfferCardStyled>
  );
}

export default OfferCard;
