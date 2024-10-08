import React from "react";
import styled from "styled-components";
import Logo from "../../assets/IMG_0751-removebg-preview.png";
// import styled from 'styled-components';
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
  // const isMobile = useMediaQuery({ maxWidth: 767 });
  // const location = useLocation();

  return (
    <div
      id="socialsPage"
      style={{
        height: "100vh",
        marginTop: "20rem",
        textAlign: "center",
      }}
    >
      <div
        style={{
          paddingBottom: "8rem",
        }}
      >
        <Title>
          RETROUVE MOI
          <br />
          <br />
          SUR MES RESEAUX SOCIAUX
        </Title>
        <div>
          <img
            src={Logo}
            alt="logo"
            style={{
              paddingTop: "6rem",
            }}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        api
        {/* API INSTAGRAM POUR RÉCUPERER LES REELS */}
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
        <div>
          api
          {/* API INSTAGRAM POUR RECUP LES RÉELS */}
        </div>
      </div>
    </div>
  );
};

export default Socials;
