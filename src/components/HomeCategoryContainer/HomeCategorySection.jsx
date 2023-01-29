import React from "react";
import {
  CategoryList,
  StyledHomeCategorySection,
  CategoryInfo,
  CategoryTitle,
  StyledCategorySectionBg,
} from "./HomeCategorySection.style";
import { WightButton } from "../global/Button/Button.style";

function HomeCategorySection(props) {
  return (
    <StyledHomeCategorySection>
      <CategoryList>
        <CategoryInfo href="#">
          <StyledCategorySectionBg src={props.src} alt={props.title} />
          <CategoryTitle>{props.title}</CategoryTitle>
          <WightButton>Source new</WightButton>
        </CategoryInfo>
        {props.CategoryType}
      </CategoryList>
    </StyledHomeCategorySection>
  );
}

export default HomeCategorySection;
