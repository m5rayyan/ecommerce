import styled from "styled-components";

export const MinHeaderLinksBoxStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;

export const LangAndCoinStyled = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: #1c1c1c;
`;

export const Flag = styled.img.attrs((props) => ({
  src: props.src,
  alt: "Flag",
}))`
  margin-left: 7px;
`;

export const DropDownImg = styled.img.attrs((props) => ({
  src: props.src,
  alt: "DropDownImg",
}))`
  margin-left: 8px;
`;

export const ShipToStyled = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 16px;
  color: #1c1c1c;
`;
