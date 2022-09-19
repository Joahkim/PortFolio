import React from "react";
import styled from "styled-components";
import * as S from "./components/commonSC";
import background from "./assets/background.jpg";
import { FiMail } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";
import { CgNotes } from "react-icons/cg";
import { FiPhoneCall } from "react-icons/fi";

const Footer = ({ contacts }) => {
  return (
    <ContactsBox ref={contacts}>
      <S.Header style={{ color: "#fafafa" }}>CONTACTS</S.Header>
      <ContactsWrapper>
        <EachContact href="mailto:kimek4319@gmail.com">
          <FiMail />
          kimek4319@gmail.com
        </EachContact>
        <EachContact href="https://github.com/Joahkim" target="_blank">
          <BsGithub />
          GitHub
        </EachContact>
        <EachContact href="https://velog.io/@joahkim" target="_blank">
          <CgNotes />
          Blog
        </EachContact>
        <EachContact href="tel:010-3032-4318">
          <FiPhoneCall />
          Phone
        </EachContact>
      </ContactsWrapper>
    </ContactsBox>
  );
};

export default Footer;

const ContactsBox = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  max-width: 100%;
  height: 20vh;
`;

const ContactsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 50%;
  height: 100%;
`;

const EachContact = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  color: #fafafa;
  margin-top: 20px;
`;
