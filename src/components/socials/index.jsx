import React from "react";
import styled from "styled-components";
import Logo from "../../assets/IMG_3077.PNG";
import { useMediaQuery } from "react-responsive";
// import colors from '../../utils/style/colors';

const Title = styled.h2`
  font-size: 30px;
`;
const SocialLink = styled.a`
  text-decoration: none;
  font-family: "Ade Display", serif;
  color: white;
  &:hover {
    text-shadow: 2px 2px 10px #fff;

    filter: dropshadow(color=#fff, offx=2, offy=2);
  }
`;

const Socials = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  // const location = useLocation();

  return (
    <div
      id="socialsPage"
      style={{
        height: isMobile ? "80vh" : "100vh",
        marginTop: isMobile ? "3rem" : "20rem",
        textAlign: "center",
      }}
    >
      <div
        style={{
          paddingBottom: "4rem",
        }}
      >
        <Title>
          RETROUVE MOI
          <br />
          SUR MES RESEAUX SOCIAUX
        </Title>
        <div>
          <img
            src={Logo}
            alt="logo"
            style={{
              paddingTop: "3rem",
              height: isMobile ? "10rem" : "20rem",
            }}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          color: "black",
        }}
      >
        .{/* API INSTAGRAM POUR RÉCUPERER LES REELS */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: "25px",
          }}
        >
          <SocialLink
            style={{
              paddingBottom: "4rem",
            }}
            href="https://www.instagram.com/countess_rogue/"
          >
            INSTAGRAM
          </SocialLink>
          <SocialLink href="https://www.tiktok.com/@countess_rogue?_t=8m113AW3SaH&_r=1">
            TIK TOK
          </SocialLink>
        </div>
        <div
          style={{
            color: "black",
          }}
        >
          .{/* API INSTAGRAM POUR RECUP LES RÉELS */}
        </div>
      </div>
    </div>
  );
};

export default Socials;
