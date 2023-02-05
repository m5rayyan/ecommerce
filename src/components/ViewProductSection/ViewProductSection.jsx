import React from "react";
import Container from "../global/Container/Container";
import ProductImagesBox from "./ProductImagesBox";
import ViewProductInfo from "./ViewProductInfo";
import ViewProductInteractions from "./ViewProductInteractions";
import {
  StyledViewProductSection,
  StyledViewProductSectionContent,
} from "./ViewProductSection.style";

function ViewProductSection() {
  return (
    <StyledViewProductSection className="ViewProductSection">
      <Container>
        <StyledViewProductSectionContent>
          <ProductImagesBox />
          <ViewProductInfo />
          <ViewProductInteractions />
        </StyledViewProductSectionContent>
      </Container>
    </StyledViewProductSection>
  );
}

export default ViewProductSection;
