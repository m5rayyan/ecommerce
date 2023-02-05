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
  const productsList = [
    {
      id: 0,
      link: "/viewProductPage",
      src: SmartWatches,
      productName: "Smart watches",
      offerAmount: "-25%",
    },

    {
      id: 1,
      link: "/viewProductPage",
      src: Laptops,
      productName: "Laptops",
      offerAmount: "-15%",
    },
    {
      id: 2,
      link: "/viewProductPage",
      src: GoProCameras,
      productName: "GoPro Cameras",
      offerAmount: "-40%",
    },
    {
      id: 3,
      link: "/viewProductPage",
      src: Headphones,
      productName: "Headphones",
      offerAmount: "-25%",
    },
    {
      id: 4,
      link: "/viewProductPage",
      src: CanonCameras,
      productName: "Canon Cameras",
      offerAmount: "-25%",
    },
  ];

  return (
    <OffersCardsBoxStyled>
      {productsList.map((product) => {
        return (
          <OfferCard
            key={product.id}
            path={product.link}
            src={product.src}
            productName={product.productName}
            offerAmount={product.offerAmount}
          />
        );
      })}
    </OffersCardsBoxStyled>
  );
}

export default OffersCardsBox;
