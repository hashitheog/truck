export default function Apply() {
    return (
        <>
        <main>
        {/* breadcrumb area start */}
        <section className="ca-breadcrumb-area cream-bg-3 p-relative z-index-1 fix">
            <div className="ca-breadcrumb-shape p-absolute bre-sh-1">
                <img src="/img/shape/breadcrumn-shape.png" alt="" />
            </div>
            <div className="container">
                <div className="ca-breadcrumb-content text-center">
                    <h2 className="ca-breadcrumb-title fnw-600">Apply Now</h2>
                    <div className="it-breadcum-link">
                        <a href="/">Home</a>
                        <span><i className="fa-solid fa-angle-right"></i></span>
                        <a className="active" href="#">Apply Now</a>
                    </div>
                </div>
            </div>
        </section>
        {/* breadcrumb area end */}

        {/* apply section start */}
        <section className="ca-conatct-form1 pt-100 pb-100">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-10">
                        <div className="text-center mb-60">
                            <h5 className="ca-section-subtitle subtitle-bg-6 p-relative theme-color-3 br-50">Join Our Team</h5>
                            <h2 className="ca-section-title theme-black-3 fnw-600 pt-16">Driver Job Application</h2>
                            <p className="pt-16">We are always looking for experienced, safety-focused CDL drivers. Fill out the form below and a member of our team will reach out to you shortly.</p>
                        </div>
                        <div className="ca-contact-form">
                            <form action="#" method="POST">
                                <div className="row">
                                    <div className="col-md-6 mb-20">
                                        <input type="text" name="first_name" placeholder="First Name *" className="ca-input" required />
                                    </div>
                                    <div className="col-md-6 mb-20">
                                        <input type="text" name="last_name" placeholder="Last Name *" className="ca-input" required />
                                    </div>
                                    <div className="col-md-6 mb-20">
                                        <input type="email" name="email" placeholder="Email Address *" className="ca-input" required />
                                    </div>
                                    <div className="col-md-6 mb-20">
                                        <input type="tel" name="phone" placeholder="Phone Number *" className="ca-input" required />
                                    </div>
                                    <div className="col-md-6 mb-20">
                                        <input type="text" name="cdl_class" placeholder="CDL Class (A/B) *" className="ca-input" required />
                                    </div>
                                    <div className="col-md-6 mb-20">
                                        <input type="text" name="experience" placeholder="Years of Experience *" className="ca-input" required />
                                    </div>
                                    <div className="col-md-12 mb-20">
                                        <input type="text" name="endorsements" placeholder="Endorsements (HazMat, Tanker, etc.)" className="ca-input" />
                                    </div>
                                    <div className="col-md-12 mb-20">
                                        <textarea name="message" placeholder="Tell us about yourself and why you want to join Union Trucking LLC..." className="ca-textarea" rows={5}></textarea>
                                    </div>
                                    <div className="col-md-12 text-center">
                                        <button type="submit" className="ca-btn-primary-3 theme-bg-3 text-white br-50">Submit Application <span><i className="fa-solid fa-angle-right"></i></span></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* apply section end */}
        </main>
        </>
    );
}
