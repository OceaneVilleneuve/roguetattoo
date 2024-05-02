import React from "react";
import styled from "styled-components";
import Form from "./form";
import HeartPicture from "../../assets/heart.png";
import { useMediaQuery } from "react-responsive";

const PageContact = styled.div`
  min-height: 80vh;
  justify-content: space-between;
`;

const SubTitle = styled.h1`
  font-family: "Ade Display", serif;
  font-size: 14px;
  margin-bottom: 2em;
`;

const Description = styled.p`
  font-family: "Mina";
  font-size: 10px;
  margin-bottom: 6em;
  margin-top: -1em;
`;

const PersonnalInfo = styled.div`
  font-family: "Mina";
  font-size: 12px;
  margin-top: 3em;
  position: relative;
`;

const LinkToSocials = styled.a`
  text-decoration: none;
  color: white;
`;
const PaddingName = styled.div`
  padding-top: 4px;
  font-family: "Ade Display", serif;
`;

const HeartWrapper = styled.img`
  position: absolute;
  transform: rotate(-25deg);
  top: -179px;
  right: -31em;
  z-index: -2;
`;

function Contact() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div
      id="contactPage"
      style={{
        marginTop: isMobile ? null : "7em",
        display: isMobile ? "flex" : null,
        flexDirection: isMobile ? "column" : null,
      }}
    >
      <div>
      <h1
        style={{
          marginLeft: isMobile ? null : "3em",
          justifyContent: isMobile ? "center" : null,
          textAlign: isMobile ? "center" : null,
        }}
      >
        CONTACTEZ MOI
      </h1>
      <Description
        style={{
          marginLeft: isMobile ? "66px" : "10em",
        }}
      >
        Je suis disponible pour répondre à vos demandes de projet.
      </Description>
      </div>
      <PageContact
        style={{
          display: isMobile ? null : "flex",
        }}
      >
        <div
          style={{
            marginLeft: isMobile ? null : "6em",
            display: "flex",
            flexDirection: isMobile ? "column" : null, // Stack items vertically on mobile
            alignItems: isMobile ? "center" : null,
          }}
        >
          <Form />
        </div>

        <PersonnalInfo
          style={{
            marginRight: isMobile ? null : "15em",
            marginLeft: isMobile ? "6em" : null,
          }}
        >
          <HeartWrapper
            src={HeartPicture}
            alt="Heart"
            style={{
              height: isMobile ? "24em" : "43em",
              top: isMobile ? "-36px" : "-179px",
              right: isMobile ? "50px" : "-385px",
            }}
          />
          <SubTitle
            style={{
              paddingTop: isMobile ? "3em" : null,
            }}
          >
            RETROUVEZ MOI SUR
          </SubTitle>
          <LinkToSocials
            href="https://www.instagram.com/countess_rogue/"
            target="_blank"
            style={{
              paddingTop: isMobile ? "3em" : null,
            }}
          >
              <PaddingName>INSTAGRAM</PaddingName>
          </LinkToSocials>
          <br />
          <LinkToSocials
            href="https://www.tiktok.com/@countess_rogue?_t=8m113AW3SaH&_r=1"
            target="_blank"
            style={{
              paddingTop: isMobile ? "3em" : null,
            }}
          >
              <PaddingName>TIKTOK</PaddingName>
          </LinkToSocials>
        </PersonnalInfo>
      </PageContact>
    </div>
  );
}

export default Contact;
