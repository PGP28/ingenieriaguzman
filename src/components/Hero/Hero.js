import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  ScrollDown,
  ScrollLink,
} from "./HeroElements";

function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <h1>Ingeniería y Construcción Guzmán</h1>
            <h5>Agregando valor a la construccón y siempre listos para tu próximo proyecto</h5>
            <p>
              Reparaciones, Ampliaciones y Remodelaciones.
            </p>
          </HeroLeft>
          <HeroRight>
            <Image
              src="https://raw.githubusercontent.com/PGP28/ingenieriaguzman/main/src/Assets/LogoPrincipial.png"
              alt="LogoPrincipal"
            />
          </HeroRight>
        </HeroWrapper>
        <ScrollDown to="projects">
          <ScrollLink>
          Desplácese hacia abajo
            <img
              src="https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/scroll-down.svg"
              alt="scroll-down"
            />
          </ScrollLink>
        </ScrollDown>
      </HeroContainer>
    </main>
  );
}

export default Hero;
