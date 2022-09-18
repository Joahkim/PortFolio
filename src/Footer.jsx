import React from "react";
import styled from "styled-components";
import * as S from "./components/commonSC";
import background from "./assets/background.jpg";

const Footer = ({ contacts }) => {
  return (
    <ContactsBox ref={contacts}>
      <S.Header>CONTACTS</S.Header>
      <ContactsWrapper>
        <EachContact href="mailto:kimek4319@gmail.com">
          kimek4319@gmail.com
        </EachContact>
        <EachContact href="https://github.com/Joahkim" target="_blank">
          GitHub
        </EachContact>
        <EachContact href="https://velog.io/@joahkim" target="_blank">
          Blog
        </EachContact>
      </ContactsWrapper>
    </ContactsBox>
  );
};

export default Footer;

const ContactsBox = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  max-width: 100%;
  height: 30vh;
`;

const ContactsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 30%;
  height: 100%;
`;

const EachContact = styled.a`
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  color: black;
`;
