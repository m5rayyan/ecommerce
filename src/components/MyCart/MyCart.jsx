import React from "react";
import Container from "../global/Container/Container";
import { StyledExtraBoldProductName } from "../global/ProductName/ProductName.style";
import {
  StyledBackToShop,
  StyledButton,
  StyledCartTail,
  StyledMyCart,
  StyledMyCartContainer,
  StyledMyCartContent,
} from "./MyCart.style";
import ProductInCart from "./ProductInCart";
import back from "../../assets/Images/Icons/back.svg";
import TShirts from "../../assets/Images/TShirts.png";
import BackPack from "../../assets/Images/BackPack.png";
import SoftChairs from "../../assets/Images/SoftChairs.png";
import MyCartCheckOut from "./MyCartCheckOut";

function MyCart() {
  const products = [
    {
      id: 0,
      src: TShirts,
      productName: "T-shirts with multiple colors, for men and lady",
      size: "medium",
      color: "blue",
      material: "Plastic",
      seller: "Artel Market",
      price: "$78.99",
    },
    {
      id: 1,
      src: BackPack,
      productName: "T-shirts with multiple colors, for men and lady",
      size: "medium",
      color: "blue",
      material: "Plastic",
      seller: "Best factory LLC",
      price: "$39.00",
    },
    {
      id: 2,
      src: SoftChairs,
      productName: "T-shirts with multiple colors, for men and lady",
      size: "medium",
      color: "blue",
      material: "Plastic",
      seller: "Artel Market",
      price: "$170.50",
    },
  ];

  return (
    <StyledMyCart>
      <Container>
        <StyledExtraBoldProductName as="h1">
          My Cart (3)
        </StyledExtraBoldProductName>
        <StyledMyCartContainer>
          <StyledMyCartContent>
            {products.map((product) => {
              return (
                <ProductInCart
                  key={product.id}
                  src={product.src}
                  productName={product.productName}
                  size={product.size}
                  color={product.color}
                  material={product.material}
                  seller={product.seller}
                  price={product.price}
                />
              );
            })}

            <StyledCartTail>
              <StyledBackToShop href="#">
                <img src={back} alt="back" />
                Back to shop
              </StyledBackToShop>
              <StyledButton variant="#0d6efd">Remove all</StyledButton>
            </StyledCartTail>
          </StyledMyCartContent>
          <MyCartCheckOut />
        </StyledMyCartContainer>
      </Container>
    </StyledMyCart>
  );
}

export default MyCart;
