import { useState } from "react";

import styled from "styled-components";
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
            <Button onClick={toggleMenu} aria-expanded={menuClicked} aria-controls="mobile-navigation" aria-label={menuClicked ? "Close menu" : "Open menu"}>
                <span className={"material-symbols-outlined"} style={{fontSize: "1.8rem"}}>
                    {menuClicked ? "close" : "menu"}
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

export default NavBar;
