import { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Me from "../../assets/IMG_6.PNG";
import Logoname from "../../assets/IMG_1807.PNG";
import Logo from "../../assets/IMG_3077.PNG";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const LinkContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Description = styled.p`
  text-align: center;
  font-size: 12px;
`;

const PictureContainer = styled.div`
  justify-content: center;
`;
const SocialLink = styled.a`
  text-decoration: none;
  color: white;
  &:hover {
    text-shadow: 2px 2px 10px #fff;
    filter: dropshadow(color=#fff, offx=2, offy=2);
  }
`;
const ButtonLink = styled.a`
  text-decoration: none;
  color: white;
`;

const Links = () => {
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
    <LinkContainer>
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
          <PictureContainer ref={ref} style={{ paddingTop: "2rem" }}>
            <img
              src={Me}
              alt="me"
              style={{
                height: "9rem",
                width: "9rem",
                borderRadius: "100%",
                objectFit: "cover",
              }}
            />
          </PictureContainer>
          <PictureContainer ref={ref}>
            <img
              src={Logoname}
              alt="me"
              style={{
                height: "11rem",
                marginTop: "-5rem",
                zIndex: "1",
                paddingRight: "22px",
              }}
            />
          </PictureContainer>
          <Description
            style={{
              fontFamily: "Bakervville",
              marginTop: "-1rem",
            }}
          >
            ‌✧ A vampire tattoo artist fascinated by nature and dark creatures.
            ✧
          </Description>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "1.5rem",
            }}
          >
            <SocialLink
              href="https://www.instagram.com/countess_rogue/"
              target="_blank"
              style={{
                fontSize: "34px",
                paddingRight: "15px",
              }}
            >
              <FontAwesomeIcon icon={faInstagram} aria-label="Instagram" />
            </SocialLink>

            <SocialLink
              href="https://www.tiktok.com/@countess_rogue"
              target="_blank"
              style={{
                fontSize: "31px",
                paddingLeft: "15px",
              }}
            >
              <FontAwesomeIcon icon={faTiktok} aria-label="TikTok" />
            </SocialLink>
          </div>
        </div>
        <div
          style={{
            textAlign: "center",
            paddingTop: "1.5rem",
          }}
        >
          <img
            src={Logo}
            alt="logo"
            style={{
              height: "3rem",
              paddingBottom: "5px",
            }}
          />
          <div>
            <ButtonLink
              href="https://docs.google.com/forms/d/e/1FAIpQLScPpJrZXHMu42I-OHSR0qIPMiMQdS0VXw9eBjGhRmBX3PJoSw/viewform"
              target="_blank"
            >
              <p
                style={{
                  fontFamily: "Midnight Flame",
                  fontWeight: "light",
                  padding: "10px 0px ",
                  fontSize: "18px",
                  border: "2px solid white",
                  margin: "1rem 1rem",
                  borderRadius: "10px",
                }}
              >
                Formulaire de prise de contact tatouage
              </p>
            </ButtonLink>
            ‌✧
            <ButtonLink
              href="mailto:countess.rogue@gmail.com"
              target="_blank"
              style={{}}
            >
              <p
                style={{
                  fontFamily: "Midnight Flame",
                  fontWeight: "light",
                  padding: "10px 0px ",
                  fontSize: "18px",
                  border: "2px solid white",
                  margin: "1rem 1rem",
                  borderRadius: "10px",
                }}
              >
                M'envoyer un mail
              </p>
            </ButtonLink>
            ‌✧
            <ButtonLink
              href="https://www.rogue.tattoo"
              target="_blank"
              style={{}}
            >
              <p
                style={{
                  fontFamily: "Midnight Flame",
                  fontWeight: "light",
                  padding: "10px 0px ",
                  fontSize: "18px",
                  border: "2px solid white",
                  margin: "1rem 1rem",
                  borderRadius: "10px",
                }}
              >
                Mon site internet
              </p>
            </ButtonLink>
          </div>
          <img
            src={Logo}
            alt="logo"
            style={{
              height: "3rem",
              paddingTop: "5px",
            }}
          />
        </div>
      </motion.div>
    </LinkContainer>
  );
};

export default Links;
