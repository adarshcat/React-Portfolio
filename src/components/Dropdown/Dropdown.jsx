import React from "react";
import { FaTimes } from "react-icons/fa";
import styled from "@emotion/styled";
import { Link as ScrollLink } from "react-scroll";
import { scroller } from 'react-scroll';
import { useLocation, useNavigate } from 'react-router';

const SiderBar = styled.div`
  background: #151418;
  position: fixed;
  height: 100%;
  width: 100%;
  /* top: 0; */
  left: 0;
  z-index: 999;
  transition: 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

const CloseIcon = styled(FaTimes)`
  font-size: 2rem;
  color: #fff;
  position: absolute;
  right: 2rem;
  top: 2rem;
  cursor: pointer;
`;
export const NavMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .menu-item + .menu-item {
    margin-top: 2rem;
  }
`;

export const NavLink = styled.button`
  color: #fff;
  cursor: pointer;
  font-size: 1.7rem;

  &:hover {
    color: rgb(119, 119, 121);
  }
  background: transparent;
  border: none;
`;

export const NavBtn = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
  font-size: 1.7rem;
`;

function Dropdown({ isOpen, toggle }) {
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

    toggle()
  };

  return (
    <SiderBar isOpen={isOpen} onClick={toggle}>
      <CloseIcon onClick={toggle} />
      <NavMenu>
        <NavLink
          onClick={() => goToSection("projects")}
          className="menu-item"
          to="projects"
        >
          Projects
        </NavLink>
        <NavLink
          onClick={() => goToSection("reviews")}
          className="menu-item"
          to="reviews"
        >
          Reviews
        </NavLink>
        <NavLink
          onClick={() => goToSection("about")}
          className="menu-item"
          to="about"
        >
          About
        </NavLink>
        <NavLink
          onClick={() => goToSection("contact")}
          className="menu-item"
          to="contact"
        >
          Contact
        </NavLink>
      </NavMenu>
      <NavBtn onClick={toggle}>
        <a
          className="btn PrimaryBtn"
          href="/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </NavBtn>
    </SiderBar>
  );
}

export default Dropdown;
