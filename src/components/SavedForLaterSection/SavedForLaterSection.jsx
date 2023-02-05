import React from "react";
import { StyledExtraBoldProductName } from "../global/ProductName/ProductName.style";

import Container from "../global/Container/Container";
import {
  StyledSaveForLaterContent,
  StyledSaveForLaterSection,
} from "./SavedForLaterSection.style";
import SavedForLaterProductsBox from "./SavedForLaterProductsBox";

function SavedForLaterSection() {
  return (
    <StyledSaveForLaterSection>
      <Container>
        <StyledSaveForLaterContent>
          <StyledExtraBoldProductName as="h2">
            Saved for later
          </StyledExtraBoldProductName>
          <SavedForLaterProductsBox />
        </StyledSaveForLaterContent>
      </Container>
    </StyledSaveForLaterSection>
  );
}

export default SavedForLaterSection;
