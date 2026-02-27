import {Fragment, useEffect} from 'react'
import {NavbarComponent} from "../components/common/NavbarComponent.jsx";
import {HeroSection} from "../components/heroSection/HeroSection.jsx";
import {SkillSection} from "../components/skillSection/SkillSection.jsx";
import {ServiceSection} from "../components/serviceSection/ServiceSection.jsx";
import {FooterComponent} from "../components/common/FooterComponent.jsx";



export const HomePage = () => {

    return (
        <Fragment>
            <NavbarComponent/>
            <HeroSection/>
            <SkillSection/>
            <ServiceSection/>
            <FooterComponent/>
        </Fragment>
    )
}