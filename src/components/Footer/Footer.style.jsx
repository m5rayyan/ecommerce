import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: #fff;
`;
export const StyledFooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px 0 60px;
`;
export const StyledFooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledFooterLogoColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 17px;
`;

export const StyledSocialMediaBox = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
`;

export const StyledInfoAboutCompany = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #505050;
  max-width: 276px;
`;

export const StyledCopyRightFooter = styled.div`
  border-top: 1px solid #e3e8ee;
  background: #eff2f4;
  padding: 23px 0;
`;
export const StyledCopyRightContent = styled(StyledFooterContent)`
  padding: 0;
`;
export const StyledCopyRightText = styled(StyledInfoAboutCompany)`
  color: #606060;
`;
export const StyledFooterLang = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;
export const StyledFooterFlagBox = styled.div`
  width: 28px;
  height: 20px;
`;
export const StyledFooterDropDown = styled.img`
  filter: brightness(0.2);
  transform: rotate(180deg);
`;
export const StyledFooterFlagImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
