import React from "react";
// Import Images
import storeProductImg3 from "../../assets/Images/storeProductImg3.png";
import storeProductImg5 from "../../assets/Images/storeProductImg5.png";
import storeProductImg6 from "../../assets/Images/storeProductImg6.png";
import storeProductImg4 from "../../assets/Images/storeProductImg4.png";
import storeProductImg2 from "../../assets/Images/storeProductImg2.png";
import storeProductImg1 from "../../assets/Images/storeProductImg1.png";
import RelatedProduct from "./RelatedProduct";
import { StyledRelatedProductsBox } from "./RelatedProductsSection.style";

function RelatedProductsBox() {
  const products = [
    {
      id: 0,
      src: storeProductImg3,
      alt: "Related Product",
      name: "Xiaomi Redmi 8 Original",
      priceFrom: "$32.00",
      priceTo: "$40.00",
    },
    {
      id: 1,
      src: storeProductImg5,
      alt: "Related Product",
      name: "Xiaomi Redmi 8 Original",
      priceFrom: "$32.00",
      priceTo: "$40.00",
    },
    {
      id: 2,
      src: storeProductImg6,
      alt: "Related Product",
      name: "Xiaomi Redmi 8 Original",
      priceFrom: "$32.00",
      priceTo: "$40.00",
    },
    {
      id: 3,
      src: storeProductImg4,
      alt: "Related Product",
      name: "Xiaomi Redmi 8 Original",
      priceFrom: "$32.00",
      priceTo: "$40.00",
    },
    {
      id: 4,
      src: storeProductImg2,
      alt: "Related Product",
      name: "Xiaomi Redmi 8 Original",
      priceFrom: "$32.00",
      priceTo: "$40.00",
    },
    {
      id: 5,
      src: storeProductImg1,
      alt: "Related Product",
      name: "Xiaomi Redmi 8 Original",
      priceFrom: "$32.00",
      priceTo: "$40.00",
    },
  ];

  return (
    <StyledRelatedProductsBox>
      {products.map((product) => {
        return (
          <RelatedProduct
            key={product.id}
            src={product.src}
            alt={product.alt}
            name={product.name}
            priceFrom={product.priceFrom}
            priceTo={product.priceTo}
          />
        );
      })}
    </StyledRelatedProductsBox>
  );
}

export default RelatedProductsBox;
