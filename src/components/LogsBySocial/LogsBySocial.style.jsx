import styled from "styled-components";

export const StyledLogByGoogle = styled.div`
  height: 40px;
  position: relative;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  box-shadow: 0px 1px 3px rgba(56, 56, 56, 0.1);
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  h3 {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    letter-spacing: -0.1px;
    color: #606060;
  }
`;
export const StyledLogIcon = styled.div`
  width: 22px;
  height: 22px;
  position: absolute;
  left: 11px;
  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }
`;

export const StyledLogByFacebook = styled.div`
  height: 40px;
  position: relative;
  background: #4267b2;
  box-shadow: 0px 1px 3px rgba(56, 56, 56, 0.1);
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  h3 {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    letter-spacing: -0.1px;
    color: #ffffff;
  }
`;
