import React from "react";
import {
  StyledPricePerPieces,
  StyledPriceBox,
  StyledRedPrice,
  StyledPrice,
  StyledPiecesNumber,
  StyledVerticalLine,
} from "./ViewProductSection.style";

function PricePerPieces() {
  return (
    <StyledPricePerPieces>
      <StyledPriceBox>
        <StyledRedPrice>$98.00</StyledRedPrice>
        <StyledPiecesNumber>50-100 pcs</StyledPiecesNumber>
      </StyledPriceBox>

      <StyledVerticalLine />

      <StyledPriceBox>
        <StyledPrice>$90.00</StyledPrice>
        <StyledPiecesNumber>100-700 pcs</StyledPiecesNumber>
      </StyledPriceBox>

      <StyledVerticalLine />

      <StyledPriceBox>
        <StyledPrice>$78.00</StyledPrice>
        <StyledPiecesNumber>700+ pcs</StyledPiecesNumber>
      </StyledPriceBox>
    </StyledPricePerPieces>
  );
}

export default PricePerPieces;
