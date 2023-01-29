import styled from "styled-components";

export const SearchInput = styled.input.attrs({
  type: "search",
  placeholder: "Search",
})`
  border: none;
  outline: none;
  height: 100%;
  padding-left: 10px;
  &::placeholder {
    font-weight: 400;
    font-size: 16px;
    color: #8b96a5;
  }
`;

export const SearchBoxContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 154px 100px;
  width: 665px;
  align-items: center;
  border: 2px solid #0d6efd;
  border-radius: 6px;
  overflow: hidden;
`;

export const SearchCategories = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 9px;
  border-left: 1px solid #0d6efd;
  height: 100%;
  font-weight: 400;
  font-size: 16px;
  color: #1c1c1c;
`;
