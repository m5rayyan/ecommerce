import React from "react";
import StoreProductBox from "./StoreProductBox";
// Import Images
import storeProductImg1 from "../../assets/Images/storeProductImg1.png";
import storeProductImg2 from "../../assets/Images/storeProductImg2.png";
import storeProductImg3 from "../../assets/Images/storeProductImg3.png";
import storeProductImg4 from "../../assets/Images/storeProductImg4.png";
import storeProductImg5 from "../../assets/Images/storeProductImg5.png";
import storeProductImg6 from "../../assets/Images/storeProductImg6.png";

function StoreProductResult() {
  const productInfo = [
    {
      photo: storeProductImg1,
      productName: "Canon Cmera EOS 2000, Black 10x zoom",
      productPrice: "$998.00",
      numberOfOrders: "154",
      oldPrice: "$1128.00",
      isFree: "true",
      aboutProduct:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit ",
      viewDetailsLink: "View details",
    },
    {
      photo: storeProductImg2,
      productName: "GoPro HERO6 4K Action Camera - Black",
      productPrice: "$998.00",
      numberOfOrders: "154",
      isFree: "true",
      aboutProduct:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit ",
      viewDetailsLink: "View details",
    },
    {
      photo: storeProductImg3,
      productName: "GoPro HERO6 4K Action Camera - Black",
      productPrice: "$998.00",
      numberOfOrders: "154",
      isFree: "true",
      aboutProduct:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit ",
      viewDetailsLink: "View details",
    },
    {
      test: "hhhhh",
      photo: storeProductImg4,
      productName: "GoPro HERO6 4K Action Camera - Black",
      productPrice: "$998.00",
      numberOfOrders: "154",
      isFree: "true",
      aboutProduct:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit ",
      viewDetailsLink: "View details",
    },
    {
      photo: storeProductImg5,
      productName: "GoPro HERO6 4K Action Camera - Black",
      productPrice: "$998.00",
      numberOfOrders: "154",
      oldPrice: "$1128.00",
      isFree: "true",
      aboutProduct:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit ",
      viewDetailsLink: "View details",
    },
    {
      photo: storeProductImg6,
      productName: "GoPro HERO6 4K Action Camera - Black",
      productPrice: "$998.00",
      numberOfOrders: "154",
      isFree: "true",
      aboutProduct:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit ",
      viewDetailsLink: "View details",
    },
  ];
  return (
    <div className="StoreProductResult">
      {productInfo.map((product) => {
        return (
          <StoreProductBox
            key={productInfo.indexOf(product)}
            src={product.photo}
            productName={product.productName}
            productPrice={product.productPrice}
            oldPrice={product.oldPrice}
            numberOfOrders={product.numberOfOrders}
            isFree={product.isFree}
            aboutProduct={product.aboutProduct}
            viewDetailsLink={product.viewDetailsLink}
          />
        );
      })}
    </div>
  );
}

export default StoreProductResult;
