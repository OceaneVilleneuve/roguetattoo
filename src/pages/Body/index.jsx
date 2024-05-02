import React, { useEffect, useState } from "react";
import Home from "../../components/home";
import Process from "../../components/process";
import Project from "../../components/project";
import AboutMe from "../../components/aboutMe";
import Contact from "../../components/contact";
import Socials from "../../components/socials";
import "./Body.css";

const Body = () => {
  const [isProjectVisible, setIsProjectVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsProjectVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    const projectSection = document.getElementById("projectsPage");
    if (projectSection) {
      observer.observe(projectSection);
    }

    // Cleanup: disconnect the observer when the component unmounts
    return () => {
      if (projectSection) {
        observer.unobserve(projectSection);
      }
    };
  }, []);

  useEffect(() => {
    // Appliquer la classe project-visible au body
    document.body.classList.toggle("project-visible", isProjectVisible);

    // Nettoyer la classe lors du démontage du composant
    return () => {
      document.body.classList.remove("project-visible");
    };
  }, [isProjectVisible]);

  return (
    <div
      className={`body-container ${isProjectVisible ? "project-visible" : ""}`}
    >
      <Home />
      <Process />
      <Project />
      <AboutMe />
      <Contact />
      <Socials />
    </div>
  );
};

export default Body;
