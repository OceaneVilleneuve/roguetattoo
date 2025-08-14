import React from "react";
import styled from "styled-components";
import { FaArrowUpLong } from "react-icons/fa6";
import { useMediaQuery } from "react-responsive";
import Item from "../menu/item";
import { Link } from "react-router-dom";

const HeaderContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 25px;
  position: sticky;
  top: 0px;
  z-index: 3;
`;

const HeaderBanner = styled.p`
  font-size: 16px;
  font-family: "Metal Vengeance";
  textalign: "center";
`;

const HeaderReturn = styled(Link)`
  &:hover {
    cursor: pointer;
  }
  font-family: "Midnight Flame", serif;
`;

const SimpleHeader = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <HeaderContainer>
      <HeaderReturn
        style={{
          textDecoration: "none",
          flex: "1",
          color: "inherit",
          fontSize: "12px",
        }}
        to="/"
      >
        retour au site
      </HeaderReturn>
      <HeaderBanner
        style={{
          textDecoration: "none",
          color: "inherit",
          flex: "1",
          position: "absolute",
          left: "50%",
          top: "0",
          bottom: "0",
          transform: "translateX(-50%)",
          display: "flex",
          alignItems: "center",
        }}
      >
        ROGUE
      </HeaderBanner>
      <div
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{
          width: isMobile ? null : "25%",
          textDecoration: "none",
          flex: "1",
          textAlign: "right",
        }}
      >
        <Item
          id="homePage"
          icon={FaArrowUpLong}
          style={{
            textDecoration: "none",
          }}
        />
      </div>
    </HeaderContainer>
  );
};

export default SimpleHeader;
