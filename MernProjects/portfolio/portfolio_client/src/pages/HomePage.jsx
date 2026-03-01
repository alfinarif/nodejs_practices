import {Fragment, useEffect} from 'react'
import {useLocation} from "react-router-dom";
import toast from 'react-hot-toast';
// local components
import {NavbarComponent} from "../components/common/NavbarComponent.jsx";
import {HeroSection} from "../components/heroSection/HeroSection.jsx";
import {SkillSection} from "../components/skillSection/SkillSection.jsx";
import {ServiceSection} from "../components/serviceSection/ServiceSection.jsx";
import {FooterComponent} from "../components/common/FooterComponent.jsx";




export const HomePage = () => {
    const { pathname } = useLocation();
    useEffect(()=>{
        window.scrollTo(0, 0);
        toast.success("This is just a STATIC Portfolio, it's under development!")
    }, [pathname]);

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