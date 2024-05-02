import React from "react";
import styled from "styled-components";
import { FiMoon } from "react-icons/fi";
import { IoMdMoon } from "react-icons/io";
import { FaArrowUpLong } from "react-icons/fa6";
import Menu from "../menu";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import Item from "../menu/item";

const HeaderContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 25px;
  position: sticky;
  top: 0px;
  z-index: 3;
`;

const HeaderBanner = styled.h1`
  font-size: 16px;
  font-family: 'Metal Vengeance';
`;

const WrapperFlex = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const [isFiMoonHovered, setIsFiMoonHovered] = useState(false);

  return (
    <HeaderContainer>
      <Item
        onMouseEnter={() => {
          setIsFiMoonHovered(true);
        }}
        onMouseLeave={() => {
          setIsFiMoonHovered(false);
        }}
        id="homePage"
        icon={isFiMoonHovered ? IoMdMoon : FiMoon}
        style={{
          width: isMobile ? null : "25%",
        }}
      />
      <HeaderBanner>ROGUE</HeaderBanner>
      <WrapperFlex
        style={{
          width: isMobile ? null : "25%",
          textDecoration: "none",
        }}
      >
        {isMobile ? null : <Menu />}
        <Item
          id="homePage"
          icon={FaArrowUpLong}
          style={{
            textDecoration: "none",
          }}
        />
      </WrapperFlex>
    </HeaderContainer>
  );
};

export default Header;
