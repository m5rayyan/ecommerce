import React from "react";
import {
  StyledSearchTitle,
  StyledSearchTitleBox,
  StyledSearchTitleIcon,
  StyledLabel,
  StyledFilterLi,
  StyledCheckBox,
  StyledCheckBoxContainer,
} from "./AsideSearchFilter.style";
import dropDown from "../../assets/Images/Icons/dropDown.svg";
import fiveStars from "../../assets/Images/Icons/fiveStars.svg";
import fourStars from "../../assets/Images/Icons/fourStars.svg";
import threeStars from "../../assets/Images/Icons/threeStars.svg";
import twoStars from "../../assets/Images/Icons/twoStars.svg";

function Ratings() {
  return (
    <div className="df">
      <StyledSearchTitleBox className="StyledSearchTitleBox">
        <StyledSearchTitle>Ratings</StyledSearchTitle>
        <StyledSearchTitleIcon src={dropDown} alt="Down Icon" />
      </StyledSearchTitleBox>
      <ul>
        <StyledFilterLi>
          <StyledLabel htmlFor="fiveStars">
            <StyledCheckBoxContainer>
              <StyledCheckBox type="checkbox" id="fiveStars" name="ratings" />
            </StyledCheckBoxContainer>
            <img src={fiveStars} alt="fiveStars" />
          </StyledLabel>
        </StyledFilterLi>

        <StyledFilterLi>
          <StyledLabel htmlFor="fourStars">
            <StyledCheckBoxContainer>
              <StyledCheckBox type="checkbox" id="fourStars" name="ratings" />
            </StyledCheckBoxContainer>
            <img src={fourStars} alt="fourStars" />
          </StyledLabel>
        </StyledFilterLi>

        <StyledFilterLi>
          <StyledLabel htmlFor="threeStars">
            <StyledCheckBoxContainer>
              <StyledCheckBox type="checkbox" id="threeStars" name="ratings" />
            </StyledCheckBoxContainer>
            <img src={threeStars} alt="threeStars" />
          </StyledLabel>
        </StyledFilterLi>

        <StyledFilterLi>
          <StyledLabel htmlFor="twoStars">
            <StyledCheckBoxContainer>
              <StyledCheckBox type="checkbox" id="twoStars" name="ratings" />
            </StyledCheckBoxContainer>
            <img src={twoStars} alt="twoStars" />
          </StyledLabel>
        </StyledFilterLi>
      </ul>
    </div>
  );
}

export default Ratings;
