import React from "react";
// Import Images
import storeProductImg3 from "../../assets/Images/storeProductImg3.png";
import storeProductImg5 from "../../assets/Images/storeProductImg5.png";
import storeProductImg6 from "../../assets/Images/storeProductImg6.png";
import storeProductImg4 from "../../assets/Images/storeProductImg4.png";
import storeProductImg2 from "../../assets/Images/storeProductImg2.png";
import { StyledSavedForLaterProductsBox } from "./SavedForLaterSection.style";
import SavedForLaterProduct from "./SavedForLaterProduct";

function SavedForLaterProductsBox() {
  const products = [
    {
      id: 0,
      src: storeProductImg3,
      alt: "Related Product",
      name: "GoPro HERO6 4K Action Camera - Black",
      price: "$99.50",
    },
    {
      id: 1,
      src: storeProductImg5,
      alt: "Related Product",
      name: "GoPro HERO6 4K Action Camera - Black",
      price: "$99.50",
    },
    {
      id: 2,
      src: storeProductImg6,
      alt: "Related Product",
      name: "GoPro HERO6 4K Action Camera - Black",
      price: "$99.50",
    },
    {
      id: 3,
      src: storeProductImg4,
      alt: "Related Product",
      name: "GoPro HERO6 4K Action Camera - Black",
      price: "$99.50",
    },
    {
      id: 4,
      src: storeProductImg2,
      alt: "Related Product",
      name: "GoPro HERO6 4K Action Camera - Black",
      price: "$99.50",
    },
  ];

  return (
    <StyledSavedForLaterProductsBox>
      {products.map((product) => {
        return (
          <SavedForLaterProduct
            key={product.id}
            src={product.src}
            alt={product.alt}
            name={product.name}
            price={product.price}
          />
        );
      })}
    </StyledSavedForLaterProductsBox>
  );
}

export default SavedForLaterProductsBox;
