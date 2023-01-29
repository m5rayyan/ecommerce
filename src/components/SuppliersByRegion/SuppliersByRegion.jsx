import React from "react";
import Container from "../global/Container/Container";
import { StyledExtraBoldProductName } from "../global/ProductName/ProductName.style";
import {
  StyledSuppliersByRegion,
  StyledSuppliersByRegionContent,
} from "./SuppliersByRegion.style";
import SuppliersByRegionBox from "./SuppliersByRegionBox";

// Import Flags

import AUEFlag from "../../assets/Images/AUEFlag.png";
import AustraliaFlag from "../../assets/Images/AustraliaFlag.png";
import USAFlag from "../../assets/Images/USA.png";
import RussiaFlag from "../../assets/Images/RussiaFlag.png";
import ItalyFlag from "../../assets/Images/ItalyFlag.png";
import DenmarkFlag from "../../assets/Images/DenmarkFlag.png";
import FranceFlag from "../../assets/Images/FranceFlag.png";
import ChinaFlag from "../../assets/Images/ChinaFlag.png";
import BritainFlag from "../../assets/Images/BritainFlag.png";

function SuppliersByRegion() {
  return (
    <StyledSuppliersByRegion>
      <Container>
        <StyledExtraBoldProductName>
          Suppliers by region
        </StyledExtraBoldProductName>
        <StyledSuppliersByRegionContent>
          <SuppliersByRegionBox
            src={AUEFlag}
            supplierName="Arabic Emirates"
            supplierEmail="shopname.ae"
          />

          <SuppliersByRegionBox
            src={AustraliaFlag}
            supplierName="Australia"
            supplierEmail="shopname.ae"
          />

          <SuppliersByRegionBox
            src={USAFlag}
            supplierName="United States"
            supplierEmail="shopname.ae"
          />

          <SuppliersByRegionBox
            src={RussiaFlag}
            supplierName="Russia"
            supplierEmail="shopname.ru"
          />

          <SuppliersByRegionBox
            src={ItalyFlag}
            supplierName="Italy"
            supplierEmail="shopname.it"
          />

          <SuppliersByRegionBox
            src={DenmarkFlag}
            supplierName="Denmark"
            supplierEmail="denmark.com.dk"
          />

          <SuppliersByRegionBox
            src={FranceFlag}
            supplierName="France"
            supplierEmail="shopname.com.fr"
          />

          <SuppliersByRegionBox
            src={AUEFlag}
            supplierName="Arabic Emirates"
            supplierEmail="shopname.ae"
          />

          <SuppliersByRegionBox
            src={ChinaFlag}
            supplierName="China"
            supplierEmail="shopname.ae"
          />

          <SuppliersByRegionBox
            src={BritainFlag}
            supplierName="Great Britain"
            supplierEmail="shopname.co.uk"
          />
        </StyledSuppliersByRegionContent>
      </Container>
    </StyledSuppliersByRegion>
  );
}

export default SuppliersByRegion;
