import React from "react";
import ProductsPageBox from "./ProductsPageBox";
// Import Images
import storeProductImg1 from "../../assets/Images/storeProductImg1.png";
import storeProductImg2 from "../../assets/Images/storeProductImg2.png";
import storeProductImg3 from "../../assets/Images/storeProductImg3.png";
import storeProductImg4 from "../../assets/Images/storeProductImg4.png";
import storeProductImg5 from "../../assets/Images/storeProductImg5.png";
import storeProductImg6 from "../../assets/Images/storeProductImg6.png";
import storeProductImg7 from "../../assets/Images/storeProductImg7.png";
import { StyledProductsPageResult } from "./ProductsPageBox.style";

function ProductsPageResult() {
  const productInfo = [
    {
      photo: storeProductImg1,
      productName: "GoPro HERO6 4K Action Camera - Black",
      productPrice: "$998.00",
      numberOfOrders: "154",
      oldPrice: "$1128.00",
    },
    {
      photo: storeProductImg7,
      productName: "GoPro HERO6 4K Action Camera - Black",
      productPrice: "$998.00",
      numberOfOrders: "154",
      oldPrice: "$1128.00",
    },
    {
      photo: storeProductImg2,
      productName: "GoPro HERO6 4K Action Camera - Black",
      productPrice: "$998.00",
      numberOfOrders: "154",
      oldPrice: "$1128.00",
    },
    {
      photo: storeProductImg3,
      productName: "GoPro HERO6 4K Action Camera - Black",
      productPrice: "$998.00",
      numberOfOrders: "154",
      oldPrice: "$1128.00",
    },
    {
      photo: storeProductImg6,
      productName: "GoPro HERO6 4K Action Camera - Black",
      productPrice: "$998.00",
      numberOfOrders: "154",
      oldPrice: "$1128.00",
    },
    {
      photo: storeProductImg7,
      productName: "GoPro HERO6 4K Action Camera - Black",
      productPrice: "$998.00",
      numberOfOrders: "154",
      oldPrice: "$1128.00",
    },
    {
      photo: storeProductImg4,
      productName: "GoPro HERO6 4K Action Camera - Black",
      productPrice: "$998.00",
      numberOfOrders: "154",
      oldPrice: "$1128.00",
    },
    {
      photo: storeProductImg5,
      productName: "GoPro HERO6 4K Action Camera - Black",
      productPrice: "$998.00",
      numberOfOrders: "154",
      oldPrice: "$1128.00",
    },
    {
      photo: storeProductImg1,
      productName: "GoPro HERO6 4K Action Camera - Black",
      productPrice: "$998.00",
      numberOfOrders: "154",
      oldPrice: "$1128.00",
    },
  ];
  return (
    <StyledProductsPageResult>
      {productInfo.map((product) => {
        return (
          <ProductsPageBox
            key={productInfo.indexOf(product)}
            src={product.photo}
            productName={product.productName}
            productPrice={product.productPrice}
            oldPrice={product.oldPrice}
            numberOfOrders={product.numberOfOrders}
          />
        );
      })}
    </StyledProductsPageResult>
  );
}

export default ProductsPageResult;
