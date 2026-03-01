import {NavbarComponent} from "../components/common/NavbarComponent.jsx";
import {FooterComponent} from "../components/common/FooterComponent.jsx";
import {Fragment} from "react";
import {ContactSection} from "../components/contactSection/ContactSection.jsx";

export const ContactPage = () => {
    return (
        <Fragment>
            <NavbarComponent/>
            <ContactSection/>
            <FooterComponent/>
        </Fragment>
    )
}