
import {NavLink} from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import {useEffect} from "react";

export const NavbarComponent = () => {

    return (
        <>
            <Toaster/>

            <nav className="navbar navbar-expand-lg fixed-top">
                <div className="container">
                    <NavLink className="navbar-brand" to="/"> ALFIN </NavLink>


                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto align-items-lg-center">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/"> Home </NavLink>

                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about"> About </NavLink>
                            </li>
                            {/*<li className="nav-item">*/}
                            {/*    <a className="nav-link" href="#services">Services</a>*/}
                            {/*</li>*/}
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact"> Contact </NavLink>
                            </li>
                            <li className="nav-item ms-lg-3 mt-3 mt-lg-0">
                                <NavLink className="btn btn-primary btn-custom" to="/login"> Login </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}