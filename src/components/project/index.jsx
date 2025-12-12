import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Projet2 from "../../assets/IMG_1136.JPG";
import Projet3 from "../../assets/IMG_1120.JPG";
import Projet16 from "../../assets/att.Og9bjT3pc5NNRqUUCFhUHCGXcv7AQWTivOiMZfMDvBg.JPG";
import Projet17 from "../../assets/att.SJP-XbW-9EwpicsG08KVZx40jl3q05b93AdmfLVQgEo.JPG";
import Projet18 from "../../assets/IMG_2676.JPG";
import Projet22 from "../../assets/IMG_2733.JPG";
import Projet23 from "../../assets/IMG_3137.JPG";
import Projet24 from "../../assets/IMG_3138.JPG";
import Projet25 from "../../assets/IMG_3139.JPG";
import Projet26 from "../../assets/IMG_3140.JPG";
import Projet27 from "../../assets/IMG_3141.JPG";
import Projet28 from "../../assets/IMG_3142.JPG";
import Projet29 from "../../assets/IMG_3143.JPG";
import { EffectCoverflow, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Styles pour l'image en plein écran
const FullscreenImage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8); /* Fond sombre semi-transparent */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Assure que l'image est au-dessus des autres éléments */
  opacity: 0; /* Commence avec une opacité de 0 */
  transition: opacity 0.5s ease-in-out; /* Ajoute une transition pour le fondu */
  ${({ isVisible }) =>
    isVisible &&
    `
    opacity: 1; /* Change l'opacité à 1 lorsque visible */
  `}

  img {
    max-width: 90%; /* Limite la largeur max de l'image */
    max-height: 90%; /* Limite la hauteur max de l'image */
    transition: transform 0.5s ease-in-out; /* Ajoute une transition pour l'image elle-même */
    transform: scale(
      0.5
    ); /* Commence avec une échelle réduite pour le "petit case" */
    ${({ isVisible }) =>
      isVisible &&
      `
      transform: scale(1); /* Rétablit l'échelle lorsque l'image est visible */
    `}
  }
`;

const PictureProject = styled.img`
  object-fit: cover;
  width: 300px;
  height: 600px;
  overflow: hidden;
