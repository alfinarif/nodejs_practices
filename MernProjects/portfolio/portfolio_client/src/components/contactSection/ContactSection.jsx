export const ContactSection = () => {
    return (
        <>
            <section className="contact-section">
                <div className="container">
                    <div className="row g-5 align-items-center">


                        <div className="col-lg-5">
                            <div className="contact-card">
                                <h2 className="fw-bold mb-4">Let's Connect</h2>
                                <div className="contact-info">
                                    <p><i className="bi bi-geo-alt-fill"></i> 123 Modern Street, NY</p>
                                    <p><i className="bi bi-envelope-fill"></i> hello@example.com</p>
                                    <p><i className="bi bi-phone-fill"></i> +1 234 567 890</p>
                                </div>
                                <div className="mt-4">
                                    <a href="#" className="text-white me-3 fs-4"><i className="bi bi-facebook"></i></a>
                                    <a href="#" className="text-white me-3 fs-4"><i className="bi bi-twitter"></i></a>
                                    <a href="#" className="text-white fs-4"><i className="bi bi-instagram"></i></a>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-7">
                            <div className="contact-card">
                                <h2 className="fw-bold mb-4">Send Message</h2>
                                <form>
                                    <div className="form-floating mb-4">
                                        <input type="text" className="form-control" id="name" placeholder="Your Name"/>
                                            <label htmlFor="name">Your Name</label>
                                    </div>

                                    <div className="form-floating mb-4">
                                        <input type="email" className="form-control" id="email"
                                               placeholder="Your Email"/>
                                            <label htmlFor="email">Your Email</label>
                                    </div>

                                    <div className="form-floating mb-4">
                                        <textarea className="form-control textareaCss" placeholder="Your Message" id="message">

                                        </textarea>
                                        <label htmlFor="message">Your Message</label>
                                    </div>

                                    <button type="submit" className="btn btn-modern w-100">Send Message</button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}