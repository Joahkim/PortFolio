import React from "react";
import { IoIosArrowDropupCircle } from "react-icons/io";
import styled, { keyframes } from "styled-components";
import HandleScroll from "./hooks/handleScroll";

const Nav = ({ aboutMe, skills, projects, toyProjects, contacts }) => {
  const { show, moveToTheTop, scrollToSection } = HandleScroll();

  return (
    <>
      {show && (
        <>
          <Navigation>
            <Logo onClick={moveToTheTop}>
              <Eunkyeongs>Eunkyeong's</Eunkyeongs>
              <Portfolio>Portfolio</Portfolio>
            </Logo>
            <ShortCuts>
              <AboutMeBtn onClick={() => scrollToSection(aboutMe)}>
                About Me
              </AboutMeBtn>
              <SkillsBtn onClick={() => scrollToSection(skills)}>
                Skills
              </SkillsBtn>
              <ProjectsBtn onClick={() => scrollToSection(projects)}>
                Projects
              </ProjectsBtn>
              <ToyProjectsBtn onClick={() => scrollToSection(toyProjects)}>
                Toy Projects
              </ToyProjectsBtn>
              <ContactsBtn onClick={() => scrollToSection(contacts)}>
                Contacts
              </ContactsBtn>
            </ShortCuts>
          </Navigation>
          <ToTheTopIcon onClick={moveToTheTop} />
        </>
      )}
    </>
  );
};

export default Nav;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Navigation = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 8%;
  color: navy;
  background-color: #afe1f6;
  animation: ${fadeIn} 0.3s ease-in-out;
  z-index: 3;
`;
//fadeout될때도애니메이션이 적용되어야 하는데... 어떠헥 하냐
//스크롤적용하는거 블로그 작성하기
const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 3%;
  width: 10%;
  max-height: 100%;
  font-weight: 1000;
  cursor: pointer;
`;
const ShortCuts = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 70%;
  height: auto;
  font-size: 20px;
`;

const Eunkyeongs = styled.span`
  font-size: 18px;
`;

const Portfolio = styled.span`
  font-size: 15px;
`;

const AboutMeBtn = styled.div`
  cursor: pointer;
  &:hover {
    color: white;
  }
`;
const SkillsBtn = styled(AboutMeBtn)``;
const ProjectsBtn = styled(AboutMeBtn)``;
const ToyProjectsBtn = styled(AboutMeBtn)``;
const ContactsBtn = styled(AboutMeBtn)``;

const ToTheTopIcon = styled(IoIosArrowDropupCircle)`
  position: fixed;
  bottom: 30px;
  right: 20px;
  cursor: pointer;
  border-radius: 50%;
  animation: ${fadeIn} 0.3s ease-in-out;
  z-index: 3;
  font-size: 50px;
  color: #afe1f6;
`;
