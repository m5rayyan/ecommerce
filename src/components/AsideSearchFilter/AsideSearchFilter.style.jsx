import styled from "styled-components";

export const StyledSearchTitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  border-top: 1px solid #e3e8ee;
  padding: 14px 0;
`;
export const StyledAsideCategoryList = styled.div``;
export const StyledSearchTitle = styled.h3`
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #1c1c1c;
`;
export const StyledSearchTitleIcon = styled.img`
  transform: rotate(180deg);
`;
export const StyledCategorySearchLink = styled.a`
  display: block;
  line-height: 19px;
  color: #505050;
`;
export const StyledFilterLi = styled.li`
  margin-bottom: 10px;
`;
export const StyledSeeAllLink = styled.a`
  display: block;
  line-height: 19px;
  color: #0d6efd;
  margin-bottom: 28px;
`;
export const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 13px;
  cursor: pointer;
`;
export const StyledCheckBoxContainer = styled.div`
  display: flex;
  overflow: hidden;
  border-radius: 5px;
`;
export const StyledCheckBox = styled.input.attrs({ type: "checkbox" })`
  width: 20px;
  aspect-ratio: 1;
  border: 2px solid #bdbdbd;
  border-radius: 5px;
  cursor: pointer;
  -moz-appearance: none;
  -webkit-appearance: none;
  -o-appearance: none;
  &:checked {
    -moz-appearance: auto;
    -webkit-appearance: auto;
    -o-appearance: auto;
    accent-color: #0d6efd;
  }
`;
export const StyledRadioInput = styled.input.attrs({ type: "radio" })`
  width: 20px;
  aspect-ratio: 1;
  border: 2px solid #bdbdbd;
  border-radius: 50%;
  cursor: pointer;
  -moz-appearance: none;
  -webkit-appearance: none;
  -o-appearance: none;
  &:checked {
    -moz-appearance: auto;
    -webkit-appearance: auto;
    -o-appearance: auto;
    accent-color: #0d6efd;
  }
`;
