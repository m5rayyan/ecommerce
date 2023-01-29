import styled from "styled-components";

export const StyledOurExtraServicesSection = styled.section`
  margin-top: 33px;
`;

export const StyledOurExtraServicesContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

export const StyledServiceImgBox = styled.div`
  width: 100%;
  height: 135px;
  overflow: hidden;
  background: #1c1c1cc9;
`;
export const StyledServiceImg = styled.img`
  width: 100%;
  height: 100%;
  max-width: 100%;
  object-fit: cover;
`;
export const StyledServiceInfoBox = styled.div`
  position: relative;
  padding: 16px 20px 20px;
  h3 {
    max-width: 163px;
    line-height: 22px;
  }
`;
export const StyledServiceIconBox = styled.div`
  width: 55px;
  height: 55px;
  background: #d1e7ff;
  border: 2px solid #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: absolute;
  right: 21px;
  top: -26px;
`;
export const StyledServiceCard = styled.a.attrs((props) => ({
  href: props.href,
}))`
  position: relative;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  background-color: #fff;
  overflow: hidden;
  .service-img {
    transition: all 0.3s;
  }
  &:hover {
    .service-img {
      transform: scale(1.08);
    }
  }
`;
