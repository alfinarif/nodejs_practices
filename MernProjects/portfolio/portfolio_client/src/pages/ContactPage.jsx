import {Fragment, useEffect} from "react";
import {useLocation} from "react-router-dom";
// local components
import {NavbarComponent} from "../components/common/NavbarComponent.jsx";
import {FooterComponent} from "../components/common/FooterComponent.jsx";
import {ContactSection} from "../components/contactSection/ContactSection.jsx";


export const ContactPage = () => {
    const { pathname } = useLocation();

    useEffect(()=>{
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <Fragment>
            <NavbarComponent/>
            <ContactSection/>
            <FooterComponent/>
        </Fragment>
    )
}