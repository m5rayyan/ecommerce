import React from "react";
import {
  StyledGrayProductName,
  StyledProductName,
} from "../global/ProductName/ProductName.style";
import {
  StyledSuppliersByRegionBox,
  StyledSupplierFlagBox,
  StyledFlag,
  StyledSupplierInfoBox,
} from "./SuppliersByRegion.style";

function SuppliersByRegionBox(props) {
  const { src, supplierName, supplierEmail } = props;
  return (
    <StyledSuppliersByRegionBox>
      <StyledSupplierFlagBox>
        <StyledFlag src={src} alt={supplierName} />
      </StyledSupplierFlagBox>
      <StyledSupplierInfoBox>
        <StyledProductName>{supplierName}</StyledProductName>
        <StyledGrayProductName as="p">{supplierEmail}</StyledGrayProductName>
      </StyledSupplierInfoBox>
    </StyledSuppliersByRegionBox>
  );
}

export default SuppliersByRegionBox;
