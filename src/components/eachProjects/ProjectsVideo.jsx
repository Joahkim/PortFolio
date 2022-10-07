import React from "react";

const ProjectsVideo = ({ links }) => {
  return (
    <div>
      <iframe
        width="800"
        height="500"
        src={links}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen="allowfullscreen"
      />
    </div>
  );
};

export default ProjectsVideo;
