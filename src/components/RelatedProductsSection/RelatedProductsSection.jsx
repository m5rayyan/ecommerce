import React from "react";
import { StyledExtraBoldProductName } from "../global/ProductName/ProductName.style";

import Container from "../global/Container/Container";
import {
  StyledRelatedProductsContent,
  StyledRelatedProductsSection,
} from "./RelatedProductsSection.style";
import RelatedProductsBox from "./RelatedProductsBox";

function RelatedProductsSection() {
  return (
    <StyledRelatedProductsSection>
      <Container>
        <StyledRelatedProductsContent>
          <StyledExtraBoldProductName as="h2">
            Related products
          </StyledExtraBoldProductName>
          <RelatedProductsBox />
        </StyledRelatedProductsContent>
      </Container>
    </StyledRelatedProductsSection>
  );
}

export default RelatedProductsSection;
