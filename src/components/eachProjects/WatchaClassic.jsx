import React from "react";
import styled from "styled-components";
import watchLogo from "../../assets/watchLogo.png";
import carousel from "../../assets/carousel.gif";
import details from "../../assets/details.gif";

const WatchaClassic = () => {
  return (
    <WatchClassicMain>
      <Header>
        <LogoBox>
          <Logo />
        </LogoBox>
        <DetailsBox>
          <Details>클래식 영화 백과사전 사이트</Details>
        </DetailsBox>
      </Header>
      <MainContents>
        <PictureBox>
          <MainPicture />
          <MainPictureCarousel />
        </PictureBox>
        <MainDescription>
          React를 기반으로 왓챠 피디아 웹 페이지를 참고한 프로젝트입니다.
          <br />
          다양한 테마의 영화 목록을 Query String을 통해 Carousel로 나타냈습니다.
          <br />
          각 영화의 목록을 클릭하면 해당 영화 상세 페이지로 이동하도록
          구현했습니다.
          <br />
          <ProjectLink
            href="https://github.com/Joahkim/Watch-Classic.git"
            target="_blank"
          >
            코드 보기
          </ProjectLink>
        </MainDescription>
      </MainContents>
    </WatchClassicMain>
  );
};

export default WatchaClassic;

const WatchClassicMain = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

const Header = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  width: 100%;
  height: 10%;
`;

const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
`;

const Logo = styled.div`
  background-image: url(${watchLogo});
  align-items: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 200px;
  height: 60px;
`;

const DetailsBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 50px;
  width: 50%;
  height: 100%;
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
  background-image: url(${details});
  background-size: contain;
  background-repeat: no-repeat;
  width: 400px;
  height: 250px;
`;
const MainPictureCarousel = styled(MainPicture)`
  background-image: url(${carousel});
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
