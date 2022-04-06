import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

import styled from "styled-components";

export const SocialDiv = styled.div`
  margin-top: 2rem;
  display: none;
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
  }

  a {
    font-size: 2.5rem;
    color: #151418;
    transition: 0.2s ease-in;
    &:hover {
      color: rgb(57, 134, 250);
    }
  }

  .item + .item {
    margin-left: 2rem;
  }

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

function SocialIcon() {
  return (
    <SocialDiv>
      <ul>
        <li className="item">
          <a
            href="https://www.facebook.com/Ingenier%C3%ADa-y-Constructora-Guzm%C3%A1n-100658432384982"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
        </li>
        <li className="item">
          <a
            href="https://web.whatsapp.com/send?phone=56965552368&app=facebook&entry_point=page_cta&fbclid=IwAR1xXvpsd7AJCsizPVgJrWGt-RKVGhxB80L-rP2Ds7WbRdHLEdSw0X_NZ_A"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
        </li>
        <li className="item">
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </li>
      </ul>
    </SocialDiv>
  );
}

export default SocialIcon;
