import React from "react";
import styled from "styled-components";
import vanilaJS from "../../assets/vanilaJS.gif";

const ToyAboutMe = () => {
  return (
    <ToyAboutMeBox>
      <ToyTitle>About Me</ToyTitle>
      <GifWrapper>
        <ToyGif />
      </GifWrapper>
      <ToyDescription>
        바닐라 자바스크립트로 구현한 자기소개 페이지
      </ToyDescription>
      <ToyCode href="https://github.com/Joahkim/AboutMe.git" target="_blank">
        코드 보기
      </ToyCode>
      <ToyCode href="https://joahkim.github.io/AboutMe/" target="_blank">
        페이지 구경하기
      </ToyCode>
    </ToyAboutMeBox>
  );
};

export default ToyAboutMe;

const ToyAboutMeBox = styled.div`
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
  background-image: url(${vanilaJS});
  background-size: contain;
  background-repeat: no-repeat;
  width: 90%;
  height: 70%;
`;

const ToyDescription = styled.p``;
const ToyCode = styled.a`
  text-decoration: none;
  color: black;
  font-weight: bold;
`;
