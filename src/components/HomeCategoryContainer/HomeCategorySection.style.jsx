import styled from "styled-components";

export const StyledHomeCategorySection = styled.section`
  margin-top: 20px;
`;

export const CategoryList = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  margin-top: 20px;
  border-bottom: none;
  overflow: hidden;
`;

export const CategoryTitle = styled.h2`
  font-weight: 600;
  font-size: 20px;
  letter-spacing: -0.2px;
  color: #1c1c1c;
  width: 154px;
  margin-bottom: 18px;
`;
export const StyledProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background-color: #fff;
`;
export const StyledCategorySectionBg = styled.img`
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  position: absolute;
  z-index: -1;
  inset: 0;
  object-fit: cover;
  transition: all 1s;
`;

export const StyledFromPrice = styled.p`
  display: grid;
  font-weight: 400;
  font-size: 13px;
  margin-top: 9px;
  color: #8b96a5;
`;

export const StyledProductImg = styled.img`
  width: 82px;
  height: 82px;
  object-fit: contain;
`;
export const StyledProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 2px 18px 16px;
  border-left: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
  img {
    transition: all 0.3s;
  }
  &:hover {
    img {
      transform: scale(1.05);
    }
  }
`;

export const CategoryInfo = styled.a.attrs((props) => ({
  href: props.href,
}))`
  position: relative;
  padding: 20px;
  border-bottom: 1px solid #e0e0e0;
  &:hover ${StyledCategorySectionBg} {
    transform: scale(1.3) rotate(15deg);
  }
`;
