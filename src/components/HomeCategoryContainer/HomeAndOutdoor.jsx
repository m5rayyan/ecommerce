import React from "react";

import { StyledProductList } from "./HomeCategorySection.style";
//Import Images
import SoftChairs from "../../assets/Images/SoftChairs.png";
import SofaChair from "../../assets/Images/SofaChair.png";
import KitchenDishes from "../../assets/Images/KitchenDishes.png";
import Pottery from "../../assets/Images/Pottery.png";
import KitchenMixer from "../../assets/Images/KitchenMixer.png";
import Blenders from "../../assets/Images/Blenders.png";
import HomeAppliance from "../../assets/Images/HomeAppliance.png";
import CoffeeMaker from "../../assets/Images/CoffeeMaker.png";

import ProductInfo from "./ProductInfo";
// ProductList
function HomeAndOutdoor() {
  return (
    <StyledProductList>
      <ProductInfo
        href="#"
        productImg={SoftChairs}
        productName="Soft chairs"
        fromPrice="19"
      />

      <ProductInfo
        href="#"
        productImg={SofaChair}
        productName="Soft & chair"
        fromPrice="19"
      />

      <ProductInfo
        href="#"
        productImg={KitchenDishes}
        productName="Kitchen dishes"
        fromPrice="19"
      />

      <ProductInfo
        href="#"
        productImg={Pottery}
        productName="Pottery"
        fromPrice="19"
      />

      <ProductInfo
        href="#"
        productImg={KitchenMixer}
        productName="Kitchen mixer"
        fromPrice="100"
      />

      <ProductInfo
        href="#"
        productImg={Blenders}
        productName="Blenders"
        fromPrice="39"
      />

      <ProductInfo
        href="#"
        productImg={HomeAppliance}
        productName="Home appliance"
        fromPrice="19"
      />

      <ProductInfo
        href="#"
        productImg={CoffeeMaker}
        productName="Coffee maker"
        fromPrice="10"
      />
    </StyledProductList>
  );
}

export default HomeAndOutdoor;
