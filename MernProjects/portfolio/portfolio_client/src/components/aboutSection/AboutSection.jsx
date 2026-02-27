
export const AboutSection = () => {
    return (
        <div>
            <section id="aboutSection">
                <div className="container">
                    <div className="row align-items-center g-5">


                        <div className="col-lg-5 text-center">
                            <img src="https://avatars.githubusercontent.com/u/62806376?v=4" alt="Backend Developer"
                                 className="about-img"/>
                        </div>


                        <div className="col-lg-7">
                            <div className="aboutSection-card">
                                <h2 className="about-title">Backend Developer</h2>
                                <p className="about-text">
                                    I specialize in building robust, scalable, and secure backend systems. I design
                                    APIs, manage databases, and optimize server performance to deliver seamless digital
                                    experiences.
                                </p>
                                <p className="about-text">
                                    With hands-on experience in <span className="tech-icon"><i
                                    className="bi bi-database"></i> Databases</span>,
                                    <span className="tech-icon"><i className="bi bi-server"></i> Servers</span>, and
                                    <span className="tech-icon"><i className="bi bi-cloud"></i> Cloud Services</span>, I
                                    ensure your backend is fast, reliable, and secure.
                                </p>


                                <div className="aboutSkill">
                                    <div className="skill-name">Node.js <i className="bi bi-code-slash tech-icon"></i>
                                    </div>
                                    <div className="Aboutprogress">
                                        <div className="Aboutprogress-bar" role="progressbar"></div>
                                    </div>
                                </div>

                                <div className="aboutSkill">
                                    <div className="skill-name">Python/Django <i className="bi bi-python tech-icon"></i>
                                    </div>
                                    <div className="Aboutprogress">
                                        <div className="Aboutprogress-bar" role="progressbar"></div>
                                    </div>
                                </div>

                                <div className="aboutSkill">
                                    <div className="skill-name">APIs & Microservices <i
                                        className="bi bi-box-arrow-in-right tech-icon"></i></div>
                                    <div className="Aboutprogress">
                                        <div className="Aboutprogress-bar" role="progressbar"></div>
                                    </div>
                                </div>

                                <a href="#contact" className="btn btn-custom mt-3">Contact Me</a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


        </div>
    )
}