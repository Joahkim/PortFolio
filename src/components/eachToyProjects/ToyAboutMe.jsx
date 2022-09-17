import React from "react";
import styled from "styled-components";

const ToyAboutMe = () => {
  return <ToyAboutMeBox>toy about me</ToyAboutMeBox>;
};

export default ToyAboutMe;

const ToyAboutMeBox = styled.div`
  width: 30%;
  height: 90%;
  border-radius: 13px;
  background-color: #e7f7fd;
  transition: 0.3s;
  &:hover {
    transform: translateY(-20px);
    transition: 0.3s;
  }
`;
