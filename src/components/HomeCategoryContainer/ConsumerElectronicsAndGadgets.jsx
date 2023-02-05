import React from "react";

import { StyledProductList } from "./HomeCategorySection.style";

//Import Images
import SmartWatches from "../../assets/Images/smart-watches.png";
import GoProCameras from "../../assets/Images/GoPro-cameras.png";
import WightHeadphones from "../../assets/Images/WightHeadphones.png";
import Headphones from "../../assets/Images/Headphones.png";
import Laptops from "../../assets/Images/Laptops.png";
import Smartphones from "../../assets/Images/Smartphones.png";
import ElectricKattle from "../../assets/Images/ElectricKattle.png";
import CoffeeKeeper from "../../assets/Images/CoffeeKeeper.png";

import ProductInfo from "./ProductInfo";

// ProductList
function ConsumerElectronicsAndGadgets() {
  const productsList = [
    {
      id: 0,
      link: "/productsPage",
      productImg: SmartWatches,
      productName: "Smart watches",
      fromPrice: "19",
    },

    {
      id: 1,
      link: "/productsPage",
      productImg: GoProCameras,
      productName: "Cameras",
      fromPrice: "89",
    },
    {
      id: 2,
      link: "/productsPage",
      productImg: WightHeadphones,
      productName: "Headphones",
      fromPrice: "19",
    },
    {
      id: 3,
      link: "/productsPage",
      productImg: CoffeeKeeper,
      productName: "Coffee keeper",
      fromPrice: "19",
    },
    {
      id: 4,
      link: "/productsPage",
      productImg: Headphones,
      productName: "Gaming set",
      fromPrice: "38",
    },
    {
      id: 5,
      link: "/productsPage",
      productImg: Laptops,
      productName: "Laptops & PC",
      fromPrice: "340",
    },
    {
      id: 6,
      link: "/productsPage",
      productImg: Smartphones,
      productName: "Smartphones",
      fromPrice: "19",
    },
    {
      id: 7,
      link: "/productsPage",
      productImg: ElectricKattle,
      productName: "Electric kattle",
      fromPrice: "240",
    },
  ];
  return (
    <StyledProductList>
      {productsList.map((product) => {
        return (
          <ProductInfo
            key={product.id}
            path={product.link}
            productImg={product.productImg}
            productName={product.productName}
            fromPrice={product.fromPrice}
          />
        );
      })}
    </StyledProductList>
  );
}
export default ConsumerElectronicsAndGadgets;
