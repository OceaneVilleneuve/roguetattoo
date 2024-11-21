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
import Projet4 from "../../assets/IMG_1131 2.jpg";
import Projet5 from "../../assets/IMG_1131 3.jpg";
import Projet6 from "../../assets/IMG_1131.jpg";
import Projet7 from "../../assets/IMG_1132 2.jpg";
import Projet8 from "../../assets/IMG_1132.jpg";
import Projet9 from "../../assets/IMG_1361.JPG";
import Projet10 from "../../assets/IMG_1362.JPG";
import Projet11 from "../../assets/IMG_1363.JPG";
import Projet12 from "../../assets/IMG_1364.JPG";
import Projet13 from "../../assets/IMG_1365.JPG";
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
            <SwiperSlide onClick={() => openFullscreen(Projet4)}>
              <PictureProject src={Projet4} alt="slide 4" />
              <PictureText>✥ Nipple Ring ✥</PictureText>
            </SwiperSlide>
            <SwiperSlide onClick={() => openFullscreen(Projet5)}>
              <PictureProject src={Projet5} alt="slide 5" />
              <PictureText>✥ Veins ✥</PictureText>
            </SwiperSlide>
            <SwiperSlide onClick={() => openFullscreen(Projet6)}>
              <PictureProject src={Projet6} alt="slide 6" />
              <PictureText>✥ Jewel ✥</PictureText>
            </SwiperSlide>
            <SwiperSlide onClick={() => openFullscreen(Projet7)}>
              <PictureProject src={Projet7} alt="slide 7" />
              <PictureText>✥ Carnage ✥</PictureText>
            </SwiperSlide>
            <SwiperSlide onClick={() => openFullscreen(Projet8)}>
              <PictureProject src={Projet8} alt="slide 8" />
              <PictureText>✥ Chaos ✥</PictureText>
            </SwiperSlide>
            <SwiperSlide onClick={() => openFullscreen(Projet9)}>
              <PictureProject src={Projet9} alt="slide 8" />
              <PictureText>✥ Planche Flash 1 ✥</PictureText>
            </SwiperSlide>
            <SwiperSlide onClick={() => openFullscreen(Projet10)}>
              <PictureProject src={Projet10} alt="slide 8" />
              <PictureText>✥ Planche Flash 2 ✥</PictureText>
            </SwiperSlide>
            <SwiperSlide onClick={() => openFullscreen(Projet11)}>
              <PictureProject src={Projet11} alt="slide 8" />
              <PictureText>✥ Planche Flash 3 ✥</PictureText>
            </SwiperSlide>
            <SwiperSlide onClick={() => openFullscreen(Projet12)}>
              <PictureProject src={Projet12} alt="slide 8" />
              <PictureText>✥ Planche Flash 4 ✥</PictureText>
            </SwiperSlide>
            <SwiperSlide onClick={() => openFullscreen(Projet13)}>
              <PictureProject src={Projet13} alt="slide 8" />
              <PictureText>✥ Planche Flash 5 ✥</PictureText>
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