`;

const PictureText = styled.p`
  text-align: center;
  font-family: "Midnight Flame";
  font-size: 40px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Project = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [animationKey, setAnimationKey] = useState(0);
  const [fullscreenImage, setFullscreenImage] = useState(null); // État pour gérer l'image en plein écran
  const [isVisible, setIsVisible] = useState(false); // État pour gérer la visibilité de l'image en plein écran

  const [ref, inView] = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      setAnimationKey((prevKey) => prevKey + 1);
    }
  }, [inView]);

  // Fonction pour ouvrir l'image en plein écran
  const openFullscreen = (imgSrc) => {
    setFullscreenImage(imgSrc);
    setTimeout(() => setIsVisible(true), 100);
    // Rendre l'image visible
  };

  // Fonction pour fermer l'image en plein écran
  const closeFullscreen = () => {
    setIsVisible(false); // Masquer l'image
    setTimeout(() => setFullscreenImage(null), 500); // Réinitialiser après la transition
  };

  return (
    <div
      id="projectsPage"
      style={{
        paddingBottom: isMobile ? null : "6rem",
        minHeight: isMobile ? "84vh" : "90vh",
        paddingTop: isMobile ? "2rem" : "2rem",
        overflow: "hidden",
        width: "100vw"
      }}
    >
      <motion.div
        ref={ref}
        key={animationKey}
        initial={{ x: +50, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1.3 }}
        style={!inView ? { visibility: "hidden" } : {}}
      >
        <h1
          style={{
            marginBottom: isMobile ? "1rem" : "6rem",
            fontSize: isMobile ? "17px" : null,
            padding: isMobile ? "45px 33px" : "85px 85px 10px 85px",
          }}
        >
          MES FLASHS DISPONIBLES
        </h1>
        <div style={{overflow: 'hidden'}}>
          <Swiper
            effect={"coverflow"}
            grabCursor={false}
            centeredSlides={true}
            slidesPerView={2} // 1 pour mobile, 3 pour desktop
            spaceBetween={isMobile ? 20 : 30} // Espace entre les diapositives
            loop={true}
            coverflowEffect={{
              rotate: 30, // Réduire l'angle de rotation
              stretch: 0, // Gardez à 0 pour ne pas étirer les slides
              depth: 100, // Réduire la profondeur pour rendre les slides visibles
              modifier: 2.5, // Augmentez le modificateur pour un effet plus marqué
              slideShadows: true, // Gardez les ombres sur les slides
            }}
            navigation={!isMobile}
            modules={[EffectCoverflow, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide onClick={() => openFullscreen(Projet29)}>
              <PictureProject src={Projet29} alt="slide 29" />
              <PictureText>✥ Sweet little lamb ✥</PictureText>
            </SwiperSlide>
            <SwiperSlide onClick={() => openFullscreen(Projet28)}>
              <PictureProject src={Projet28} alt="slide 28" />
              <PictureText>✥ Sweet tooth ✥</PictureText>
            </SwiperSlide>
            <SwiperSlide onClick={() => openFullscreen(Projet27)}>
              <PictureProject src={Projet27} alt="slide 27" />
              <PictureText>✥ Cute little hunter ✥</PictureText>
            </SwiperSlide>
            <SwiperSlide onClick={() => openFullscreen(Projet26)}>
              <PictureProject src={Projet26} alt="slide 26" />
              <PictureText>✥ Big bad wolf ✥</PictureText>
            </SwiperSlide>
            <SwiperSlide onClick={() => openFullscreen(Projet25)}>
              <PictureProject src={Projet25} alt="slide 25" />
              <PictureText>✥ A beautiful death ✥</PictureText>
            </SwiperSlide>
            <SwiperSlide onClick={() => openFullscreen(Projet24)}>
              <PictureProject src={Projet24} alt="slide 24" />
              <PictureText>✥ Drawn into chaos ✥</PictureText>
            </SwiperSlide>
            <SwiperSlide onClick={() => openFullscreen(Projet16)}>
              <PictureProject src={Projet16} alt="slide 16" />
              <PictureText>✥ Fenrir ✥</PictureText>
            </SwiperSlide>
            <SwiperSlide onClick={() => openFullscreen(Projet22)}>
              <PictureProject src={Projet22} alt="slide 22" />
              <PictureText>✥ Spring ✥</PictureText>
            </SwiperSlide>
            <SwiperSlide onClick={() => openFullscreen(Projet18)}>
              <PictureProject src={Projet18} alt="slide 18" />
              <PictureText>✥ Jackalope ✥</PictureText>
            </SwiperSlide>
            <SwiperSlide onClick={() => openFullscreen(Projet3)}>
              <PictureProject src={Projet3} alt="slide 3" />
              <PictureText>✥ Burried ✥</PictureText>
            </SwiperSlide>
            <SwiperSlide onClick={() => openFullscreen(Projet2)}>
              <PictureProject src={Projet2} alt="slide 2" />
              <PictureText>✥ Delicate Mutation ✥</PictureText>
            </SwiperSlide>
            <SwiperSlide onClick={() => openFullscreen(Projet17)}>
              <PictureProject src={Projet17} alt="slide 17" />
              <PictureText>✥ A sweet little terror ✥</PictureText>
            </SwiperSlide>
            <SwiperSlide onClick={() => openFullscreen(Projet23)}>
              <PictureProject src={Projet23} alt="slide 23" />
              <PictureText>✥ Tag you're it ✥</PictureText>
            </SwiperSlide>
          </Swiper>
        </div>
      </motion.div>

      {/* Affichage de l'image en plein écran uniquemet sur mobile */}
      {fullscreenImage && isMobile && (
        <FullscreenImage isVisible={isVisible} onClick={closeFullscreen}>
          <img src={fullscreenImage} alt="Fullscreen" isVisible={isVisible} />
        </FullscreenImage>
      )}
    </div>
  );
};

export default Project;
