import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import DongTracker from "./eachProjects/DongTracker";
import DongTrackerVideo from "./eachProjects/DongTrackerVideo";
import Tamna from "./eachProjects/Tamna";
import WatchaClassic from "./eachProjects/WatchaClassic";
import "./slick.scss";
import "./slick-theme.scss";
import TamnaVideo from "./eachProjects/TamnaVideo";
import WatchaClassicVideo from "./eachProjects/WatchaClassicVideo";

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
        <DongTrackerVideo />
        <Tamna />
        <TamnaVideo />
        <WatchaClassic />
        <WatchaClassicVideo />
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
