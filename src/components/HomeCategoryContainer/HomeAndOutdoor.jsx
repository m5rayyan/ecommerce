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
  const productsList = [
    {
      id: 0,
      link: "/viewProductPage",
      productImg: SoftChairs,
      productName: "Soft chairs",
      fromPrice: "19",
    },

    {
      id: 1,
      link: "/viewProductPage",
      productImg: SofaChair,
      productName: "Soft & chair",
      fromPrice: "19",
    },
    {
      id: 2,
      link: "/viewProductPage",
      productImg: KitchenDishes,
      productName: "Kitchen dishes",
      fromPrice: "19",
    },
    {
      id: 3,
      link: "/viewProductPage",
      productImg: Pottery,
      productName: "Pottery",
      fromPrice: "19",
    },
    {
      id: 4,
      link: "/viewProductPage",
      productImg: KitchenMixer,
      productName: "Kitchen mixer",
      fromPrice: "19",
    },
    {
      id: 5,
      link: "/viewProductPage",
      productImg: Blenders,
      productName: "Blenders",
      fromPrice: "39",
    },
    {
      id: 6,
      link: "/viewProductPage",
      productImg: HomeAppliance,
      productName: "Home appliance",
      fromPrice: "19",
    },
    {
      id: 7,
      link: "/viewProductPage",
      productImg: CoffeeMaker,
      productName: "Coffee maker",
      fromPrice: "10",
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

export default HomeAndOutdoor;
