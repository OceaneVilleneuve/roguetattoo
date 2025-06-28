import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Logo from "../../assets/IMG_3077.PNG";
import { useMediaQuery } from "react-responsive";
import { useInView } from "react-intersection-observer";

const PrivacyContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  text-align: center;
  padding-bottom: 2rem;
  padding-top: 1rem;
  @media (max-width: 768px) {
    font-size: 20px;

`;

const SubTitle = styled.h2`
  text-align: center;
  font-family: "Angel Wish";
  font-size: 30px;
  padding-top: 2rem;

  @media (max-width: 768px) {
    font-size: 23px;
  }
`;

const AllText = styled.p`
  text-align: center;
  @media (max-width: 768px) {
    font-size: 12px;
    padding-left: 1.8rem;
    padding-right: 1.8rem;
  }
`;

const Privacy = () => {
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

  return (
    <PrivacyContainer
      id="privacy"
      ref={ref}
      style={{
        minHeight: isMobile ? "65vh" : "96vh",
      }}
    >
      <motion.div
        key={animationKey}
        initial={{ x: +50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.3 }}
      >
        <div
          style={{
            textAlign: "center",
          }}
        >
          <img
            src={Logo}
            alt="logo"
            style={{
              height: isMobile ? "5rem" : "9rem",
            }}
          />

          <Title>POLITIQUE DE CONFIDENTIALITE</Title>

          <SubTitle>1. Collecte des données personnelles</SubTitle>
          <AllText>
            En tant que tatoueuse professionnelle, je peux être amenée à
            collecter certaines données personnelles via ce site, notamment:
            <br />
            <br />
            ⊛ Nom et prénom
            <br />
            ⊛ Adresse e-mail
            <br />
            ⊛ Age
            <br />
            ⊛ Informations nécessaires à la prise de rendez-vous ou au suivi du
            projet
            <br />
            <br />
            <br />
            Ces données sont collectées uniquement avec votre consentement,
            lorsque vous me contactez ou remplissez un formulaire.
            <br />
            <br />
          </AllText>

          <SubTitle>2. Utilisation des données</SubTitle>
          <AllText>
            Les données sont utilisées uniquement pour :
            <br />
            <br />
            ⊛ Répondre à vos demandes de renseignements
            <br />
            ⊛ Gérer les prises de rendez-vous
            <br />
            ⊛ Communiquer autour de votre projet de tatouage
            <br />
            <br />
            <br />
            Aucune donnée ne sera vendue, cédée ou utilisée à des fins
            commerciales non liées à mon activité.
            <br />
            <br />
          </AllText>

          <SubTitle>3. Stockage et sécurité</SubTitle>
          <AllText>
            Les données sont conservées dans un environnement sécurisé (boîte
            mail professionnelle, outils de réservation ou formulaires).
            <br />
            <br />
          </AllText>

          <SubTitle>4. Droits de la personne concernée</SubTitle>
          <AllText>
            Conformément au RGPD, vous disposez des droits suivants :
            <br />
            <br />
            ⊛ Droit d’accès à vos données
            <br />
            ⊛ Droit de rectification ou de suppression
            <br />
            ⊛ Droit à la limitation ou à l’opposition au traitement
            <br />
            <br />
            <br />
            Pour exercer vos droits, vous pouvez m’écrire à :
            countess.rogue@gmail.com
            <br />
            <br />
          </AllText>
          <SubTitle>5. Cookies</SubTitle>
          <AllText>
            Ce site peut utiliser des cookies techniques nécessaires à son bon
            fonctionnement.
            <br />
            <br />
            Aucun cookie publicitaire ou de tracking n’est utilisé sans votre
            consentement.
            <br />
            <br />
          </AllText>
          <SubTitle>6. Responsable du traitement</SubTitle>
          <AllText>
            Le responsable du traitement des données est : Countess Rogue
            <br />
            <br />⊛ E-mail de contact : countess.rogue@gmail.com
          </AllText>
          <img
            src={Logo}
            alt="logo"
            style={{
              height: isMobile ? "5rem" : "9rem",
              paddingTop: "2.5rem",
            }}
          />
        </div>
      </motion.div>
    </PrivacyContainer>
  );
};

export default Privacy;
