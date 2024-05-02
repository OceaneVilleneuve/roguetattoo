import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import styled from "styled-components";
import "../home/infiniteScolling.css";
import ProcessStage from "./processStage";

const ContainerProcess = styled.div`
  position: relative;
`;


const Process = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [animationKey, setAnimationKey] = useState(0);

  const [ref, inView] = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      setAnimationKey((prevKey) => prevKey + 1);
    }
  }, [inView]);

  const sectionsData = [
    {
      title: "BRIEF",
      text: "Nous réaliserons un appel téléphonique et visio afin que je puisse recueillir tes besoins précis ainsi que ton projet d'application. Lors de cet appel, je pourrai aussi recueillir tes idées design si tu n'as pas de maquette.",
    },
    {
      title: "DESIGN",
      text: "Je réalise une maquette très simple en wireframe de ton application sur Figma. Une fois cette maquette réalisée, une maquette réaliste de ton site est créée sur Figma, qui servira de template définitif pour ton application.",
    },
    {
      title: "PRISE DE RENDEZ-VOUS",
      text: "Je développe ton application dans le langage le plus adapté.",
    },
    {
      title: "RENDEZ-VOUS",
      text: "C'est la phase finale du projet. Le site est enfin mis en production après validation de votre part de la partie développement. L'application est donc maintenant en ligne.",
    },
  ];

  const subtitleStylesLeft = ["37%", "50%", "12%", "50%"];
  const subtitleStylesLeftMobile = ["30%", "40%", "12%", "38%"];

  return (
    <ContainerProcess
      id="processPage"
      ref={ref}
      style={{
        paddingTop: isMobile ? "4rem" : "",
        minHeight: isMobile ? "70vh" : "100vh",
      }}
    >
      <motion.div
        key={animationKey}
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.3 }}
        style={!inView ? { visibility: "hidden" } : {}}
      >
        <h1
          style={{
            fontSize: isMobile ? "10px" : "25px",
            padding: isMobile ? "45px 33px" : "85px 85px 10px 85px",
          }}
        >
          MON PROCESSUS
        </h1>
        {sectionsData.map((section, index) => (
          <ProcessStage
            key={section.title}
            index={index}
            title={section.title}
            text={section.text}
            left={
              isMobile
                ? subtitleStylesLeftMobile[index]
                : subtitleStylesLeft[index]
            }
          />
        ))}
      </motion.div>
    </ContainerProcess>
  );
};

export default Process;
