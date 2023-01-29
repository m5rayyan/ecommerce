import styled from "styled-components";

export const TimerStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 18px;
`;

export const TimeBox = styled.div`
  background: #606060;
  border-radius: 4px;
  width: 45px;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TimerNumber = styled.p`
  color: #ffffff;
  font-weight: 700;
  font-size: 16px;
`;
export const TimerType = styled.p`
  color: #ffffff;
  font-weight: 400;
  font-size: 12px;
  text-transform: capitalize;
`;
