import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Logo from "../../assets/IMG_3077.PNG";
import { useMediaQuery } from "react-responsive";
import { useInView } from "react-intersection-observer";

const CgvContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  text-align: center;
  padding-top: 1rem;
  @media (max-width: 768px) {
    font-size: 20px;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
`;
const Private = styled.h3`
  text-align: center;
  padding-bottom: 2rem;
  @media (max-width: 768px) {
    font-size: 13px;
  }
`;
const SubTitle = styled.h2`
  text-align: center;
  font-family: "Angel Wish";
  font-size: 30px;
  padding-top: 2rem;
  padding-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 23px;
  }
`;

const AllText = styled.p`
  text-align: center;
  padding-left: 2rem;
  padding-right: 2rem;
  @media (max-width: 768px) {
    font-size: 12px;
    padding-left: 1.8rem;
    padding-right: 1.8rem;
  }
`;

const CGV = () => {
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
    <CgvContainer
      id="terms"
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

          <Title>CONDITIONS GENERAL DE VENTE</Title>
          <Private>TATOUEUSE – SALON PRIVE SUR RENDEZ-VOUS UNIQUEMENT</Private>
          <SubTitle>1. Informations légales</SubTitle>
          <AllText>
            ⊛ Nom de l’artiste : Countess Rogue
            <br />
            ⊛ Statut : Auto-entrepreneuse
            <br />
            ⊛ SIRET : 92450698300023
            <br />
            ⊛ Contact : countess.rogue@gmail.com
            <br />
            <br />
            <br />
            Les rendez-vous se font exclusivement sur rendez-vous dans un salon
            privé situé à st herblain.
            <br />
            <br />
            Le salon se situant dans une dépendance de mon domicile réservé au tatouage.
            <br/>
            L’adresse exacte ne sera transmise uniquement après validation du rendez-vous,
            pour des raisons de confidentialité et de sécurité.
          </AllText>
          <br />
          <br />
          <SubTitle>2. Prise de rendez-vous et communication</SubTitle>
          <AllText>
            Les demandes se font via le formulaire de contact ou e-mail.
            <br />
            Je m’engage à répondre aux e-mails le plus rapidement possible
            durant les horaires d’ouverture de 10h00 à 18h00.
            <br />
            <br />
            Les rendez-vous sont confirmés uniquement après réception des arrhes
            (voir section 4).
            <br />
            Aucun accueil ne sera fait hors rendez-vous, merci de respecter le
            caractère privé du salon.
            <br />
            <br />
          </AllText>
          <SubTitle>3. Déroulement du projet et modifications</SubTitle>
          <AllText>
            Avant le rendez-vous et après versement des arrhes, un croquis
            initial est envoyé pour validation de l’idée.
            <br />
            <br />
            Jusqu’à 2 ou 3 modifications/retours sont acceptés ( croquis inclus ),
            dans un esprit de collaboration respectueuse.
            <br />
            Au-delà, des frais supplémentaires pourront être appliqués.
            <br />
            <br />
          </AllText>
          <SubTitle>4. Paiement, arrhes et conditions d’annulation</SubTitle>
          <AllText>
            Un versement d’arrhes est demandé pour toute prise de rendez-vous.
            <br />
            Ce montant est déduit du prix final ( de la dernière séances si
            plusieurs séances programmées ).
            <br />
            <br />
            Les arrhes sont à régler par virement bancaire ou PayPal.
            <br />
            <br />
            Conformément à l’article 1590 du Code civil, les arrhes ne sont pas
            remboursables en cas d’annulation du client.
            <br />
            Le reste du prix du tatouage est à régler le jour de la séance, par
            les moyens de paiement acceptés
            <br />
            ( espèce, paypal et virement bancaire instantané ).
            <br />
            <br />
            Tout report ou annulation doit être signalé au moins 48h à l’avance.
            <br />
            Les arrhes ne sont pas remboursable en cas d'annulation de la part du client mais
            d'autres arrhes ne sont pas nécéssaire pour un repors de
            rendez-vous.
            <br />
            <br />
          </AllText>
          <SubTitle>5. Comportement et droit de refus</SubTitle>
          <AllText>
            Je me réserve le droit d’annuler ou refuser toute prestation si le
            client adopte un comportement inapproprié,
            <br />
            irrespectueux ou déplacé ( propos sexistes, comportement déplacé, drague insistante,
            <br/>
            non-respect du cadre professionnel, propos inappropriés, non respect des consignes etc. ).
            <br />
            Le respect mutuel est fondamental.
            <br />
            <br />
            Toute atteinte au bien-être ou à la sécurité entraînera l’arrêt
            immédiat du processus sans remboursement.
            <br />
            <br />
          </AllText>
          <SubTitle>6. Hygiène, soins et responsabilité</SubTitle>
          <AllText>
            Je travaille selon les normes d’hygiène strictes exigées par la
            réglementation.
            <br />
            Une fiche de soins est remise après chaque tatouage. Mais n'hésitez
            pas à me la demander si vous l'égarez.
            <br />
            <br />
            Le client est seul responsable du respect des soins post-tatouage.
            Aucun retouche gratuite ne sera faite en cas de négligence.
            <br />
            <br />
          </AllText>
          <SubTitle>7. Contre-indications</SubTitle>
          <AllText>
            Le client déclare ne présenter aucune contre-indication médicale (ex
            : grossesse, traitement médical, allergies, maladie de la peau).
            <br />
            En cas de doute, je peux refuser la réalisation du tatouage pour des
            raisons de sécurité.
            <br />
            <br />
          </AllText>
          <SubTitle>8. Droit d’auteur</SubTitle>
          <AllText>
            Les dessins et tatouages sont des œuvres originales protégées par le
            droit d’auteur.
            <br />
            Toute reproduction, diffusion ou modification sans autorisation
            écrite est interdite.
            <br />
            <br />
          </AllText>
          <SubTitle>9. Données personnelles</SubTitle>
          <AllText>
            Les données collectées (nom, e-mail, etc.) sont utilisées uniquement
            pour le traitement des demandes.
            <br />
            Elles ne seront jamais transmises à des tiers.
            <br />
            <br />
          </AllText>
          <SubTitle>10. Acceptation des conditions</SubTitle>
          <AllText>
            En validant sa demande de rendez-vous, le client déclare avoir lu et
            accepté les présentes conditions générales de vente.
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
    </CgvContainer>
  );
};

export default CGV;
