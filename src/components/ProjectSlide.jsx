import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import DongTracker from "./eachProjects/DongTracker";
import Tamna from "./eachProjects/Tamna";
import WatchClassic from "./eachProjects/WatchClassic";
import "./slick.scss";
import "./slick-theme.scss";

const ProjectSlide = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <SlideBox>
      <Slider {...settings}>
        <DongTracker />
        <Tamna />
        <WatchClassic />
      </Slider>
    </SlideBox>
  );
};

export default ProjectSlide;

const SlideBox = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  //background-color: pink;
`;
