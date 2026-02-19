import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import MobileNavbar from "./MobileNavbar";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import name from "../images/w-logo.png";


const NavBar = () => {

    const [menuClicked, setMenuClicked] = useState(false);

    const toggleMenu = () => {
        setMenuClicked(!menuClicked);
    };

    const navigate = useNavigate();

const navAboutMe = () => {
  navigate('/about'); 
};

const navExperience = () => {
    navigate('/experience'); 
  };

    return (
        <>
        <MobileNavbar isOpen={menuClicked} toggleMenu={toggleMenu} />

        <Nav>
            <NavContent>
            <Social href="/" aria-label="Homepage"><Img src={name} alt="website logo"/></Social>
            <Ul>
              <Li>
                <MenuItem onClick={navAboutMe}>About Me</MenuItem>
              </Li>
              <Li>
                <MenuItem onClick={navExperience}>My Background</MenuItem>
              </Li>
              <Li>
                <SocialsDiv>
                <SocialLogo href="https://github.com/williamnamamnath" target="_blank" rel="noopener noreferrer"><FaGithub /></SocialLogo>
                <SocialLogo href="https://www.linkedin.com/in/william-nam-amnath/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></SocialLogo>
                <SocialLogo href="mailto:william.nam-amnath@mail.mcgill.ca" target="_blank" rel="noopener noreferrer"><MdEmail /></SocialLogo>
                </SocialsDiv>
              </Li>
            </Ul>
            <Button onClick={toggleMenu} aria-expanded={menuClicked} aria-controls="mobile-navigation" aria-label={menuClicked ? "Close menu" : "Open menu"}>
                <span className={"material-symbols-outlined"} style={{fontSize: "1.8rem"}}>
                    {menuClicked ? "Close" : "Menu"}
                </span>
            </Button>
            </NavContent>
        </Nav>
        </>
    )
}; 


const Nav = styled.nav`
    padding: 0.5rem 0;
    position: sticky;
    top: 0;
    z-index: 30;
    backdrop-filter: blur(50px);
    background: rgba(0, 0, 0, 0.1);
    box-shadow: 0px 2px 10px #0046EA;

    @media all and (max-width: 1325px) {
        padding: 0 2rem;
    }
`

const NavContent = styled.div`
    max-width: 1300px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;
    margin: 0 auto;
`

const Ul = styled.ul`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    list-style: none;

    @media all and (max-width: 960px) {
        display: none;
    }
`

const Li = styled.li`
    color: white;
    margin: 0 1.5rem;
`

const MenuItem = styled.button`
    text-decoration: none;
    font-size: 1.1rem;
    color: white;
    position: relative;
    cursor: pointer;
    background: transparent;
    border: none;
    padding: 0;
    font-family: inherit;
    display: inline-block;
    text-align: left;
    line-height: 1;

    &:before {
        content: "";
        width: 2rem;
        height: 0.2rem;
        background: linear-gradient(90deg, #3672FF 0%, #0046EA 100%);
        border-radius: 0.5rem;
        position: absolute;
        bottom: -0.6rem;
        opacity: 0;
        transform: translateX(-1.5rem);
        transition: all 0.3s ease;
    }

    &:hover::before {
        width: 100%;
        transform: translateX(0);
        opacity: 1;
    }
`

const Button = styled.button`
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 0.4rem;
    color: white;
    background-color: transparent;
    line-height: 0;
    cursor: pointer;
    transition: all 0.4s ease;
    display: none;

    &:hover {
        color: #0046EA;
    }

    @media all and (max-width: 960px) {
        display: block;
    }
`

const Social = styled.a`

&:hover {
  cursor: pointer;
}
`

const Img = styled.img`
    height: 3.6rem;
    width: 3.6rem;

    @media all and (min-width: 360px) and (max-width: 969px) {
        height: 2.7rem;
        width: 2.7rem;
    }
`

const SocialsDiv = styled.div`
    display: flex; 
    justify-content: center;
    align-items: center;
    gap: 2rem;
    color: black;
    border-radius: 30px;
    margin: 0;
    padding: 1rem 0;
`

const SocialLogo = styled.a`
    transition: transform 0.3s ease;
    color: white;
    font-size: 1.5rem;

&:hover {
  transform: scale(1.2);
  cursor: pointer;
}
`

export default NavBar;
