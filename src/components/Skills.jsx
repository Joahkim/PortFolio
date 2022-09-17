import React from "react";
import styled from "styled-components";
import * as S from "./commonSC";
import SkillsIcon from "./SkillsIcon";

const Skills = ({ skills }) => {
  return (
    <SkillsPage ref={skills}>
      <S.HeaderBox>
        <S.Header>SKILLS</S.Header>
      </S.HeaderBox>
      <IconBox>
        <SkillsIcon />
      </IconBox>
    </SkillsPage>
  );
};

export default Skills;

const SkillsPage = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  //background-color: yellowgreen;
`;
const IconBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 80%;
  height: 80%;
  flex-wrap: wrap;
  //background-color: white;
`;
