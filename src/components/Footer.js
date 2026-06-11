import styled from "styled-components";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const FooterAnchor = styled.a`
    text-decoration: none;
    color: white;
    
    &:hover {
        text-decoration: underline;
    }
`

const Footer = () => {

    return (
        <>
            <footer className="footer d-flex justify-content-between align-items-center flex-wrap">
                <FooterAnchor href="/">
                    <span>© William Nam-Amnath</span>
                </FooterAnchor>
                <span className="footer-tagline">Full-Stack Web Developer · Montreal, Canada</span>
                <div className="footer-socials">
                    <FooterAnchor href="https://github.com/williamnamamnath" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="footer-social-link">
                        <FaGithub />
                    </FooterAnchor>
                    <FooterAnchor href="https://www.linkedin.com/in/william-nam-amnath/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="footer-social-link">
                        <FaLinkedin />
                    </FooterAnchor>
                    <FooterAnchor href="mailto:william.nam-amnath@mail.mcgill.ca" target="_blank" rel="noopener noreferrer" aria-label="Email" className="footer-social-link">
                        <MdEmail />
                    </FooterAnchor>
                </div>
            </footer>
        </>
    )
}

export default Footer;