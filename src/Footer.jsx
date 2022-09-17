import React from "react";
import styled from "styled-components";
import * as S from "./components/commonSC";
import background from "./assets/background.jpg";

const Footer = ({ contacts }) => {
  return (
    <ContactsBox ref={contacts}>
      <S.Header>CONTACTS</S.Header>
    </ContactsBox>
  );
};

export default Footer;

const ContactsBox = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  max-width: 100%;
  height: 30vh;
`;
