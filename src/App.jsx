import React, { useRef } from "react";
import Introduction from "./components/Introduction";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ToyProjects from "./components/ToyProjects";
import Footer from "./Footer";
import Nav from "./Nav";
import "./App.css";

function App() {
  const aboutMe = useRef(null);
  const skills = useRef(null);
  const projects = useRef(null);
  const toyProjects = useRef(null);
  const contacts = useRef(null);

  return (
    <div className="App">
      <Nav
        aboutMe={aboutMe}
        skills={skills}
        projects={projects}
        toyProjects={toyProjects}
        contacts={contacts}
      />
      <Introduction />
      <AboutMe aboutMe={aboutMe} />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <ToyProjects toyProjects={toyProjects} />
      <Footer contacts={contacts} />
    </div>
  );
}

export default App;

// 블로그 작성
// 1. 스크롤 내렸을 때 nav 나타나기
// 2. 글씨체 적용하기
// 3. 스타일드 컴포넌트 다른 요소에 같은 스타일링 적용하기
// 4. 스크롤 이벤트 각각 요소로 이동하기
// 5. 라이브러리 다운 받은거 그 슬라이드 어떻게 사용하는지 정리하기
// 6. 리팩토링하기 특히 스타일링
