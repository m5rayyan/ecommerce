import React from "react";
import { Link } from "react-router-dom";
import StyledProductName from "../../global/ProductName/ProductName";

import {
  OfferCardStyled,
  OfferedProductImg,
  OfferAmount,
  StyledOfferedProductImgBox,
} from "./OffersCardsBox.style";
function OfferCard(props) {
  const { path, src, productName, offerAmount } = props;
  return (
    <Link to={path}>
      <OfferCardStyled>
        <StyledOfferedProductImgBox>
          <OfferedProductImg src={src} alt={productName} />
        </StyledOfferedProductImgBox>
        <StyledProductName>{productName}</StyledProductName>
        <OfferAmount>{offerAmount}</OfferAmount>
      </OfferCardStyled>
    </Link>
  );
}

export default OfferCard;
