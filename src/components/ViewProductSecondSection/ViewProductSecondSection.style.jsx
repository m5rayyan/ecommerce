import styled from "styled-components";

export const StyledViewProductSecondSection = styled.section`
  margin-bottom: 20px;
`;
export const StyledViewProductSecondContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 280px;
  gap: 20px;
`;
export const StyledYouMayLikeSide = styled.div`
  background: #ffffff;
  border: 1px solid #e3e8ee;
  border-radius: 6px;
  padding: 20px 22px 36px 16px;
  height: fit-content;
`;
export const StyledProductBox = styled.div`
  display: grid;
  gap: 16px;
`;

export const StyledImgBox = styled.div`
  width: 80px;
  height: 80px;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;
export const StyledMayLikeTitle = styled.h2`
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #1c1c1c;
  margin-bottom: 14px;
`;
export const StyledProductName = styled.h3`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.2px;
  color: #1c1c1c;
`;
export const StyledPriceRange = styled(StyledProductName)`
  color: #8b96a5;
`;

export const StyledAboutProductSide = styled.div`
  background: #ffffff;
  border: 1px solid #e3e8ee;
  box-shadow: 0px 1px 3px rgba(56, 56, 56, 0.1);
  border-radius: 6px;
  height: fit-content;
`;
export const StyledPillsUl = styled.ul`
  height: 48.8px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e3e8ee;
  padding-left: 8px;
  gap: 2px;
`;

export const StyledPillsLi = styled.li`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #8b96a5;
  padding: 16px 10px 13px;
  cursor: pointer;
  transition: all 0.1s;
  &:where(:hover, .active) {
    color: #0d6efd;
    border-bottom: 2px solid #0d6efd;
  }
`;
export const StyledDescription = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.2px;
  color: #505050;
  max-width: 798px;
`;
export const StyledPillsBody = styled.div`
  padding: 18px 20px 29px;
`;
export const StyedDescriptionTable = styled.div`
  width: 567px;
  border: 1px solid #e0e7e9;
  margin-top: 23px;
`;
export const StyledDescRow = styled.div`
  display: grid;
  grid-template-columns: 204px 1fr;
  border-bottom: 1px solid #e0e7e9;
`;
export const StyledDescType = styled.p`
  padding: 10px 10px 7px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #505050;
  background: #eff2f4;
`;
export const StyledDescInfo = styled(StyledDescType)`
  line-height: 24px;
  letter-spacing: -0.2px;
  color: #505050;
  background: #fff;
`;
export const StyledExtraInfoContent = styled.div`
  margin-top: 26px;
`;
export const StyledExtraInfoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  &:not(:last-of-type) {
    margin-bottom: 10px;
  }
`;

export const StyledYouMayLikeProduct = styled.a.attrs((props) => ({
  href: props.Href,
}))`
  display: grid;
  grid-template-columns: 80px 1fr;
  align-items: center;
  gap: 11px;
`;
