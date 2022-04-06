import React from "react";
import SocialIcon from "../SocialIcon/SocialIcon";
import { ContactWrapper, Email } from "./ContactElements";
function Contact() {
  return (
    <ContactWrapper id="contact">
      <div className="Container">
        <div className="SectionTitle">Ponerse en contacto</div>
        <div className="BigCard">
          <Email>
            <span>ingenieriaguzman1@gmail.com</span>
            <a
              className="btn PrimaryBtn"
              href="mailto:ingenieriaguzman1@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Enviar correo
            </a>
          </Email>
        </div>
        <SocialIcon />
      </div>
    </ContactWrapper>
  );
}

export default Contact;
