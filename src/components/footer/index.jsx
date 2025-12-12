import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

const FooterContainer = styled.div`
  padding-bottom: 2em;
`;
const FooterInformation = styled.p`
  color: #fff;
  font-family: "Bakervville";
  font-size: 10px;
  display: flex;
  justify-content: center;
`;

const Name = styled.span`
  color: #70e000;
  font-family: "Metal Vengeance";
`;

const Hidden = styled.span`
  visibility: hidden;
`;

const LinkDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const Footer = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <FooterContainer
      style={{
        paddingTop: isMobile ? "1.3rem" : "0rem",
      }}
    >
      <FooterInformation>
        2024 - Développement et design par <Hidden>..</Hidden>{" "}
        <Name>ROGUE</Name>
      </FooterInformation>
      <LinkDiv>
        <Link
          style={{
            textDecoration: "none",
            color: "inherit",
            paddingRight: "1rem",
          }}
          to="/cgv"
          onClick={() => {
            window.scrollTo(0, 0); // scroll vers le haut au moment du clic
          }}
        >
          CGV
        </Link>
        |
        <Link
          style={{
            textDecoration: "none",
            color: "inherit",
            paddingLeft: "1rem",
          }}
          to="/privacy"
          onClick={() => {
            window.scrollTo(0, 0); // scroll vers le haut au moment du clic
          }}
        >
          CONFIDENTIALITÉ
        </Link>
      </LinkDiv>
    </FooterContainer>
  );
};

export default Footer;
