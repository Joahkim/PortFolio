import React from "react";
import styled from "styled-components";
import introduction from "../../assets/introduction.gif";
import habitTracker from "../../assets/habitTracker.gif";
import starbucks from "../../assets/starbucks.gif";
import tube from "../../assets/tube.gif";

const PROJECT_DETAILS = [
  {
    id: "AboutMe",
    toyTitle: "About Me",
    toyGif: introduction,
    toyDescription: "바닐라 자바스크립트로 구현한 자기소개 페이지",
    codeHref: "https://github.com/Joahkim/AboutMe.git",
    pageHref: "https://joahkim.github.io/AboutMe/",
  },
  {
    id: "HabitTracker",
    toyTitle: "Habit Tracker",
    toyGif: habitTracker,
    toyDescription:
      "Class Components, Function Components 공부를 위한 Todo List",
    codeHref: "https://github.com/Joahkim/Habit-Tracker.git",
  },
  {
    id: "Starbucks",
    toyTitle: "Starbucks",
    toyGif: starbucks,
    toyDescription: "Starbucks Toy Project",
    codeHref: "https://github.com/Joahkim/starbucks.git",
    pageHref: "https://joahkim.github.io/starbucks/",
  },
  {
    id: "Youtube",
    toyTitle: "My Youtube",
    toyGif: tube,
    toyDescription: "Youtube API를 활용한 나만의 유튜브",
    codeHref: "https://github.com/Joahkim/My-Youtube.git",
    pageHref: "https://joahkim.github.io/My-Youtube/",
  },
];

const ToyAboutMe = () => {
  return PROJECT_DETAILS.map((detail) => (
    <ToyAboutMeBox key={detail.id}>
      <ToyTitle>{detail.title}</ToyTitle>
      <GifWrapper>
        <ToyGif src={detail.toyGif} alt="프로젝트" />
      </GifWrapper>
      <ToyDescription>{detail.toyDescription}</ToyDescription>
      <ToyCode href={detail.codeHref} target="_blank">
        코드 보기
      </ToyCode>
      <ToyCode href={detail.pageHref} target="_blank">
        페이지 구경하기
      </ToyCode>
    </ToyAboutMeBox>
  ));
};

export default ToyAboutMe;

const ToyAboutMeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 23%;
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

const ToyGif = styled.img`
  width: 90%;
  height: 55%;
`;

const ToyDescription = styled.p`
  width: 55%;
  height: auto;
`;
const ToyCode = styled.a`
  text-decoration: none;
  color: black;
  font-weight: bold;
`;
