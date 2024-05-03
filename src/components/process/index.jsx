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
      title: "CONTACT",
      text: "Lors de notre premier contact, je t'invite à me décrire précisément ton projet, son emplacement ainsi que sa taille en longueur et largeur en centimètres, et à fournir des références si tu en as. Je favorise les contacts par mail ou via le formulaire de contact de mon site plutôt que les DM. N'hésite pas à être le.la plus précis·e possible. Je te dirais si il est réalisable par mes soins ou non.",
    },
    {
      title: "ECHANGE",
      text: "Lors de cette phase d'échange, nous discuterons plus précisément de ton design et nous nous fixerons sur une idée. Je te proposerai un nombre de séances afin de pouvoir réaliser ton projet, ainsi que le tarif et l'acompte nécessaire pour réserver le ou les rendez-vous. N'hésite pas à me parler de tes appréhensions ou de toute chose qui te semble nécessaire. Nous trouverons toujours une solution pour que tu te sentes le.la plus à l'aise possible.",
    },
    {
      title: "PRISE DE RENDEZ-VOUS",
      text: "Une fois nos échanges sur ton projet terminés et que tout est validé, je te demanderai un acompte afin de pouvoir réserver la ou les dates de rendez-vous. L'acompte sera conservé en cas d'annulation, mais aucun acompte supplémentaire ne sera demandé en cas de report de rendez-vous réalisé au minimum 48h à l'avance. Je n'envoie pas mes dessins par DM ni par mail, mais nous pourrons fixer des rendez-vous avant notre séance si tu souhaites le voir à l'avance. Dans tous les cas, un temps est prévu en début de chaque séance afin de pouvoir retoucher les designs autant qu'il le faut pour atteindre tes attentes.",
    },
    {
      title: "RENDEZ-VOUS",
      text: "Le jour du rendez-vous, il faudra que tu suives précisément les consignes que je t'aurai préalablement envoyées par mail concernant l'hygiène nécessaire avant la pratique du tatouage. Je me réserve le droit de refuser les personnes qui n'auront pas respecté ces règles, car il en va de votre santé. L'adresse du salon te sera communiquée à l'avance par mail, ainsi que les lignes de transport en commun et les commodités près du salon. N'hésite pas à me poser tes questions si tu viens de loin.",
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
            fontSize: isMobile ? "10px" : null,
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
