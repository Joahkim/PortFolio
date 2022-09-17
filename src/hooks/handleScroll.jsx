import { useState, useEffect } from "react";

const HandleScroll = () => {
  const [show, setShow] = useState(false);

  const controlNavBar = () => {
    if (window.scrollY > 590) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavBar);
  }, []);

  const moveToTheTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop - 30,
      behavior: "smooth",
    });
  };

  return {
    show,

    moveToTheTop,
    scrollToSection,
  };
};

export default HandleScroll;
