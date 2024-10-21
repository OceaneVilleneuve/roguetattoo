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

const HeightPage = styled.div`
  min-height: 90vh;
  padding-top: 2rem;
`;

const Project = () => {
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
    <HeightPage id="projectsPage"
    style={{
      paddingBottom: isMobile ? null : "15rem",
    }}>
      <motion.div
        ref={ref} // Ajoutez le ref ici pour le lier à useInView
        key={animationKey}
        initial={{ x: +50, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : {}} // Vérifiez si inView est vrai
        transition={{ duration: 1.3 }}
        style={!inView ? { visibility: "hidden" } : {}}
      >
        <h1
          style={{
            marginBottom: isMobile ? "9rem" : "9rem",
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
          slidesPerView={3} // Changez pour 3 pour afficher plus de slides
          spaceBetween={30} // Ajoutez de l'espacement entre les slides
          loop={true}
          coverflowEffect={{
            rotate: 30, // Réduire l'angle de rotation
            stretch: 0, // Gardez à 0 pour ne pas étirer les slides
            depth: 100, // Réduire la profondeur pour rendre les slides visibles
            modifier: 2.5, // Augmentez le modificateur pour un effet plus marqué
            slideShadows: true, // Gardez les ombres sur les slides
          }}
          navigation={true}
          modules={[EffectCoverflow, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="https://via.placeholder.com/300" alt="slide 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://via.placeholder.com/300" alt="slide 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://via.placeholder.com/300" alt="slide 3" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://via.placeholder.com/300" alt="slide 4" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://via.placeholder.com/300" alt="slide 5" />
          </SwiperSlide>
        </Swiper>
      </motion.div>
    </HeightPage>
  );
};

export default Project;
