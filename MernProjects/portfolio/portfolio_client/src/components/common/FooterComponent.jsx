export const FooterComponent = () => {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="row">


                        <div className="col-lg-4 col-md-6 mb-4">
                            <h5>CodeWithAlfin</h5>
                            <p>
                                I build modern, scalable, and high-performing digital solutions
                                to help businesses grow and succeed online.
                            </p>

                            <div className="social-icons mt-3">
                                <a href="#"><i className="bi bi-facebook"></i></a>
                                <a href="#"><i className="bi bi-twitter-x"></i></a>
                                <a href="#"><i className="bi bi-linkedin"></i></a>
                                <a href="#"><i className="bi bi-instagram"></i></a>
                            </div>
                        </div>


                        <div className="col-lg-2 col-md-6 mb-4">
                            <h5>Quick Links</h5>
                            <ul className="list-unstyled">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">Alfin's CV</a></li>
                            </ul>
                        </div>


                        <div className="col-lg-3 col-md-6 mb-4">
                            <h5>Services</h5>
                            <ul className="list-unstyled">
                                <li><a href="#">Web Development</a></li>
                                <li><a href="#">UI/UX Design</a></li>
                                <li><a href="#">Mobile Apps</a></li>
                                <li><a href="#">Digital Marketing</a></li>
                                <li><a href="#">SEO Optimization</a></li>
                            </ul>
                        </div>


                        <div className="col-lg-3 col-md-6 mb-4">
                            <h5>Subscribe</h5>
                            <p>Subscribe to our newsletter for updates.</p>

                            <form>
                                <div className="input-group mb-3">
                                    <input type="email" className="form-control newsletter-input"
                                           placeholder="Your Email"/>
                                        <button className="btn btn-subscribe text-white" type="submit">
                                            Subscribe
                                        </button>
                                </div>
                            </form>

                            <p className="mt-3 mb-0">
                                <i className="bi bi-geo-alt"></i> Al Hamra, Riyash, Saudi Arabia<br/>
                                <i className="bi bi-envelope"></i> alfin.developer@gmail.com<br/>
                                <i className="bi bi-telephone"></i> +966506897109
                            </p>
                        </div>

                    </div>


                    <div className="footer-bottom">
                        © 2026 CodeWithAlfin. All Rights Reserved.
                    </div>

                </div>
            </footer>
        </>
    )
}