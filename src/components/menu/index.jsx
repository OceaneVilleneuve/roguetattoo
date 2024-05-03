import React, { useState, useEffect, useRef } from "react";
import { GoDotFill } from "react-icons/go";
import styled from "styled-components";
import Item from "./item";
import { motion, useAnimation } from "framer-motion";

const MenuButton = styled.button`
  text-decoration: none;
  border: none;
  background-color: transparent;
  color: white;
  &:hover {
    cursor: pointer;
  }
`;

const IconWrapper = styled.div`
  padding-top: 7px;
  font-size: 9px;
`;
const MenuContainer = styled.div`
  display: flex;
  text-align: center;
`;

const PageNumber = styled.p`
  font-size: 8px;
  margin: 6px;
`;

const MenuWrapperNumber = styled.div`
  display: flex;
`;

const menuData = [
  { label: "à propos de moi", id: "aboutMePage" },
  { label: "processus", id: "processPage" },
  { label: "projets", id: "projectsPage" },
  { label: "contact", id: "contactPage" },
  { label: "réseaux sociaux", id: "socialsPage" },
];
const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuControls = useAnimation();

  const menuRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuRef]);

  useEffect(() => {
    if (isMenuOpen) {
      menuControls.start("visible");
    } else {
      menuControls.start("hidden");
    }
  }, [isMenuOpen, menuControls]);

  return (
    <MenuContainer>
      <IconWrapper>
        <GoDotFill />
      </IconWrapper>
      <MenuButton
        ref={menuRef}
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
        }}
      >
        menu
      </MenuButton>
      <motion.div
        variants={{
          hidden: { x: 75, opacity: 0, pointerEvents: "none" }, // Non cliquable initialement
          visible: { x: 0, opacity: 1, pointerEvents: "auto" }, // Cliquable lorsque révélé
        }}
        initial="hidden"
        animate={menuControls}
        transition={{
          duration: 0.5,
        }}
        style={{
          position: "absolute",
          top: "52px",
          textAlign: "justify",
          paddingLeft: "10px",
        }}
      >
        {menuData.map((item, index) => (
          <MenuWrapperNumber key={item.id}>
            <Item id={item.id} label={item.label} />
            <PageNumber>0{index + 1}</PageNumber>
          </MenuWrapperNumber>
        ))}
      </motion.div>
    </MenuContainer>
  );
};

export default Menu;
