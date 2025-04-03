import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Projet1 from "../../assets/IMG_0978.JPG";
import Projet2 from "../../assets/IMG_1136.JPG";
import Projet3 from "../../assets/IMG_1120.JPG";
import Projet13 from "../../assets/IMG_1365.JPG";
import Projet14 from "../../assets/att.cueCLFYneGXBfK9jL03iwBdzAqDPJEWMeATcDftM7DE.JPG";
import Projet16 from "../../assets/att.Og9bjT3pc5NNRqUUCFhUHCGXcv7AQWTivOiMZfMDvBg.JPG";
import Projet17 from "../../assets/att.SJP-XbW-9EwpicsG08KVZx40jl3q05b93AdmfLVQgEo.JPG";
import Projet18 from "../../assets/IMG_2676.JPG";
import Projet19 from "../../assets/IMG_2681.JPG";
import Projet20 from "../../assets/IMG_2694.JPG";
import Projet21 from "../../assets/IMG_2732.JPG";
import Projet22 from "../../assets/IMG_2733.JPG";
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
  font-family: "Angel Wish";
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
          MES FLASHS
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
            <SwiperSlide onClick={() => openFullscreen(Projet13)}>
              <PictureProject src={Projet16} alt="slide 8" />
              <PictureText>✥ Fenrir ✥</PictureText>
            </SwiperSlide>
            <SwiperSlide onClick={() => openFullscreen(Projet13)}>
              <PictureProject src={Projet14} alt="slide 8" />
              <PictureText>✥ Mephisto ✥</PictureText>
            </SwiperSlide>
            <SwiperSlide onClick={() => openFullscreen(Projet13)}>
              <PictureProject src={Projet22} alt="slide 8" />
              <PictureText>✥ Spring ✥</PictureText>
            </SwiperSlide>
            <SwiperSlide onClick={() => openFullscreen(Projet13)}>
              <PictureProject src={Projet18} alt="slide 8" />
              <PictureText>✥ Jackalope ✥</PictureText>
            </SwiperSlide>
            <SwiperSlide onClick={() => openFullscreen(Projet13)}>
              <PictureProject src={Projet19} alt="slide 8" />
              <PictureText>✥ Soft embrace ✥</PictureText>
            </SwiperSlide>
            <SwiperSlide onClick={() => openFullscreen(Projet13)}>
              <PictureProject src={Projet20} alt="slide 8" />
              <PictureText>✥ Munin and Hugin ✥</PictureText>
            </SwiperSlide>
            <SwiperSlide onClick={() => openFullscreen(Projet13)}>
              <PictureProject src={Projet21} alt="slide 8" />
              <PictureText>✥ Just a sweetie ✥</PictureText>
            </SwiperSlide>
            <SwiperSlide onClick={() => openFullscreen(Projet3)}>
              <PictureProject src={Projet3} alt="slide 3" />
              <PictureText>✥ Burried ✥</PictureText>
            </SwiperSlide>
            <SwiperSlide onClick={() => openFullscreen(Projet1)}>
              <PictureProject src={Projet1} alt="slide 1" />
              <PictureText>✥ Two-Headed Fawn ✥</PictureText>
            </SwiperSlide>
            <SwiperSlide onClick={() => openFullscreen(Projet2)}>
              <PictureProject src={Projet2} alt="slide 2" />
              <PictureText>✥ Delicate Mutation ✥</PictureText>
            </SwiperSlide>
            <SwiperSlide onClick={() => openFullscreen(Projet13)}>
              <PictureProject src={Projet17} alt="slide 8" />
              <PictureText>✥ A sweet little terror ✥</PictureText>
            </SwiperSlide>
          </Swiper>
        </div>
      </motion.div>

      {/* Affichage de l'image en plein écran uniquement sur mobile */}
      {fullscreenImage && isMobile && (
        <FullscreenImage isVisible={isVisible} onClick={closeFullscreen}>
          <img src={fullscreenImage} alt="Fullscreen" isVisible={isVisible} />
        </FullscreenImage>
      )}
    </div>
  );
};

export default Project;
