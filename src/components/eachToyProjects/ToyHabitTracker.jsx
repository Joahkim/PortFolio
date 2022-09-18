import React from "react";
import styled from "styled-components";
import habitTracker from "../../assets/habitTracker.gif";

const ToyHabitTracker = () => {
  return (
    <ToyHabitTrackerBox>
      <ToyTitle>Habit Tracker</ToyTitle>
      <GifWrapper>
        <ToyGif />
      </GifWrapper>
      <ToyDescription>
        React Class Component, Function Component <br />
        공부를 위한 Todo List
      </ToyDescription>
      <ToyCode
        href="https://github.com/Joahkim/Habit-Tracker.git"
        target="_blank"
      >
        코드 보기
      </ToyCode>
    </ToyHabitTrackerBox>
  );
};

export default ToyHabitTracker;

const ToyHabitTrackerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 30%;
  height: 90%;
  border-radius: 13px;
  background-color: #e7f7fd;
  transition: 0.3s;
  &:hover {
    transform: translateY(-20px);
    transition: 0.3s;
  }
`;
const ToyTitle = styled.h3``;

const GifWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 95%;
  height: 50%;
  background-color: #fafafa;
  border-radius: 15px;
`;

const ToyGif = styled.div`
  background-image: url(${habitTracker});
  background-size: contain;
  background-repeat: no-repeat;
  width: 50%;
  height: 70%;
`;

const ToyDescription = styled.p``;
const ToyCode = styled.a`
  text-decoration: none;
  color: black;
  font-weight: bold;
`;
