import React from "react";
import styled from "styled-components";
import Form from "./form";
import { useMediaQuery } from "react-responsive";
import Logocontact from "../../assets/logocontact.PNG";

const PageContact = styled.div`
  justify-content: space-between;
`;

const Logo = styled.img`

`;

const Description = styled.p`
  font-family: "Bakervville";
  margin-bottom: 6em;
  margin-top: -1em;
`;

const PersonnalInfo = styled.div`
  font-family: "Bakervville";
  font-size: 12px;
  margin-top: 3em;
  position: relative;
`;

function Contact() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div
      id="contactPage"
      style={{
        paddingTop: isMobile ? null : "13em",
        display: isMobile ? "flex" : null,
        flexDirection: isMobile ? "column" : null,
        minHeight: isMobile ? "65vh" : "80vh",
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
          CONTACTE MOI
        </h1>
        <Description
          style={{
            marginLeft: isMobile ? null : "10em",
            textAlign: isMobile ? "center" : null,
            fontSize: isMobile ? "13px" : "10px",
          }}
        >
          Je suis disponible pour repondre a tes demandes de projet.
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
            marginRight: isMobile ? null : "8rem",
            marginLeft: isMobile ? "5em" : null,
          }}
        >
          <Logo
            style={{
            display: isMobile ? "none" : "true",
            height: "330px",
          }}
          src={Logocontact}
          alt="Rogue"
          >
          </Logo>
        </PersonnalInfo>
      </PageContact>
    </div>
  );
}

export default Contact;
