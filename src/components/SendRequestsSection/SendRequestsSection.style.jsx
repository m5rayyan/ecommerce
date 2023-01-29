import styled from "styled-components";

export const StyledSendRequestsSection = styled.section`
  margin-top: 20px;
`;
export const StyledSendRequestsContent = styled.div`
  background: #dfdfdf;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  position: relative;
  height: 420px;
  background: linear-gradient(
    94.99deg,
    #2c7cf1 7.19%,
    rgba(0, 209, 255, 0.5) 89.49%
  );
  display: flex;
  justify-content: space-between;
`;
export const StyledBackgroundImg = styled.img`
  background-blend-mode: multiply;
  opacity: 0.7;
  width: 100%;
  height: 100%;
  object-fit: cover;
  max-width: 100%;
  position: absolute;
  z-index: -1;
`;

export const StyledSendRequestsInfo = styled.div`
  padding: 40px 0 0 40px;

  color: #ffffff;
`;
export const StyledSendRequestsTitle = styled.h2`
  font-weight: 600;
  font-size: 32px;
  line-height: 39px;
  letter-spacing: -0.2px;
  max-width: 390px;
  margin-bottom: 13px;
`;
export const StyledSendRequestsSubTitle = styled.h4`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.2px;
  max-width: 390px;
`;

// Start Form Style
export const StyledSendRequestsForm = styled.form`
  background: #ffffff;
  box-shadow: 0px 1px 2px rgba(56, 56, 56, 0.25);
  border-radius: 6px;
  padding: 22px 31px 25px 20px;
  display: grid;
  gap: 20px;
  height: fit-content;
  margin-top: 30px;
  margin-right: 31px;
  h3 {
    margin: 0;
    font-size: 20px;
  }
`;
export const StyledFormInput = styled.input`
  height: 40px;
  background: #ffffff;
  border: 1px solid #e3e8ee;
  border-radius: 6px;
  padding-left: 10px;
  outline: none;
  &::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #8b96a5;
  }
`;

export const StyledFormTextArea = styled(StyledFormInput)`
  height: 73px;
  padding-top: 11px;
  resize: none;
`;
export const StyledQuantityBox = styled.div`
  display: grid;
  grid-template-columns: 206px 111px;
  gap: 8px;
`;

// End Form Style
