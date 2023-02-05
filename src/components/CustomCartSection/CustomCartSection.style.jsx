import styled from "styled-components";

export const StyledCustomCartSection = styled.section`
  margin-bottom: 30px;
`;
export const StyledCustomCartContent = styled.div`
  display: flex;
  gap: 50px;
`;
export const StyledCustomBox = styled.div`
  display: grid;
  grid-template-columns: 48px 200px;
  gap: 10px;
`;
export const StyledCustomImgBox = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: #e3e8ee;
`;
export const StyledCustomBoxInfo = styled.div`
  display: grid;
`;
export const StyledCustomBoxTitle = styled.h3`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.2px;
  color: #1c1c1c;
`;
export const StyledCustomBoxText = styled(StyledCustomBoxTitle)`
  color: #a9acb0;
`;
