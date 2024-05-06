import React, { useState } from "react";
import styled from "styled-components";
import Cards from "./projectCarousselCards";
import AlexaStudioPicture from "../../assets/alexa_dark-min-p-1600 2-Photoroom.png-Photoroom.png";
import FerdPicture from "../../assets/ferd-removebg-preview 2-Photoroom.png-Photoroom.png";
import { useMediaQuery } from "react-responsive";

const ContainerProjects = styled.div`
  position: relative;
  overflow: hidden;
  margin-top: 7rem;
`;

const ProjectContainer = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
`;

const Project = styled.div`
  flex: 0 0 100vw;
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  z-index: 1;
  font-size: 24px;
  ${({ direction }) => (direction === "prev" ? "left: 0;" : "right: 0;")}
`;

const ProjectNumber = styled.p`
  font-size: 11px;
  display: flex;
  justify-content: center;
  padding-right: 4rem;
`;

const Projects = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const projectList = [
    {
      entreprise: "Alexa Studio Création",
      image: AlexaStudioPicture,
    },
    {
      entreprise: "Ferd",
      image: FerdPicture,
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : projectList.length - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < projectList.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <ContainerProjects
      id="projectsPage"
      style={{ minHeight: isMobile ? "80vh" : "100vh" }}
    >
      <div>
        {/* <h1
        style={{
          fontSize: isMobile ? "10px" : null,
          padding: isMobile ? "45px 33px" : "200px 85px 0px ",
        }}
      >
        MES TATOUAGES
      </h1> */}
      </div>
      <Button direction="prev" onClick={handlePrev}>
        {"<"}
      </Button>
      <ProjectContainer
        style={{ transform: `translateX(-${currentIndex * 100}vw)` }}
      >
        {projectList.map((project, index) => (
          <Project key={index}>
            <Cards
              index={index}
              site={project.site}
              entreprise={project.entreprise}
              text={project.text}
              image={project.image}
            />
            <ProjectNumber>
              {projectList.length < 10 && index + 1 < 10
                ? `0${index + 1} / 0${projectList.length}`
                : `${index + 1} / ${projectList.length}`}
            </ProjectNumber>
          </Project>
        ))}
      </ProjectContainer>
      <Button direction="next" onClick={handleNext}>
        {">"}
      </Button>
    </ContainerProjects>
  );
};

export default Projects;
