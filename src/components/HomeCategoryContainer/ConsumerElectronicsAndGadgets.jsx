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
  return (
    <StyledProductList>
      <ProductInfo
        href="#"
        productImg={SmartWatches}
        productName="Smart watches"
        fromPrice="19"
      />

      <ProductInfo
        href="#"
        productImg={GoProCameras}
        productName="Cameras"
        fromPrice="89"
      />

      <ProductInfo
        href="#"
        productImg={WightHeadphones}
        productName="Headphones"
        fromPrice="19"
      />

      <ProductInfo
        href="#"
        productImg={CoffeeKeeper}
        productName="Coffee keeper"
        fromPrice="90"
      />

      <ProductInfo
        href="#"
        productImg={Headphones}
        productName="Gaming set"
        fromPrice="35"
      />

      <ProductInfo
        href="#"
        productImg={Laptops}
        productName="Laptops & PC"
        fromPrice="340"
      />

      <ProductInfo
        href="#"
        productImg={Smartphones}
        productName="Smartphones"
        fromPrice="19"
      />

      <ProductInfo
        href="#"
        productImg={ElectricKattle}
        productName="Electric kattle"
        fromPrice="240"
      />
    </StyledProductList>
  );
}
export default ConsumerElectronicsAndGadgets;
