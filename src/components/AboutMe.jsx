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
          <b>안녕하십니까!</b>
          <br />
          "밝고 쾌활한 성격으로 긍정적인 에너지를 공유하는" 프론트엔드 개발자
          김은경입니다.
          <br /> 이화여자대학교에서 체육학을 전공했으며 교환학생, 미국에서의
          인턴, 캐나다 영주권 취득 등의 다양한 경험이 있습니다. 항상 새로운
          도전을 통해 성취감을 느낍니다.
          <br />
          <br />
          이전 직무는 마케터 업무를 하며 동료 개발자의 컴퓨터 작은 글씨들이 웹
          페이지로
          <br /> 만들어진다는 사실에 흥미가 생겨 조금씩 코딩을 시작했습니다.
          도전 정신과 목표 의식이 강한 제게 항상 어려움과 새로움을 던져주는
          프로그래밍을 통해 성장한 저를 발견할 수 있었고 개발자로 직무 전환을
          결심한 계기가 되었습니다.
          <br />
          <br />
          <b>
            앞으로의 목표는 사용자와 소통하며 <br />
            서비스의 가치를 온전히 전달하는 개발자가 되는 것입니다!
          </b>
          <br />
          <br />
          TMI : #배드민턴 #수영 #등산 #골프 #자전거 #즐거운 대화 #커피
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
  justify-content: space-around;
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  background-color: #e7f7fd;
`;

const ContextBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  height: 80%;
  //background-color: yellow;
`;

const MyPhoto = styled.div`
  background-image: url(${profile});
  width: 40%;
  height: 90%;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 10px;
`;

const MyIntroduction = styled.p`
  margin-left: 10px;
  font-size: 16px;
  max-width: 56%;
  line-height: 2;
  text-align: start;
  //background: red;
`;
