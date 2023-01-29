import React from "react";
import Container from "../global/Container/Container";
import AsideSearchFilter from "../AsideSearchFilter/AsideSearchFilter";
import StoreProductResult from "../StoreProductResult/StoreProductResult";
import {
  StyledStoreListMainSection,
  StyledStoreListContent,
} from "./StoreListMainSection.style";
function StoreListMainSection() {
  return (
    <StyledStoreListMainSection>
      <Container>
        <StyledStoreListContent>
          <AsideSearchFilter />
          <StoreProductResult />
        </StyledStoreListContent>
      </Container>
    </StyledStoreListMainSection>
  );
}

export default StoreListMainSection;
