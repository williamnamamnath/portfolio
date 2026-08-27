import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const MobileNavbar = ({ isOpen, toggleMenu }) => {

    return (
        <>
        <div id="mobile-navigation" className={`mobile-nav ${isOpen ? "active" : ""}`} onClick={(e) => { if (e.target === e.currentTarget) toggleMenu(); }}>
            <NavContainer onClick={(e) => e.stopPropagation()}>
                <CloseMenu role="heading" onClick={toggleMenu} aria-label="Close menu">William Nam-Amnath</CloseMenu>
                <hr/>
                <br/>

            <ul>
              <li>
                <MobileNavLink to="/" onClick={toggleMenu}>Home</MobileNavLink>
              </li>
              <li>
                <MobileNavLink to="/experience" onClick={toggleMenu}>My Academic and Professional Experience</MobileNavLink>
              </li>
              <li>
                <MobileNavAnchor href="/#projects" onClick={toggleMenu}>My Projects</MobileNavAnchor>
              </li>
              <li style={{ marginTop: '1rem' }}>
               <SocialsDiv>
                <SocialLogo href="https://github.com/williamnamamnath" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></SocialLogo>
                <SocialLogo href="https://www.linkedin.com/in/william-nam-amnath/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></SocialLogo>
                <SocialLogo href="mailto:william.nam-amnath@mail.mcgill.ca" target="_blank" rel="noopener noreferrer" aria-label="Email"><MdEmail /></SocialLogo>
                </SocialsDiv>
              </li>
            </ul>
            </NavContainer>
        </div>
        </>
    )
}; 

const CloseMenu = styled.a`
    text-decoration: none;
    text-align: center;
    font-size: 2rem;
    color: white;
    position: relative;
    cursor: pointer;
`

const NavContainer = styled.div`
    width: 60vw;
    height: 100vh;
    background-color: #0D164B;
    padding: 2rem;
`

const MobileNavLink = styled(NavLink)`
    display: block;
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 500;
    padding: 0.5rem 0;
    margin-bottom: 0.5rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    transition: color 0.2s ease;

    &:hover {
        color: #ffffff;
    }

    &.active {
        color: #3672FF;
    }
`

const MobileNavAnchor = styled.a`
    display: block;
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 500;
    padding: 0.5rem 0;
    margin-bottom: 0.5rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    transition: color 0.2s ease;

    &:hover {
        color: #ffffff;
    }
`

const SocialsDiv = styled.div`
    display: flex; 
    justify-content: left;
    align-items: left;
    gap: 2rem;
    color: black;
    border-radius: 30px;
    margin: 0;
    padding: 1rem 0;
`

const SocialLogo = styled.a`
  cursor: pointer;
  color: white;
  font-size: 1.5rem;
`

export default MobileNavbar;
