import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
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
        paddingBottom: isMobile ? null : "15rem",
        minHeight: isMobile ? "84vh" : "90vh",
        paddingTop: isMobile ? null : "2rem",
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
            marginBottom: isMobile ? "9rem" : "6rem",
            fontSize: isMobile ? "10px" : null,
            padding: isMobile ? "45px 33px" : "85px 85px 10px 85px",
          }}
        >
          MES FLASHS
        </h1>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
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
          <SwiperSlide
            onClick={() => openFullscreen("https://via.placeholder.com/300")}
          >
            <img src="https://via.placeholder.com/300" alt="slide 1" />
          </SwiperSlide>
          <SwiperSlide
            onClick={() => openFullscreen("https://via.placeholder.com/300")}
          >
            <img src="https://via.placeholder.com/300" alt="slide 2" />
          </SwiperSlide>
          <SwiperSlide
            onClick={() => openFullscreen("https://via.placeholder.com/300")}
          >
            <img src="https://via.placeholder.com/300" alt="slide 3" />
          </SwiperSlide>
          <SwiperSlide
            onClick={() => openFullscreen("https://via.placeholder.com/300")}
          >
            <img src="https://via.placeholder.com/300" alt="slide 4" />
          </SwiperSlide>
          <SwiperSlide
            onClick={() => openFullscreen("https://via.placeholder.com/300")}
          >
            <img src="https://via.placeholder.com/300" alt="slide 5" />
          </SwiperSlide>
        </Swiper>
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
