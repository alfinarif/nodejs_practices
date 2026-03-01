import {NavLink} from "react-router-dom";

export const HeroSection = () => {
    return (
        <>
            <br/>
            <section className="heroSection hero-wrapper d-flex align-items-center">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <p className="text-primary mono mb-2">> system.init()</p>
                            <h1 className="display-2 fw-bold mb-3">Alfin Arif <br/><span className="text-primary">Web App Developer</span>
                            </h1>
                            <p className="lead text-secondary mb-4">I am a Backend Developer specializing in building secure, scalable, and high-performance server-side applications. I design and develop APIs, manage databases, implement authentication systems, and ensure seamless integration between frontend and backend services.</p>
                            <div className="d-flex gap-3">
                                <a href="#projects" className="btn btn-primary btn-lg rounded-0 px-4">View
                                    Projects</a>
                                <NavLink className="btn btn-info btn-lg rounded-0 px-4" to="/contact"> Leave a
                                    Message </NavLink>

                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="terminal-window shadow-lg">
                                <div className="terminal-header d-flex gap-2 align-items-center px-3">
                                    <span className="dot red"></span>
                                    <span className="dot yellow"></span>
                                    <span className="dot green"></span>
                                    <small className="ms-2 text-secondary mono">alfin — 80x24</small>
                                </div>
                                <div className="terminal-body p-4 mono">
                                    <p><span className="text-success">➜</span> <span className="text-info">~</span> cat
                                        skills.json</p>
                                    <div className="ps-3 terminal-lang">
                                        <span className="text-warning">"languages"</span>: ["NodeJs", "ReactJs",
                                        "Django"],<br/>
                                        <span className="text-warning">"databases"</span>: ["PostgreSQL",
                                        "MongoDB"],<br/>
                                        <span className="text-warning">"cloud"</span>: ["AWS", "Docker"]
                                    </div>
                                    <p className="mt-3"><span className="text-success">➜</span> <span
                                        className="text-info">~</span> <span className="cursor">_</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}