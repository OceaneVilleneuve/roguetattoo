import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

const FooterContainer = styled.div`
  padding-bottom: 2em;
`;
const FooterInformation = styled.p`
  color: #fff;
  font-family: "Mina";
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
        paddingTop: isMobile ? "8em" : "2em",
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
        >
          CONFIDENTIALITÉ
        </Link>
      </LinkDiv>
    </FooterContainer>
  );
};

export default Footer;
