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
  font-family: "Midnight Flame";
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
          <Title>CONDITIONS GENERALES DE VENTE</Title>
          <Private>TATOUEUSE – SALON PRIVE SUR RENDEZ-VOUS UNIQUEMENT</Private>
          <SubTitle>1. Informations legales</SubTitle>
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
            L'acceuil se faitt exclusivement sur rendez-vous dans un salon
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
          <SubTitle>2. Nature de la prestation</SubTitle>
          <AllText>
          Le tatouage est une prestation artistique réalisée sur mesure. Chaque projet nécessite un temps de recherche,
          de conception graphique
          <br />
          et de préparation technique en amont de la séance. En réservant votre séance,
          vous validez le style de travail et le fait que le
          <br />
          tatouage est une modification corporelle permanente et définitive.
          <br />
          <br />
          Pour garantir une collaboration sereine et transparente, voici les conditions relatives à la prestation :
          <br />
          <br />
          <strong><u>Prestation sur-mesure : </u></strong>
          <br />
          <br />
          Le paiement rémunère le temps passé, l'expertise artistique, la création, le matériel stérile et l'hygiène.
          <br />
          <br />
          <br />
          <strong><u>Caractère définitif :  </u></strong>
          <br />
          <br />
          La prestation est considérée comme intégralement consommée dès sa réalisation.
          En raison de sa nature artistique et sur-mesure,
          <br />
          une fois la séance terminée et le tatouage réalisé,
          aucun remboursement (total ou partiel) ne peut être exigé, que ce soit directement
          <br />
          auprès de l'artiste ou
          via une procédure de contestation/litige auprès d'un organisme de paiement (type Klarna, banque, etc.).
          </AllText>
          <br />
          <br />
          <SubTitle>3. Prise de rendez-vous et communication</SubTitle>
          <AllText>
            Les demandes se font via le formulaire de contact ou e-mail.
            <br />
            Je m’engage à répondre aux e-mails le plus rapidement possible
            durant les horaires d’ouverture de 10h00 à 18h00.
            <br />
            <br />
            Les rendez-vous sont confirmés uniquement après réception des arrhes
            (voir section 5).
            <br />
            <br />
            En procédant au règlement de ces arrhes,
            le client déclare expressément avoir lu et accepté
            <br />
            les présentes conditions générales de vente.
            <br />
            <br />
            Aucun accueil ne sera fait hors rendez-vous, merci de respecter le
            caractère privé du salon.
            <br />
            <br />
          </AllText>
          <SubTitle>4. Deroulement du projet et modifications</SubTitle>
          <AllText>
            Un devis estimatif est également fourni à ce moment-là, à titre indicatif.
            <br />
            Le montant final peut varier en fonction de la taille réelle, de la complexité du dessin ou du temps nécessaire le jour de la séance.
            <br />
            <br />
            Jusqu’à 2 ou 3 modifications/retours sont acceptés,
            dans un esprit de collaboration respectueuse.
            <br />
            Au-delà, des frais supplémentaires pourront être appliqués.
            <br />
            Le versement des arrhes confirme la réservation, ainsi que l’engagement du client sur le projet défini.
            <br />
            <br />
          </AllText>
          <SubTitle>5. Paiement, arrhes et conditions d annulation</SubTitle>
          <AllText>
            Un versement d’arrhes est demandé pour toute prise de rendez-vous.
            <br />
            Ce montant est déduit du prix final ( de la dernière séances si
            plusieurs séances programmées ).
            <br/>
            <br/>
            Le montant des arrhes <strong><em> de 50€</em></strong> s'applique à chaque prestation,
            quel que soit le prix final.
            <br />
            <br />
            Les arrhes sont à régler par carte bancaire via le lien MyPos envoyé par mes soins.
            <br />
            <br />
            Une facture est émise après chaque séance, correspondant au montant réglé le jour même.
            <br />
            <br />
            Conformément à l’article 1590 du Code civil, les arrhes ne sont pas
            remboursables en cas d’annulation du client.
            <br />
            <br />
            <br />
            <strong><u>Nature des arrhes : </u></strong>
            <br />
            <br />
            Ces arrhes constituent la rémunération immédiate du travail de création,
            de dessin et de préparation réalisé par l'artiste dès la
            <br />
            validation du projet, ainsi que l'immobilisation du créneau. En conséquence, elles sont définitivement acquises à l'artiste et
            <br />
            non-remboursables, quel que soit le motif de l'annulation ou le délai de prévenance,
            car elles couvrent un travail déjà effectué.
            <br />
            <br />
            Le solde du tatouage est à régler le jour de la séance par les moyens de paiement acceptés (espèces, carte bancaire).
            <br />
            <br />
            <br />
            Un paiement en 3x via klarna est possible.
            <br />
            <br />
            <br />
            <strong><u>Paiement fractionné (Klarna) :</u></strong>
            <br />
            <br />
            Si le client souhaite régler via Klarna (paiement fractionné),
            <br />
            le lien de paiement sera envoyé par mes soins <strong>48h avant la date du rendez-vous. </strong>
            <br />
            <br />
            Le client s'engage à valider ce lien avant le début de la séance. Afin que je puisse recevoir la validation.
            <br />
            <br />
            En cas de non-validation, de refus par le service financier, ou de défaillance technique le jour J,
            <br />
            le règlement total de la prestation devra être effectué <strong><em>immédiatement par un autre moyen accepté.</em></strong>
            <br />
            <br />
            <br />
            <strong><u>Report et annulation :</u></strong>
            <br />
            <br />
            Tout report ou annulation doit être signalé au moins 48h à l’avance.
            <br />
            Au delà de trois report je considère que tu annules le projet.
            <br />
            <br />
            Les arrhes ne sont pas remboursable en cas d'annulation de la part du client
            <br />
            <br />
            Aucun acompte supplémentaire n'est nécessaire pour un report de rendez-vous, sauf après trois reports ou annulations.
            <br />
            <br />
            En cas d'annulation moins de 48h avant le rendez-vous ou de non-présentation (no-show),
            <br />
            les arrhes de 50€ sont définitivement acquises à l'artiste.
            <br />
            <br />
            <em>Si un paiement total supérieur aux arrhes a été effectué en amont,
            <br />
            seul le solde (paiement total moins les 50€ d'arrhes) fera l'objet d'un remboursement.</em>
            <br />
            <br />
          </AllText>
          <SubTitle>6. Comportement et droit de refus</SubTitle>
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
          <SubTitle>7. Hygiene, soins et responsabilite</SubTitle>
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
          <SubTitle>8. Contre-indications</SubTitle>
          <AllText>
            Le client déclare ne présenter aucune contre-indication médicale (ex
            : grossesse, traitement médical, allergies, maladie de la peau).
            <br />
            En cas de doute, je peux refuser la réalisation du tatouage pour des
            raisons de sécurité.
            <br />
            <br />
          </AllText>
          <SubTitle>9. Droit d auteur</SubTitle>
          <AllText>
            Les dessins et tatouages sont des œuvres originales protégées par le
            droit d’auteur.
            <br />
            Toute reproduction, diffusion ou modification sans autorisation
            écrite est interdite.
            <br />
            <br />
          </AllText>
          <SubTitle>10. Donnees personnelles</SubTitle>
          <AllText>
            Les données collectées (nom, e-mail, etc.) sont utilisées uniquement
            pour le traitement des demandes.
            <br />
            Elles ne seront jamais transmises à des tiers.
            <br />
            <br />
          </AllText>
          <SubTitle>11. Litige - Mediation de la consommation</SubTitle>
          <AllText>
          En cas de litige entre le Client et l’entreprise, ceux-ci s’efforceront de le résoudre à l’amiable
          <br />
          (le Client adressera une réclamation écrite auprès du professionnel ou, le cas échéant,
          auprès du Service Relations Clientèle du professionnel).
          <br/>
          <br/>
          A défaut d’accord amiable ou en l’absence de réponse du professionnel dans un délai raisonnable d’un (1) mois,
          <br/>
          le Client consommateur au sens de l’article L.612-2 du code de la consommation a la possibilité de saisir gratuitement,
          <br/>
          si un désaccord subsiste, le médiateur compétent inscrit sur la liste des médiateurs établie par la Commission d’évaluation et
          <br/>
          de contrôle de la médiation de la consommation en application de l’article L.615-1 du code de la consommation, à savoir :
          <br/>
          <br/>
          La Société Médiation Professionnelle
          <br/>
          http://www.mediateur-consommation-smp.fr
          <br/>
          Alteritae 5 rue Salvaing 12000 Rodez
          </AllText>
          <SubTitle>12. Acceptation des conditions</SubTitle>
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
