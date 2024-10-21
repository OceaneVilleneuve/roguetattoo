import React from "react";
import styled from "styled-components";
import Form from "./form";
// import HeartPicture from "../../assets/pngegg.png";
import { useMediaQuery } from "react-responsive";

const PageContact = styled.div`
  justify-content: space-between;
`;

const Logo = styled.div`
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

function Contact() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div
      id="contactPage"
      style={{
        marginTop: isMobile ? null : "9em",
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
            marginLeft: isMobile ? "66px" : "10em",
          }}
        >
          Je suis disponible pour répondre à tes demandes de projet.
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
          <Logo>
          <span
            style={{
                fontFamily: "Familia Herlequin",
                fontSize: "180px",
                display: isMobile ? "none" : "true",
              }}
            >
              COUNTESS
            </span>
            <br/>
            <span
              style={{
                fontFamily: "Metal Vengeance",
                fontWeight: "lighter",
                fontSize: "70px",
                paddingLeft: "3rem",
                display: isMobile ? "none" : "true",
              }}
            >
            ROGUE
          </span>
          </Logo>
        </PersonnalInfo>
      </PageContact>
    </div>
  );
}

export default Contact;
