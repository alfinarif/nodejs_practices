export const ServiceSection = () => {
    return (
        <>
            <section id="services" className="py-5">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="fw-bold">Our Premium Services</h2>
                        <p className="text-muted">We deliver top-notch solutions to elevate your business.</p>
                    </div>
                    <div className="row g-4" id="services-cards">
                        <div className="col-md-6 col-lg-4">
                            <div className="service-card p-5 text-center h-100">
                                <i className="bi bi-laptop display-3 mb-3"></i>
                                <h5 className="fw-bold mb-3">Web Development</h5>
                                <p>Create stunning and responsive websites tailored to your brand.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="service-card p-5 text-center h-100">
                                <i className="bi bi-phone display-3 mb-3"></i>
                                <h5 className="fw-bold mb-3">Mobile Apps</h5>
                                <p>Intuitive mobile applications for Android & iOS with seamless UX.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="service-card p-5 text-center h-100">
                                <i className="bi bi-graph-up display-3 mb-3"></i>
                                <h5 className="fw-bold mb-3">SEO Optimization</h5>
                                <p>Boost your online presence with powerful SEO strategies.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}