
export default function Contact() {
    return (
<>
            






    
    
    

    <main>
        {/*  breadcrumb area start  */}
        <section className="ca-breadcrumb-area cream-bg-3 p-relative z-index-1 fix">
            <div className="ca-breadcrumb-shape p-absolute bre-sh-1">
                <img src="/img/shape/breadcrumn-shape.png" alt="" />
            </div>
            <div className="ca-breadcrumb-shape p-absolute bre-sh-2">
                <img src="/img/shape/ca-line-shape.png" alt="" />
            </div>
            <div className="container">
                <div className="ca-breadcrumb-content text-center">
                    <h2 className="ca-breadcrumb-title fnw-600">Contact Us </h2>
                    <div className="it-breadcum-link">
                        <a href="/">Home</a>
                        <span><i className="fa-solid fa-angle-right"></i></span>
                        <a className="active" href="#">Contact Us </a>
                    </div>
                </div>
            </div>
        </section>
        {/*  breadcrumb area end  */}

        <section className="ca-contact-inner pt-100 pb-70">
            <div className="container">
                <div className="row">
                    {/*  single box item  */}
                    <div className="col-xl-4 col-md-6 mb-30">
                        <div className="ca-location-3">
                            <div className="ca-location-icbox">
                                <div className="ca-location-icbox-img">
                                    <span><img src="/img/icon/ca-map3.1.svg" alt="" /></span>
                                </div>
                                <div className="ca-location-icbox-text">
                                    <h4 className="ca-title fnw-600 theme-black-3 pb-16">Our Address</h4>
                                    <p>12425 River Ridge Blvd #2 Burnsville MN 55337
                                        
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  single box item  */}
                    <div className="col-xl-4 col-md-6 mb-30">
                        <div className="ca-location-3">
                            <div className="ca-location-icbox">
                                <div className="ca-location-icbox-img">
                                    <span><img src="/img/icon/ca-ph3.2.svg" alt="" /></span>
                                </div>
                                <div className="ca-location-icbox-text">
                                    <h4 className="ca-title fnw-600 theme-black-3 pb-16">Contact Us</h4>
                                    <a href="tel:+16517061022">+1 (651) 706-1022</a> <br />
                                    <a href="tel:+16517061022">+1 (651) 706-1022</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  single box item  */}
                    <div className="col-xl-4 col-md-6 mb-30">
                        <div className="ca-location-3">
                            <div className="ca-location-icbox">
                                <div className="ca-location-icbox-img">
                                    <span><img src="/img/icon/ca-envelop3.3.svg" alt="" /></span>
                                </div>
                                <div className="ca-location-icbox-text">
                                    <h4 className="ca-title fnw-600 theme-black-3 pb-16">Email Us</h4>
                                    <a href="mailto:">infoUnion Trucking@gmail.com</a>
                                    <a href="mailto:">drmtech99.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*  map area  */}

        <div className="ca-maps">
            <iframe src="https://maps.google.com/maps?q=12425+River+Ridge+Blvd+%232,+Burnsville,+MN+55337&t=&z=13&ie=UTF8&iwloc=&output=embed" className="contact-page__google-map" allowFullScreen={true}></iframe>
        </div>
        {/*  map area end  */}

        {/*  contact form start */}
        <section className="ca-conatct-form1 pb-100">
            <div className="container">
                <div className="row">
                    <div className="ca-con-rep-form cream-bg-3 text-center">
                        <h4 className="ca-title fnw-600 theme-black-3 pb-16">Send Us Message</h4>
                        <p className="pb-32">Your email address will not be published. Required fields are marked *</p>
                        <div className="ca-cmt-from">
                            <form action="#">
                                <div className="row">
                                    <div className="col-lg-6 mb-20">
                                        <input type="text" placeholder="First Name" />
                                    </div>
                                    <div className="col-lg-6 mb-20">
                                        <input type="text" placeholder="Last Name" />
                                    </div>
                                    <div className="col-lg-6 mb-20">
                                        <input type="email" placeholder="Email" />
                                    </div>
                                    <div className="col-lg-6 mb-20">
                                        <select className="nice-select wide ca-select" style={{}}>
                                            <option data-display="Service Type">Nothing</option>
                                            <option value="1">01</option>
                                            <option value="2">02</option>
                                            <option value="3">03</option>
                                            <option value="4">04</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-12 mb-20">
                                        <textarea name="message" id="message" placeholder="Message"></textarea>
                                    </div>
                                </div>
                                <div className="ca-radion-btn">
                                    <input type="radio" id="saveinfo" name="fav_language" value="saveinfo" />
                                    <label htmlFor="saveinfo">Save the information's in this browser for next time use</label>
                                </div>
                                <div className="ca-blg-sen-btn text-start">
                                    <button type="submit" className="ca-btn-primary-3 theme-bg-3 text-white br-50"> Submit Now <span><i className="fa-solid fa-angle-right"></i></span></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*  contact form end  */}
    </main>

    <button id="topBtn3"><i className="fa-solid fa-arrow-up"></i></button>

    
    





        </>
);
}




