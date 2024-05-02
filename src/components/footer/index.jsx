import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

const FooterContainer = styled.div`
  padding-bottom: 2em;
`;
const FooterInformation = styled.p`
  color: #000;
  font-family: "Mina";
  font-size: 10px;
  display: flex;
  justify-content: center;
`;

const Footer = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <FooterContainer
      style={{
        paddingTop: isMobile ? "8em" : "2em",
      }}
    >
      <FooterInformation>
        2023 - Développement et design par Rogue
      </FooterInformation>
    </FooterContainer>
  );
};

export default Footer;
