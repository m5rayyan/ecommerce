import React from "react";
import { Link } from "react-router-dom";
import {
  StyledCategoryColumn,
  StyledCategoryLi,
  StyledCategoryLink,
  StyledCategoryList,
} from "./BannerSection.style";

function CategoryColumn() {
  const categoryType = [
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
        {categoryType.map((e) => {
          return (
            <StyledCategoryLi key={categoryType.indexOf(e)}>
              <Link to="/productsPage">
                <StyledCategoryLink href="#">{e}</StyledCategoryLink>
              </Link>
            </StyledCategoryLi>
          );
        })}
      </StyledCategoryList>
    </StyledCategoryColumn>
  );
}

export default CategoryColumn;
