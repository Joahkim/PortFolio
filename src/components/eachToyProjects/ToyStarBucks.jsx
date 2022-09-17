import React from "react";
import styled from "styled-components";

const ToyStarBucks = () => {
  return <ToyStarBucksBox>toy starbucks</ToyStarBucksBox>;
};

export default ToyStarBucks;

const ToyStarBucksBox = styled.div`
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
