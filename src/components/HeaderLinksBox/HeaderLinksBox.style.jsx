import styled from "styled-components";

export const HeaderLinksBoxStyled = styled.ul`
  display: flex;
  align-items: center;
  gap: 28px;
`;
export const HeaderLinkStyled = styled.a.attrs((props) => ({
  href: props.Href,
}))`
  font-weight: 500;
  font-size: 16px;
  color: #1c1c1c;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
`;
