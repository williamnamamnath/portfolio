import styled from "styled-components";

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
               <SocialsDiv>
                <SocialLogo href="https://github.com/williamnamamnath" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></SocialLogo>
                <SocialLogo href="https://www.linkedin.com/in/william-nam-amnath/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></SocialLogo>
                <SocialLogo href="mailto:william.nam-amnath@mail.mcgill.ca" target="_blank" rel="noopener noreferrer" aria-label="Email"><MdEmail /></SocialLogo>
                </SocialsDiv>
              </li>
              <li>
                <div style={{ marginTop: '1.25rem' }}>
                  {/* theme toggle removed */}
                </div>
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
