import React from "react";
import { StyledButton } from "../global/Button/Button.style";
import Container from "../global/Container/Container";
import { StyledExtraBoldProductName } from "../global/ProductName/ProductName.style";
import {
  StyledDiscountPanel,
  StyledDiscountPanelContent,
  StyledDiscountTextBox,
  StyledPanelLinkBox,
  StyledPanelExtraText,
} from "./DiscountPanel.style";

function DiscountPanel() {
  return (
    <StyledDiscountPanel>
      <Container>
        <StyledDiscountPanelContent>
          <StyledDiscountTextBox>
            <StyledExtraBoldProductName as="h2">
              Super discount on more than 100 USD
            </StyledExtraBoldProductName>
            <StyledPanelExtraText>
              Have you ever finally just write dummy info
            </StyledPanelExtraText>
          </StyledDiscountTextBox>
          <StyledPanelLinkBox>
            <StyledButton variant="shop" as="a" href="#" borderWidth="0">
              Shop new
            </StyledButton>
          </StyledPanelLinkBox>
        </StyledDiscountPanelContent>
      </Container>
    </StyledDiscountPanel>
  );
}

export default DiscountPanel;
