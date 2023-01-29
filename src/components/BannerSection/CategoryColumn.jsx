import React from "react";
import {
  StyledCategoryColumn,
  StyledCategoryLi,
  StyledCategoryLink,
  StyledCategoryList,
} from "./BannerSection.style";

function CategoryColumn() {
  const test = [
    "Automobiles",
    "Clothes and wear",
    "Home interiors",
    "Computer and tech",
    "Tools, equipments",
    "Sports and outdoor",
    "Animal and pets",
    "Machinery tools",
    "More category",
  ];
  return (
    <StyledCategoryColumn>
      <StyledCategoryList>
        {test.map((e) => {
          return (
            <StyledCategoryLi key={test.indexOf(e)}>
              <StyledCategoryLink href="#">{e}</StyledCategoryLink>
            </StyledCategoryLi>
          );
        })}
      </StyledCategoryList>
    </StyledCategoryColumn>
  );
}

export default CategoryColumn;
