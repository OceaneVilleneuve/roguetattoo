import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import styled from "styled-components";
import "../home/infiniteScolling.css";
import { Link } from "react-router-dom";
import ProcessStage from "./processStage";

const ContainerProcess = styled.div`
  position: relative;
`;

const LinkDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 8rem;
  flex-direction: column;
  @media (max-width: 768px) {
    padding-top: 3rem;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-family: "Midnight Flame", serif;
  font-weight: lighter;
  font-size: 28px;

  &:hover {
    text-shadow: 2px 2px 10px #fff;
    filter: drop-shadow(2px 2px 2px #fff);
  }
  @media (max-width: 768px) {
    font-size: 15px;
  }
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
      title: "CONTACT",
      text: "Lors de notre premier contact, je t'invite à me décrire précisément ton projet, son emplacement ainsi que sa taille en longueur et largeur en centimètres mesuré précisement, et à fournir des références si tu en as. N'hésite pas à être le.la plus précis·e possible. Je te dirais si il est réalisable par mes soins ou non.",
    },
    {
      title: "ECHANGE",
      text: "Lors de cette phase d'échange, nous discuterons plus précisément de ton design et nous nous fixerons sur une idée. Je te proposerai un nombre de séances afin de pouvoir réaliser ton projet, ainsi que le tarif et les arrhes nécessaire pour réserver le ou les rendez-vous. N'hésite pas à me parler de tes appréhensions ou de toute chose qui te semble nécessaire. Nous trouverons toujours une solution pour que tu te sentes le.la plus à l'aise possible.",
    },
    {
      title: "PRISE DE RENDEZ-VOUS",
      text: "Une fois nos échanges sur ton projet terminés et que tout est validé, je te demanderai des arrhes via paypal afin de pouvoir réserver la ou les dates de rendez-vous. Les arrhes seront conservé en cas d'annulation de ta part, mais aucun arrhes supplémentaire ne sera demandé en cas de report de rendez-vous réalisé au minimum 48h à l'avance. Le montant des arrhes correspond à 25% du prix du tatouage. Toutefois un montant minimum de 50€ s'applique à chaque prestation, quel que soit le prix final. Ainsi, pour toute prestation dont le prix final est inférieur à 200€, les arrhes facturées seront automatiquement ajustées à 50€ TTC.",
    },
    {
      title: "RENDEZ-VOUS",
      text: "Avant le rendez-vous et après versement des arrhes, un croquis initial est envoyé pour validation de l’idée. Jusqu’à 2 ou 3 modifications/retours sont acceptés, dans un esprit de collaboration respectueuse. Le jour du rendez-vous, il faudra que tu suives précisément les consignes que je t'aurai préalablement envoyées par mail concernant l'hygiène nécessaire avant la pratique du tatouage. Je me réserve le droit de refuser les personnes qui n'auront pas respecté ces règles. L'adresse du salon te sera communiquée à l'avance par mail, ainsi que les lignes de transport en commun et les commodités près du salon.",
    },
  ];

  const subtitleStylesLeft = ["37%", "50%", "10%", "50%"];
  const subtitleStylesLeftMobile = ["30%", "40%", "10%", "38%"];

  return (
    <ContainerProcess
      id="processPage"
      ref={ref}
      style={{
        paddingTop: isMobile ? "4rem" : "",
        paddingBottom: isMobile ? "4rem" : "3rem",
        paddingRight: isMobile ? "1rem" : "2.5rem",
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
            fontSize: isMobile ? "17px" : null,
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
        <LinkDiv>
          <h3
            style={{
              fontSize: isMobile ? "10px" : null,
            }}
          >
            POUR PLUS D'INFORMATIONS CONSULTE MES :
          </h3>
          <StyledLink
            to="/cgv"
            onClick={() => {
              window.scrollTo(0, 0); // scroll vers le haut au moment du clic
            }}
          >
            {" "}
            Conditions generales de vente
          </StyledLink>
        </LinkDiv>
      </motion.div>
    </ContainerProcess>
  );
};

export default Process;
