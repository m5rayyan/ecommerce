import React from "react";
import SupplierImg from "../../assets/Images/SupplierImg.png";
import flag from "../../assets/Images/flag.png";
import VerifiedIcon from "../../assets/Images/Icons/Verified.svg";
import WorldWiderIcon from "../../assets/Images/Icons/WorldWider.svg";
import {
  StyledViewProductInteractions,
  StyledAboutSupplier,
  StyledSupplierImageAndNameBox,
  StyledSupplierName,
  StyledSupplierInfoBox,
  StyledSupplierRow,
  StyledInfoText,
  StyledSupplierLinksBox,
  StyledSaveLaterBox,
  StyledSaveLaterButton,
} from "./ViewProductSection.style";
import { StyledButton, WightButton } from "../global/Button/Button.style";
import saveForLater from "../../assets/Images/Icons/saveForLater.svg";

function ViewProductInteractions() {
  return (
    <StyledViewProductInteractions>
      <StyledAboutSupplier>
        <StyledSupplierImageAndNameBox>
          <img src={SupplierImg} alt="Supplier Img" />
          <StyledSupplierName>
            <p>Supplier</p>
            Guanjoi Trading LLC
          </StyledSupplierName>
        </StyledSupplierImageAndNameBox>

        <StyledSupplierInfoBox>
          <StyledSupplierRow>
            <img src={flag} alt="flag" />
            <StyledInfoText>Germany, Berlin</StyledInfoText>
          </StyledSupplierRow>
          <StyledSupplierRow>
            <img src={VerifiedIcon} alt="Verified Icon" />
            <StyledInfoText>Verified Seller</StyledInfoText>
          </StyledSupplierRow>
          <StyledSupplierRow>
            <img src={WorldWiderIcon} alt="WorldWider Icon" />
            <StyledInfoText>Worldwide shipping</StyledInfoText>
          </StyledSupplierRow>
        </StyledSupplierInfoBox>
        <StyledSupplierLinksBox>
          <StyledButton as="a" href="#">
            Send inquiry
          </StyledButton>
          <WightButton as="a" href="#" variant="blue">
            Seller’s profile
          </WightButton>
        </StyledSupplierLinksBox>
      </StyledAboutSupplier>

      <StyledSaveLaterBox>
        <StyledSaveLaterButton>
          <img src={saveForLater} alt="Save For Later" />
          Save for later
        </StyledSaveLaterButton>
      </StyledSaveLaterBox>
    </StyledViewProductInteractions>
  );
}

export default ViewProductInteractions;
