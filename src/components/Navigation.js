import { useContext } from 'react';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap"
import { useTranslation } from "react-i18next";
import LocaleContext from "../LocaleContext";    
import i18n from "../i18n"


const changeLocale =(l)=>{
    const {locale} = "";//useContext(LocaleContext);
  if(locale !==l){
    i18n.changeLanguage(l);
  }
}
function Navigation () {
    const {t} = useTranslation();
    return(
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>
                    React i18n Tutorial <a href='https://aglowiditsolutions.com/blog/react-internationalization-localization/'> link to code</a>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title={t("language")} id="basic-nav-dropdown">
                            <NavDropdown.Item href="#" onClick={()=> changeLocale("en")}>English</NavDropdown.Item>
                            <NavDropdown.Item href="#" onClick={()=> changeLocale("cn")}>Chinese</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;