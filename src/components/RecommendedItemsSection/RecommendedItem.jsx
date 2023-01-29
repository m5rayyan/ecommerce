import React from "react";
import { StyledGrayProductName } from "../global/ProductName/ProductName.style";
import {
  StyledRecommendedItem,
  StyledRecommendedItemImg,
  StyledRecommendedItemInfo,
  StyledRecommendedItemImgBox,
  StyledProductPrice,
} from "./RecommendedItemsSection.style";
function RecommendedItem(props) {
  const { src, productName, productPrice, href } = props;
  return (
    <StyledRecommendedItem href={href}>
      <StyledRecommendedItemImgBox>
        <StyledRecommendedItemImg src={src} alt={productName} />
      </StyledRecommendedItemImgBox>
      <StyledRecommendedItemInfo>
        <StyledProductPrice>{productPrice}</StyledProductPrice>
        <StyledGrayProductName>{productName}</StyledGrayProductName>
      </StyledRecommendedItemInfo>
    </StyledRecommendedItem>
  );
}

export default RecommendedItem;
