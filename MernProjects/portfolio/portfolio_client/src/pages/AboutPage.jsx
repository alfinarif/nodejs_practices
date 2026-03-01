import {Fragment, useEffect} from 'react'
import {useLocation} from "react-router-dom";
// local components
import {NavbarComponent} from "../components/common/NavbarComponent.jsx";
import {FooterComponent} from "../components/common/FooterComponent.jsx";
import {AboutSection} from "../components/aboutSection/AboutSection.jsx";



export const AboutPage = () => {
    const { pathname } = useLocation();

    useEffect(()=>{
        window.scrollTo(0, 0);
    }, [pathname]);


    return (
        <Fragment>
            <NavbarComponent/>
            <AboutSection/>
            <FooterComponent/>
        </Fragment>
    )
}