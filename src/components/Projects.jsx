import React from "react";
import styled from "styled-components";
import ProjectSlide from "./ProjectSlide";
import * as S from "./commonSC";

const Projects = ({ projects }) => {
  return (
    <ProjectsPage ref={projects}>
      <S.HeaderBox>
        <S.Header>PROJECTS</S.Header>
      </S.HeaderBox>
      <ProjectsBox>
        <ProjectSlide />
      </ProjectsBox>
    </ProjectsPage>
  );
};

export default Projects;

const ProjectsPage = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  background-color: #e7f7fd;
`;

const ProjectsBox = styled.div`
  width: 90%;
  height: 80%;
  //background-color: blue;
`;
