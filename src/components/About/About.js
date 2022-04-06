import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">Nosotros</div>
        <div className="BigCard">
          <Image
            src="https://raw.githubusercontent.com/PGP28/ingenieriaguzman/main/src/Assets/LogoSecundario.png"
            alt="LogoSecundario"
          />
          <div className="AboutBio">
            {/* Hello! My name is <strong>Your Name</strong> Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. */}
            Guzmán Ingeniería y Construcción es una pyme familiar, dedicada a la
            ampliación, remodelación y reparación de tu entorno o lugar favorito.
            Creada el año 2020, sin perjuicio de que 5 años antes, ya estábamos inmersos
            en el rubro de la construcción.
            Nuestra marca poco a poco se ha posesionado, siendo nuestros mismos
            clientes con sus recomendaciones, quienes nos han ayudado a expandirnos.
          </div>
          <div className="AboutBio tagline2">
          <strong>Dentro de nuestro rubro hacemos:</strong>
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
