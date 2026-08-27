import styled from "styled-components";


const Footer = () => {

    return (
        <>
            <footer className="footer d-flex justify-content-center align-items-center flex-wrap">
                <FooterAnchor href="/">
                    <span>© William Nam-Amnath</span>
                </FooterAnchor>
            </footer>
        </>
    )
}

export default Footer;

const FooterAnchor = styled.a`
    text-decoration: none;
    color: white;
    
    &:hover {
        text-decoration: underline;
    }
`