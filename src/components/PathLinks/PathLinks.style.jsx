import styled from "styled-components";

export const StyledPathLinks = styled.div`
  padding: 20px 0;
`;
export const StyledDropDownImg = styled.img`
  transform: rotate(270deg);
  width: 10px;
`;
export const StyledPathList = styled.ul`
  display: flex;
  align-items: center;
  gap: 12px;
`;
export const StyledPathAnchor = styled.a`
  display: flex;
  align-items: baseline;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: -0.2px;
  color: #8b96a5;
  gap: 6px;
`;
export const StyledPathLi = styled.li`
  &:last-of-type ${StyledDropDownImg} {
    display: none;
  }
`;
