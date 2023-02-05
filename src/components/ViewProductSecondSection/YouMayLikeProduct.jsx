import React, { Fragment } from "react";
import {
  StyledImgBox,
  StyledPriceRange,
  StyledProductName,
  StyledYouMayLikeProduct,
} from "./ViewProductSecondSection.style";

import TShirts from "../../assets/Images/TShirts.png";
import youMayLike1 from "../../assets/Images/youMayLike1.png";
import youMayLike2 from "../../assets/Images/youMayLike2.png";
import youMayLike3 from "../../assets/Images/youMayLike3.png";

function YouMayLikeProduct() {
  const products = [
    {
      id: 1,
      imgName: youMayLike1,
      name: "Apple Watch Series Space Gray",
      price: "$7.00 - $99.50",
    },

    {
      id: 2,
      imgName: TShirts,
      name: "Apple Watch Series Space Gray",
      price: "$7.00 - $99.50",
    },

    {
      id: 3,
      imgName: youMayLike2,
      name: "Apple Watch Series Space Gray",
      price: "$7.00 - $99.50",
    },

    {
      id: 4,
      imgName: youMayLike3,
      name: "Apple Watch Series Space Gray",
      price: "$7.00 - $99.50",
    },

    {
      id: 5,
      imgName: TShirts,
      name: "Apple Watch Series Space Gray",
      price: "$7.00 - $99.50",
    },
  ];

  return (
    <Fragment>
      {products.map((product) => {
        return (
          <StyledYouMayLikeProduct key={product.id} Href="#">
            <StyledImgBox>
              <img src={product.imgName} alt={product.imgName} />
            </StyledImgBox>
            <div className="StyledProductInfo">
              <StyledProductName>{product.name}</StyledProductName>
              <StyledPriceRange as="p">{product.price}</StyledPriceRange>
            </div>
          </StyledYouMayLikeProduct>
        );
      })}
    </Fragment>
  );
}

export default YouMayLikeProduct;
