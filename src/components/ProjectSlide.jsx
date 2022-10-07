import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import DongTracker from "./eachProjects/DongTracker";
import ProjectsVideo from "./eachProjects/ProjectsVideo";
import Tamna from "./eachProjects/Tamna";
import WatchaClassic from "./eachProjects/WatchaClassic";
import "./slick.scss";
import "./slick-theme.scss";
//import TamnaVideo from "./eachProjects/TamnaVideo";
//import WatchaClassicVideo from "./eachProjects/WatchaClassicVideo";

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
        <ProjectsVideo links={VIDEO_LINKS[0].src} />
        <Tamna />
        <ProjectsVideo links={VIDEO_LINKS[1].src} />
        <WatchaClassic />
        <ProjectsVideo links={VIDEO_LINKS[2].src} />
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

const VIDEO_LINKS = [
  {
    id: "Dongtracker",
    src: "https://www.youtube.com/embed/VTUndrwlGDY",
  },
  {
    id: "Tamna",
    src: "https://www.youtube.com/embed/KrNgg5SGiA4",
  },
  {
    id: "watcha",
    src: "https://www.youtube.com/embed/6tvXTtYyX_I",
  },
];
