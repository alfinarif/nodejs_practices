export const SkillSection = () => {
    return (
        <>

            <section id="skills" className="py-5 bg-gray-100">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="fw-bold">Most Used Technologies</h2>
                        <p className="text-muted">Expertise in modern web technologies</p>
                    </div>

                    <div className="row g-4 justify-content-center">
                        <div className="col-6 col-md-3">
                            <div className="skill-card text-center p-4 shadow-sm rounded">
                                <div className="skill-circle" data-skill="95">
                                    <span className="skill-icon">🌐</span>
                                </div>
                                <h5 className="mt-3">Python</h5>
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className="skill-card text-center p-4 shadow-sm rounded">
                                <div className="skill-circle" data-skill="90">
                                    <span className="skill-icon">🎨</span>
                                </div>
                                <h5 className="mt-3">Django</h5>
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className="skill-card text-center p-4 shadow-sm rounded">
                                <div className="skill-circle" data-skill="85">
                                    <span className="skill-icon">💻</span>
                                </div>
                                <h5 className="mt-3">NodeJs</h5>
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className="skill-card text-center p-4 shadow-sm rounded">
                                <div className="skill-circle" data-skill="90">
                                    <span className="skill-icon">⚡</span>
                                </div>
                                <h5 className="mt-3">ReactJs</h5>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}