import React from "react";
import styled from "styled-components";
import * as S from "./commonSC";
import profile from "../assets/profile.jpg";

const AboutMe = ({ aboutMe }) => {
  return (
    <AboutMePage ref={aboutMe}>
      <S.HeaderBox>
        <S.Header>ABOUT ME</S.Header>
      </S.HeaderBox>
      <ContextBox>
        <MyPhoto />
        <MyIntroduction>
          안냐세요 저는 김은경 이구요 어쩌구 저쩌구입니다.안냐세요 저는 김은경
          이구요 어쩌구 저쩌구입니다.안냐세요 저는 김은경 이구요 어쩌구
          저쩌구입니다.안냐세요 저는 김은경 이구요 어쩌구 저쩌구입니다.안냐세요
          저는 김은경 이구요 어쩌구 저쩌구입니다.안냐세요 저는 김은경 이구요
          어쩌구 저쩌구입니다.안냐세요 저는 김은경 이구요 어쩌구
          저쩌구입니다.안냐세요 저는 김은경 이구요 어쩌구 저쩌구입니다.
          저쩌구입니다.안냐세요 저는 김은경 이구요 어쩌구 저쩌구입니다.안냐세요
          저는 김은경 이구요 어쩌구 저쩌구입니다.안냐세요 저는 김은경 이구요
        </MyIntroduction>
      </ContextBox>
    </AboutMePage>
  );
};

export default AboutMe;

const AboutMePage = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  background-color: #e7f7fd;
`;

const ContextBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 60%;
  height: 80%;
  //background-color: yellow;
`;

const MyPhoto = styled.div`
  background-image: url(${profile});
  width: 40%;
  height: 80%;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 10px;
`;

const MyIntroduction = styled.p`
  max-width: 50%;
`;
