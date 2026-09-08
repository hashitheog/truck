export default function MobileNav() {
    return (
        <>
            {/* offcanvas start */}
            <div className="ca-offcanvas w-bg">
                <div className="ca-offcanvas-wrapper">
                    <div className="ca-offcanvas-header d-flex justify-content-between align-items-center mb-40">
                        <div className="ca-offcanvas-logo">
                            <a href="/"><img src="/img/logo/union-trucking-logo.png" alt="Union Trucking LLC" /></a>
                        </div>
                        <div className="ca-offcanvas-close">
                            <button className="ca-offcanvas-close-toggle"><i className="fal fa-times"></i></button>
                        </div>
                    </div>
                    <div className="ca-offcanvas-menu-3 mb-40">
                        <nav>
                            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                                <li style={{ borderBottom: "1px solid #eee", padding: "10px 0" }}><a href="/" style={{ textDecoration: "none", color: "#333", fontWeight: 600 }}>Home</a></li>
                                <li style={{ borderBottom: "1px solid #eee", padding: "10px 0" }}><a href="/about" style={{ textDecoration: "none", color: "#333", fontWeight: 600 }}>About Us</a></li>
                                <li style={{ borderBottom: "1px solid #eee", padding: "10px 0" }}><a href="/services" style={{ textDecoration: "none", color: "#333", fontWeight: 600 }}>Services</a></li>
                                <li style={{ borderBottom: "1px solid #eee", padding: "10px 0" }}><a href="/equipments" style={{ textDecoration: "none", color: "#333", fontWeight: 600 }}>Equipments</a></li>
                                <li style={{ borderBottom: "1px solid #eee", padding: "10px 0" }}><a href="/apply" style={{ textDecoration: "none", color: "#333", fontWeight: 600 }}>Apply Now</a></li>
                                <li style={{ padding: "10px 0" }}><a href="/contact" style={{ textDecoration: "none", color: "#333", fontWeight: 600 }}>Contact Us</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="ca-offcanvas-contact mb-40">
                        <a href="/apply" className="ca-btn-primary-3 theme-bg-3 text-white br-50">Apply Now <span><i className="fa-solid fa-angle-right"></i></span></a>
                    </div>
                    <div className="ca-offcanvas-contact-info mb-40">
                        <h3 className="ca-offcanvas-sm-title">Contact Info</h3>
                        <div className="ca-sm-single-item-4 ca-sm-single-item-1 mb-20">
                            <div className="icon"><span><i className="fa-solid fa-location-dot"></i></span></div>
                            <div className="ca-sm-single-item-4-content">
                                <p><a href="#">12425 River Ridge Blvd #2 Burnsville MN 55337</a></p>
                            </div>
                        </div>
                        <div className="ca-sm-single-item-4 ca-sm-single-item-1 mb-20">
                            <div className="icon"><span><i className="fa-solid fa-phone"></i></span></div>
                            <div className="ca-sm-single-item-4-content">
                                <p><a href="tel:+16517061022">+1 (651) 706-1022</a></p>
                            </div>
                        </div>
                        <div className="ca-sm-single-item-4 ca-sm-single-item-1 mb-20">
                            <div className="icon"><span><i className="fa-solid fa-envelope"></i></span></div>
                            <div className="ca-sm-single-item-4-content">
                                <p><a href="mailto:contact@uniontruckingllc.com">contact@uniontruckingllc.com</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* offcanvas end */}
        </>
    );
}
