import React from "react";
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements";
import { scroller } from 'react-scroll';
import { useLocation, useNavigate } from 'react-router';

const Header = ({ toggle }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const goToSection = (sectionName) => {
    if (location.pathname === "/") {
      // already on home → normal scroll
      scroller.scrollTo(sectionName, {
        smooth: true,
        duration: 600,
      });
    } else {
      // navigate to home + request scroll after mount
      navigate("/", { state: { scrollTo: sectionName } });
    }
  };
  
  return (
    <div className="Container" style={{padding: 0}}>
      <Nav>
        <Logo to="/">
          <img
            src="/logo.png"
            alt="logo"
          />
        </Logo>
        <NavMenu>
          <NavLink className="menu-item" onClick={() => goToSection("projects")}>
            Projects
          </NavLink>
          <NavLink className="menu-item" onClick={() => goToSection("reviews")}>
            Reviews
          </NavLink>
          <NavLink className="menu-item" onClick={() => goToSection("about")}>
            About
          </NavLink>
          <NavLink className="menu-item" onClick={() => goToSection("contact")}>
            Contact
          </NavLink>
        </NavMenu>
        <NavBtn>
          <a
            className="btn PrimaryBtn"
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </NavBtn>
        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;
