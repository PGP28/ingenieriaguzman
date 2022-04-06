import React from "react";
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements";
import LogoPrincipal from '../../Assets/LogoPrincipial.png'
import LogoSecundario from '../../Assets/LogoSecundario.png'
import LogoTerciario from '../../Assets/LogoTerciario.png'

const Header = ({ toggle }) => {
  return (
    <div className="Container">
      <Nav>
        <Logo to="/">
          <img
            src={LogoTerciario}
            alt="logo"
          />
        </Logo>
        <NavMenu>
          <NavLink className="menu-item" to="projects" smooth={true}>
            Proyectos
          </NavLink>
          <NavLink className="menu-item" to="about" smooth={true}>
            Nosotros
          </NavLink>
          <NavLink className="menu-item" to="contact" smooth={true}>
            Contacto
          </NavLink>
        </NavMenu>
        {/* <NavBtn>
          <a
            className="btn PrimaryBtn"
            href="https://github.com/gurupawar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </NavBtn> */}
        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;
