import React from "react";
import styled from "styled-components";
import dongTrackerLogo from "../../assets/dongTrackerLogo.png";
import map2 from "../../assets/map2.gif";

const DongTracker = () => {
  return (
    <DongTrackerBox>
      <Header>
        <Logo />
        <Details>
          서울시 강남구, 서초구의 동 단위 매장별 배달 및 매출 데이터 조회 서비스
        </Details>
      </Header>
      <MainContents>
        <MainPicture />
        <MainDescription>
          React를 활용하여 Naver Map에 시각화된 데이터를 나타낸 프로젝트 입니다.
          <br />
          동 단위 경계선부터 동에서 발생하는 모든 매출 데이터를 표현했습니다.
          <br />
          기획부터 배포까지 전 과정에 참여했습니다.
          <br />
          <ProjectLink
            href="https://github.com/Joahkim/DongTracker"
            target="_blank"
          >
            코드 보기
          </ProjectLink>
        </MainDescription>
      </MainContents>
    </DongTrackerBox>
  );
};

export default DongTracker;

const DongTrackerBox = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;
const Header = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 10%;
`;

const Logo = styled.div`
  background-image: url(${dongTrackerLogo});
  background-size: contain;
  background-repeat: no-repeat;
  width: 200px;
  height: 50px;
  margin: 0 10% 0 15%;
`;

const Details = styled.h1`
  font-size: 18px;
`;

const MainContents = styled.section`
  display: flex;

  justify-content: space-evenly;
  width: 100%;
  height: 100%;
`;

const MainPicture = styled.div`
  background-image: url(${map2});
  background-size: cover;
  background-repeat: no-repeat;
  width: 500px;
  height: 300px;
`;

const MainDescription = styled.p`
  line-height: 3;
`;

const ProjectLink = styled.a`
  font-size: 20px;
  font-weight: 700;
  text-decoration: none;
  color: white;
  background-color: navy;
  &:hover {
    color: navy;
    background-color: white;
  }
`;
