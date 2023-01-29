import styled from "styled-components";

export const StyledRecommendedItemsSection = styled.section`
  margin-top: 30px;
`;
export const StyledRecommendedItemsContent = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
`;

export const StyledRecommendedItemImgBox = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
`;
export const StyledRecommendedItemImg = styled.img`
  object-fit: contain;
  max-width: 100%;
`;
export const StyledRecommendedItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 6px;
  padding-right: 45px;
  gap: 6px;
`;
export const StyledProductPrice = styled.p`
  font-weight: 500;
  font-size: 16px;
  color: #1c1c1c;
`;
export const StyledRecommendedItem = styled.a.attrs((props) => ({
  href: props.href,
}))`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  padding: 10px;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.05);
  }
`;
