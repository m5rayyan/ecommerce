import React from "react";
import { TimerStyle, TimeBox, TimerNumber, TimerType } from "./Timer.style";

function Timer() {
  return (
    <TimerStyle>
      <TimeBox>
        <TimerNumber>04</TimerNumber>
        <TimerType>days</TimerType>
      </TimeBox>
      <TimeBox>
        <TimerNumber>13</TimerNumber>
        <TimerType>hour</TimerType>
      </TimeBox>
      <TimeBox>
        <TimerNumber>34</TimerNumber>
        <TimerType>min</TimerType>
      </TimeBox>
      <TimeBox>
        <TimerNumber>56</TimerNumber>
        <TimerType>sec</TimerType>
      </TimeBox>
    </TimerStyle>
  );
}

export default Timer;
