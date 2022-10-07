import React from "react";
import styled from "styled-components";
import EachToyProjects from "./eachToyProjects/EachToyProjects";
import * as S from "./commonSC";

const ToyProjects = ({ toyProjects }) => {
  return (
    <ToyProjectsPage ref={toyProjects}>
      <S.HeaderBox>
        <S.Header>TOY PROJECTS</S.Header>
      </S.HeaderBox>
      <ToyProjectsBox>
        <EachToyProjects />
      </ToyProjectsBox>
    </ToyProjectsPage>
  );
};

export default ToyProjects;

const ToyProjectsPage = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100vw;
  height: 100vh;
  max-width: 100%;
`;

const ToyProjectsBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 90%;
  height: 80%;
  //background-color: green;
`;
