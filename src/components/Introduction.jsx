import React from "react";
import styled from "styled-components";
import profile_2 from "../assets/profile_2.jpg";
import background from "../assets/background.jpg";
//import * as S from "./commonSC";

const Introduction = () => {
  return (
    <IntroPage>
      <BackgroundImage>
        <HeaderBox>
          <Header>WELCOME TO EUNKYEONG'S PORTFOLIO</Header>
          <ProfilePhoto />
          <Subtitle>
            안녕하세요! 긍정적이며 소통을 좋아하는
            <br />
            <span style={{ fontWeight: "800" }}> 프론트엔드 개발자</span> 김은경
            입니다.
          </Subtitle>
        </HeaderBox>
      </BackgroundImage>
    </IntroPage>
  );
};

export default Introduction;

const IntroPage = styled.section`
  width: 100vw;
  height: 100vh;
  max-width: 100%;
`;

const BackgroundImage = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #edeafb;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  max-width: 100%;
`;

const ProfilePhoto = styled.div`
  background-image: url(${profile_2});
  background-repeat: no-repeat;
  background-size: cover;
  margin: 30px 0;
  border-radius: 50%;
  width: 300px;
  height: 300px;
`;

const HeaderBox = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  //background-color: orange;
`;

const Header = styled.h1`
  font-size: 40px;
  color: white;
`;
const Subtitle = styled.h1`
  font-size: 25px;
  color: white;
`;
