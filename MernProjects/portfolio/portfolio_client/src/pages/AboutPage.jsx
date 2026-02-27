import {Fragment} from 'react'
import {NavbarComponent} from "../components/common/NavbarComponent.jsx";
import {FooterComponent} from "../components/common/FooterComponent.jsx";
import {AboutSection} from "../components/aboutSection/AboutSection.jsx";


export const AboutPage = () => {
    return (
        <Fragment>
            <NavbarComponent/>
            <AboutSection/>
            <FooterComponent/>
        </Fragment>
    )
}