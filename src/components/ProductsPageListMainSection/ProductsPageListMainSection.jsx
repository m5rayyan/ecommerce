import React from "react";
import Container from "../global/Container/Container";
import AsideSearchFilter from "../AsideSearchFilter/AsideSearchFilter";
import ProductsPagesResult from "../ProductsPageResult/ProductsPageResult";
import {
  StyledStoreListMainSection,
  StyledStoreListContent,
} from "../StoreListMainSection/StoreListMainSection.style";

function ProductsPageListMainSection() {
  return (
    <StyledStoreListMainSection>
      <Container>
        <StyledStoreListContent>
          <AsideSearchFilter />
          <ProductsPagesResult />
        </StyledStoreListContent>
      </Container>
    </StyledStoreListMainSection>
  );
}

export default ProductsPageListMainSection;
