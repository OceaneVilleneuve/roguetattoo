import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import arrowImage from "../../assets/image-80b19b4b-21f3-4e0f-8ffe-069bf976b0f2 (1).png";
import { useMediaQuery } from "react-responsive";

const SectionContainer = styled.div`
  margin-bottom: 20px;
  padding-top: 2em;
`;

const SubTitleContainer = styled.div`
  display: flex;
  align-items: center;
  transition: color 0.3s ease;
`;

const SubTitleNumber = styled.p`
  font-size: 10px;
  margin-right: -15px;
`;

const SubTitleProcess = styled.h2`
  font-family: "Ade Display", serif;
  font-weight: lighter;
  margin-bottom: 0;
`;

const ArrowImage = styled(motion.img)`
  margin-left: 10px;
`;

const TextContainer = styled.div`
  margin-top: -1rem;
`;

const Title = ({ index, title, text, left }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SectionContainer
      key={index}
      style={{
        marginLeft: left,
      }}
    >
      <SubTitleContainer
        $index={index}
        $isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        style={{
          color: isOpen ? "#3E3D3D" : "white",
          paddingBottom: isMobile ? "1rem" : null,
        }}
      >
        <div style={{ display: "flex" }}>
          <SubTitleNumber
            style={{
              paddingTop: isMobile ? "0px" : "22px",
            }}
          >
            0{index + 1}.
          </SubTitleNumber>
          <SubTitleProcess
            style={{
              fontSize: isMobile ? null : "55px",
              paddingTop: isMobile ? "4px" : null,
            }}
          >
            {title}
          </SubTitleProcess>
        </div>
        <ArrowImage
          src={arrowImage}
          alt="Arrow"
          initial={{ rotate: 0 }}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            width: isMobile ? "20px" : "42px",
            height: isMobile ? "20px" : "42px",
            marginTop: isMobile ? "11px" : "38px",
          }}
        />
      </SubTitleContainer>
      {isOpen && (
        <TextContainer $index={index}>
          <p>{text}</p>
        </TextContainer>
      )}
    </SectionContainer>
  );
};

export default Title;
