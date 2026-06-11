import { useState } from "react";

import styled from "styled-components";
import { NavLink } from "react-router-dom";
import MobileNavbar from "./MobileNavbar";

import name from "../images/w-logo.png";


const NavBar = () => {

    const [menuClicked, setMenuClicked] = useState(false);

    const toggleMenu = () => {
        setMenuClicked(!menuClicked);
    };

    return (
        <>
        <MobileNavbar isOpen={menuClicked} toggleMenu={toggleMenu} />

        <Nav>
            <NavContent>
            <Social href="/" aria-label="Homepage"><Img src={name} alt="website logo"/></Social>
            <Ul>
              <Li>
                <StyledNavLink to="/">Home</StyledNavLink>
              </Li>
              <Li>
                <StyledNavLink to="/experience">Experience</StyledNavLink>
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
    margin: 0 0.5rem;
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

const StyledNavLink = styled(NavLink)`
    color: rgba(255, 255, 255, 0.75);
    text-decoration: none;
    font-weight: 500;
    font-size: 1rem;
    padding: 0.4rem 0.8rem;
    border-radius: 6px;
    transition: color 0.2s ease, background 0.2s ease;

    &:hover {
        color: #ffffff;
        background: rgba(255, 255, 255, 0.08);
    }

    &.active {
        color: #ffffff;
        background: rgba(54, 114, 255, 0.25);
        border-bottom: 2px solid #3672FF;
    }
`

export default NavBar;
