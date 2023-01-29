import React from "react";
import OfferCard from "./OfferCard";
import { OffersCardsBoxStyled } from "./OffersCardsBox.style";

// Products Images
import SmartWatches from "../../../assets/Images/smart-watches.png";
import Laptops from "../../../assets/Images/Laptops.png";
import GoProCameras from "../../../assets/Images/GoPro-cameras.png";
import Headphones from "../../../assets/Images/Headphones.png";
import CanonCameras from "../../../assets/Images/Canon-cameras.png";

function OffersCardsBox() {
  return (
    <OffersCardsBoxStyled>
      <OfferCard
        href="#"
        src={SmartWatches}
        productName="Smart watches"
        offerAmount="-25%"
      />
      <OfferCard
        href="#"
        src={Laptops}
        productName="Laptops"
        offerAmount="-15%"
      />
      <OfferCard
        href="#"
        src={GoProCameras}
        productName="GoPro Cameras"
        offerAmount="-40%"
      />
      <OfferCard
        href="#"
        src={Headphones}
        productName="Headphones"
        offerAmount="-25%"
      />
      <OfferCard
        href="#"
        src={CanonCameras}
        productName="Canon Cameras"
        offerAmount="-25%"
      />
    </OffersCardsBoxStyled>
  );
}

export default OffersCardsBox;
