import React from "react";
import styled from "styled-components";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { FaGitSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaSass } from "react-icons/fa";

const SkillsIcon = () => {
  return (
    <>
      <IconWrapper>
        <ReactIcon />
        <TextOfIcon>React</TextOfIcon>
      </IconWrapper>

      <IconWrapper>
        <JSIcon />
        <TextOfIcon>JavaScript</TextOfIcon>
      </IconWrapper>
      <IconWrapper>
        <GitIcon />
        <TextOfIcon>Git</TextOfIcon>
      </IconWrapper>
      <IconWrapper>
        <HtmlIcon />
        <TextOfIcon>HTML</TextOfIcon>
      </IconWrapper>
      <IconWrapper>
        <CssIcon />
        <TextOfIcon>CSS</TextOfIcon>
      </IconWrapper>
      <IconWrapper>
        <SassIcon />
        <TextOfIcon>Sass</TextOfIcon>
      </IconWrapper>
    </>
  );
};

export default SkillsIcon;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 10%;
  height: 30%;
`;

const HtmlIcon = styled(SiHtml5)`
  font-size: 100px;
  color: #ff5733;
`;

const TextOfIcon = styled.span`
  font-size: 20px;
`;
const CssIcon = styled(SiCss3)`
  font-size: 100px;
  color: #0a73b8;
`;
const JSIcon = styled(SiJavascript)`
  font-size: 100px;
  color: #f7df1e;
  border-radius: 10px;
`;
const GitIcon = styled(FaGitSquare)`
  font-size: 110px;
`;
const ReactIcon = styled(FaReact)`
  font-size: 100px;
  color: #61dbfd;
`;
const SassIcon = styled(FaSass)`
  font-size: 100px;
  color: hotpink;
`;
