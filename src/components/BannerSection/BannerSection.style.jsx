import styled from "styled-components";

export const StyledBannerSection = styled.section`
  margin-top: 20px;
`;
export const StyledBannerSectionContent = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr 200px;
  gap: 20px;
  background-color: #fff;
  border: 1px solid #e3e8ee;
  border-radius: 6px;
  padding: 20px 20px 20px 14px;
`;

// Start CategoryColumn
export const StyledCategoryColumn = styled.div``;
export const StyledCategoryList = styled.ul`
  display: grid;
  gap: 2px;
`;
export const StyledCategoryLi = styled.li`
  border-radius: 6px;
  height: 40px;
`;
export const StyledCategoryLink = styled.div`
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #505050;
  width: 100%;
  height: 100%;
  border-radius: 6px;
  padding-left: 10px;

  &:hover {
    font-weight: 500;
    color: #1c1c1c;
    background: #e5f1ff;
  }
`;

// End CategoryColumn

// Start BannerBoard
export const StyledBannerBoard = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
export const StyledBannerBg = styled.img`
  position: absolute;
  z-index: 0;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const StyledBannerInfoBox = styled.div`
  position: relative;
  margin-top: 53px;
  margin-left: 45px;
`;
export const StyledLastTrendingTitle = styled.h2`
  font-weight: 400;
  font-size: 28px;
  line-height: 34px;
  color: #1c1c1c;
`;
export const StyledBannerTitle = styled.h1`
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  color: #1c1c1c;
  margin-bottom: 17px;
`;

// End BannerBoard

// Start UserAndBenefitsColumn
export const StyledUserAndBenefitsColumn = styled.div`
  display: grid;
  gap: 10px;
`;
export const StyledUserCard = styled.div`
  background: #e3f0ff;
  border-radius: 6px;
  padding: 14px 10px 12px;
  display: grid;
  gap: 6px;
`;

export const StyledUserInfoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  margin-bottom: 8px;
`;
export const StyledGreeting = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #1c1c1c;
`;
export const StyledUserAvatarBox = styled.div`
  width: 44px;
  height: 44px;
`;
export const StyledUserImg = styled.img`
  width: 100%;
  height: 100%;
  max-width: 100%;
  object-fit: contain;
  border-radius: 50%;
`;

// End UserAndBenefitsColumn

// Start BenefitsCard
export const StyledBenefitsCard = styled.div`
  height: 95px;
  border-radius: 6px;
  padding: 16px;
  background: ${(props) => (props.BgColor ? props.BgColor : "#F38332")};
`;
export const StyledBenefitsLink = styled.a`
  display: block;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  max-width: 140px;
`;

// End BenefitsCard
