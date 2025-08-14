import React from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import { useMediaQuery } from "react-responsive";
import LoadingSpinner from "./loadingSpinner";

const Label = styled.label`
  font-family: "Bakervville";
  color: white;
  font-size: 12px;
`;
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8); /* Arrière-plan semi-transparent */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000; /* Valeur z-index pour s'assurer qu'il est au-dessus du formulaire */
  backdrop-filter: blur(5px); /* Ajoute un flou au fond */
`;

const SendButton = styled.button`
  background-color: transparent;
  border: 1px solid #343a40;
  border-radius: 25px;
  padding: 16px 43px;
  font-family: "Mina";
  font-size: 12px;
  color: white;
  font-family: "Metal Vengeance";
`;
const Flex = styled.div`
  display: flex;
  margin-top: 2em;
  margin-bottom: 3em;
`;
const FlexButton = styled.div`
  display: flex;
  margin-top: 2em;
  margin-bottom: 3em;
  justify-content: center;
`;
const InputForm = styled.input`
  width: 50em;
  height: 3em;
  background-color: transparent;
  margin-bottom: 20px;
  border: none;
  border-bottom: #343a40 1px solid;
  color: black;
  outline: none;
`;

const InputFormMobile = styled.textarea`
  width: 21em;
  height: 3em;
  background-color: transparent;
  margin-bottom: 20px;
  border: none;
  border-bottom: #343a40 1px solid;
`;
const MessageFrom = styled.textarea`
  height: 10em;
  width: 50em;
  background-color: transparent;
  border: none;
  border-bottom: #343a40 1px solid;
  color: black;
  outline: none;
`;
const MessageFormMobile = styled.textarea`
  height: 10em;
  width: 21em;
  border: none;
  background-color: transparent;
  border-bottom: #343a40 1px solid;
  outline: none;
`;
const FlexInputs = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

function Form() {
  const [formStatus, setFormStatus] = React.useState("Envoyer une demande");
  const [isLoading, setIsLoading] = React.useState(false);
  const [name, setName] = React.useState(""); // Utilisez des états locaux pour les valeurs des champs
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [size, setSize] = React.useState("");
  const [placement, setPlacement] = React.useState("");
  const [number, setNumber] = React.useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setFormStatus("Envoi en cours...");
    const { name, email, message, size, placement, number } = e.target.elements;

    // Send the form data to EmailJS
    emailjs
      .send(
        "service_ez46afr", // Replace with your EmailJS service ID
        "template_fa8b5rt", // Replace with your EmailJS template ID
        {
          from_name: name.value,
          reply_to: email.value,
          message: message.value,
          size: size.value,
          placement: placement.value,
          number: number.value,
        },
        "l0FUOUOrma9W3qPJ8" // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log("Email envoyé avec succès:", response);
          setFormStatus("Message envoyé!");
          setTimeout(() => {
            setFormStatus("Envoyer une demande"); // Reset to the default value
          }, 10000);
          // Réinitialiser les valeurs des champs de formulaire
          setName("");
          setEmail("");
          setNumber("");
          setPlacement("");
          setSize("");
          setMessage("");
        },
        (error) => {
          console.error("ECHEC DE L'ENVOI DE L'EMAIL:", error);
          setFormStatus("ECHEC DE L'ENVOI");
        }
      )
      .finally(() => {
        setIsLoading(false); // Désactivation du chargement une fois terminé
      });
  };

  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <>
      {isLoading ? (
        <Overlay>
          <LoadingSpinner />
        </Overlay>
      ) : null}
      {isMobile ? (
        <div className="container mt-5">
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <FlexInputs>
                <Label>Nom et Prénom :</Label>
                <InputFormMobile
                  className="form-control"
                  type="text"
                  id="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={isLoading}
                />
              </FlexInputs>
            </div>
            <div className="mb-3">
              <FlexInputs>
                <Label>Email :</Label>
                <InputFormMobile
                  className="form-control"
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                />
              </FlexInputs>
            </div>
            <div className="mb-3">
              <FlexInputs>
                <Label>Numéro de Téléphone :</Label>
                <InputFormMobile
                  className="form-control"
                  type="text"
                  id="number"
                  required
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  disabled={isLoading}
                />
              </FlexInputs>
            </div>
            <div className="mb-3">
              <FlexInputs>
                <Label>Emplacement :</Label>
                <InputFormMobile
                  className="form-control"
                  type="text"
                  id="placement"
                  required
                  value={placement}
                  onChange={(e) => setPlacement(e.target.value)}
                  disabled={isLoading}
                />
              </FlexInputs>
            </div>
            <div className="mb-3">
              <FlexInputs>
                <Label>Taille en cm :</Label>
                <InputFormMobile
                  className="form-control"
                  type="text"
                  id="size"
                  required
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                  disabled={isLoading}
                />
              </FlexInputs>
            </div>
            <div className="mb-3">
              <FlexInputs>
                <Label>Message :</Label>
                <MessageFormMobile
                  className="form-control"
                  id="message"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  disabled={isLoading}
                />
              </FlexInputs>
            </div>
            <FlexButton>
              <SendButton type="submit">{formStatus}</SendButton>
            </FlexButton>
          </form>
        </div>
      ) : (
        <div className="container mt-5">
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <FlexInputs>
                <Label>Nom et Prénom :</Label>
                <InputForm
                  className="form-control"
                  type="text"
                  id="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={isLoading}
                />
              </FlexInputs>
            </div>
            <div className="mb-3">
              <FlexInputs>
                <Label>Email :</Label>
                <InputForm
                  className="form-control"
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                />
              </FlexInputs>
            </div>
            <div className="mb-3">
              <FlexInputs>
                <Label>Numéro de Téléphone :</Label>
                <InputForm
                  className="form-control"
                  type="text"
                  id="number"
                  required
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  disabled={isLoading}
                />
              </FlexInputs>
            </div>
            <div className="mb-3">
              <FlexInputs>
                <Label>Emplacement :</Label>
                <InputForm
                  className="form-control"
                  type="text"
                  id="placement"
                  required
                  value={placement}
                  onChange={(e) => setPlacement(e.target.value)}
                  disabled={isLoading}
                />
              </FlexInputs>
            </div>
            <div className="mb-3">
              <FlexInputs>
                <Label>Taille en cm :</Label>
                <InputForm
                  className="form-control"
                  type="text"
                  id="size"
                  required
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                  disabled={isLoading}
                />
              </FlexInputs>
            </div>
            <div className="mb-3">
              <FlexInputs>
                <Label>Ton projet :</Label>
                <MessageFrom
                  className="form-control"
                  id="message"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  disabled={isLoading}
                />
              </FlexInputs>
            </div>
            <Flex>
              <SendButton type="submit">{formStatus}</SendButton>
            </Flex>
          </form>
        </div>
      )}
    </>
  );
}

export default Form;
