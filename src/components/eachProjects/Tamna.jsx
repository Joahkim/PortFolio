import React from "react";
import styled from "styled-components";
import TamnaLogo from "../../assets/TamnaLogo.png";
import navbar from "../../assets/navbar.gif";
import kakao from "../../assets/kakao.gif";

const Tamna = () => {
  return (
    <TamnaMainBox>
      <Header>
        <Logo />
        <Details>제주도 여행객을 위한 제주 숙박 매칭 서비스</Details>
      </Header>
      <MainContents>
        <PictureBox>
          <MainPicture />
          <MainPictureKakao />
        </PictureBox>
        <MainDescription>
          React를 기반으로 Airbnb 웹 페이지를 참고한 프로젝트입니다.
          <br />
          공식 문서를 참고하여 카카오톡 소셜 로그인을 구현했습니다.
          <br />
          Modal 라이브러리를 사용하지 않고 Navigation Bar를 구현했습니다.
          <br />
          <ProjectLink
            href="https://github.com/Joahkim/TamnaBnB.git"
            target="_blank"
          >
            코드 보기
          </ProjectLink>
        </MainDescription>
      </MainContents>
    </TamnaMainBox>
  );
};

export default Tamna;
const TamnaMainBox = styled.section`
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
  background-image: url(${TamnaLogo});
  background-size: contain;
  background-repeat: no-repeat;
  width: 200px;
  height: 50px;
  margin: 0 10% 0 5%;
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

const PictureBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainPicture = styled.div`
  background-image: url(${navbar});
  background-size: contain;
  background-repeat: no-repeat;
  width: 500px;
  height: 180px;
`;
const MainPictureKakao = styled(MainPicture)`
  background-image: url(${kakao});
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
