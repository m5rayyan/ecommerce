import React from "react";
import Container from "../global/Container/Container";
import { StyledExtraBoldProductName } from "../global/ProductName/ProductName.style";
import {
  StyledRecommendedItemsSection,
  StyledRecommendedItemsContent,
} from "./RecommendedItemsSection.style";
import RecommendedItem from "./RecommendedItem";

// Import Images
import TShirts from "../../assets/Images/TShirts.png";
import BrownWinterCoat from "../../assets/Images/BrownWinterCoat.png";
import BlueJacket from "../../assets/Images/BlueJacket.png";
import Wallet from "../../assets/Images/Wallet.png";
import BackPack from "../../assets/Images/BackPack.png";
import JeansShort from "../../assets/Images/JeansShort.png";
import WightHeadphones from "../../assets/Images/WightHeadphones2.png";
import Pottery from "../../assets/Images/Pottery2.png";
import CoffeeKeeper from "../../assets/Images/CoffeeKeeper2.png";

function RecommendedItemsSection() {
  return (
    <StyledRecommendedItemsSection>
      <Container>
        <StyledExtraBoldProductName as="h2">
          Recommended items
        </StyledExtraBoldProductName>

        <StyledRecommendedItemsContent>
          <RecommendedItem
            href="#"
            src={TShirts}
            productName="T-shirts with multiple colors, for men"
            productPrice="10.30$"
          />

          <RecommendedItem
            href="#"
            src={BrownWinterCoat}
            productName="Jeans shorts for men blue color"
            productPrice="10.30$"
          />

          <RecommendedItem
            href="#"
            src={BlueJacket}
            productName="Brown winter coat medium size"
            productPrice="12.50$"
          />

          <RecommendedItem
            href="#"
            src={Wallet}
            productName="Jeans bag for travel for men"
            productPrice="34.00$"
          />

          <RecommendedItem
            href="#"
            src={BackPack}
            productName="Leather wallet"
            productPrice="90.00$"
          />

          <RecommendedItem
            href="#"
            src={JeansShort}
            productName="Canon camera black, 100x zoom"
            productPrice="9.99$"
          />

          <RecommendedItem
            href="#"
            src={WightHeadphones}
            productName="Headset for gaming with mic"
            productPrice="8.99$"
          />

          <RecommendedItem
            href="#"
            src={BackPack}
            productName="Smartwatch silver color modern"
            productPrice="10.30$"
          />

          <RecommendedItem
            href="#"
            src={Pottery}
            productName="Blue wallet for men leather metarfial"
            productPrice="10.30$"
          />

          <RecommendedItem
            href="#"
            src={CoffeeKeeper}
            productName="Jeans bag for travel for men"
            productPrice="80.95$"
          />
        </StyledRecommendedItemsContent>
      </Container>
    </StyledRecommendedItemsSection>
  );
}

export default RecommendedItemsSection;
