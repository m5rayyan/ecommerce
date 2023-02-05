import React from "react";
import {
  StyledSearchTitle,
  StyledSearchTitleBox,
  StyledSearchTitleIcon,
  StyledSeeAllLink,
} from "./AsideSearchFilter.style";

import dropDown from "../../assets/Images/Icons/dropDown.svg";

function FilterSearchByCheck(props) {
  return (
    <div className="FilterSearchByCheck">
      <StyledSearchTitleBox className="StyledSearchTitleBox">
        <StyledSearchTitle>{props.searchTitle}</StyledSearchTitle>
        <StyledSearchTitleIcon src={dropDown} alt="Down Icon" />
      </StyledSearchTitleBox>
      <ul>
        {props.checkToSearch}
        <StyledSeeAllLink href={props.seeAllLink}>See all</StyledSeeAllLink>
      </ul>
    </div>
  );
}

export default FilterSearchByCheck;
