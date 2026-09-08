export default function Navbar() {
    return (
        <>
            {/* Contact Strip */}
            <div style={{ backgroundColor: "#111", borderBottom: "1px solid #222", padding: "8px 0", fontSize: "13px", color: "#aaa" }}>
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center flex-wrap" style={{ gap: "8px" }}>
                        <div className="d-flex align-items-center" style={{ gap: "24px", flexWrap: "wrap" }}>
                            <a href="tel:+16517061022" style={{ color: "#aaa", textDecoration: "none", display: "flex", alignItems: "center", gap: "6px" }}>
                                <i className="fa-solid fa-phone" style={{ color: "#FF6600", fontSize: "12px" }}></i> +1 (651) 706-1022
                            </a>
                            <a href="mailto:contact@uniontruckingllc.com" style={{ color: "#aaa", textDecoration: "none", display: "flex", alignItems: "center", gap: "6px" }}>
                                <i className="fa-solid fa-envelope" style={{ color: "#FF6600", fontSize: "12px" }}></i> contact@uniontruckingllc.com
                            </a>
                        </div>
                        <a href="https://maps.google.com/?q=12425+River+Ridge+Blvd+%232+Burnsville+MN+55337" target="_blank" rel="noreferrer" style={{ color: "#aaa", textDecoration: "none", display: "flex", alignItems: "center", gap: "6px" }}>
                            <i className="fa-solid fa-location-dot" style={{ color: "#FF6600", fontSize: "12px" }}></i> 12425 River Ridge Blvd #2 Burnsville MN 55337
                        </a>
                    </div>
                </div>
            </div>

            {/* Header Area Start */}
            <header className="header-area-3 stiky">
                <div className="container header-3">
                    <div className="row align-items-center">
                        <div className="col-xl-3 col-lg col-md-6 col-6">
                            <div className="ca-logo">
                                <a href="/"><img src="/img/logo/union-trucking-logo.png" alt="Union Trucking LLC" /></a>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7 d-none d-lg-block">
                            <div className="ca-main-menu-3">
                                <nav className="ca-mobile-menu-active-3">
                                    <ul>
                                        <li><a href="/">Home</a></li>
                                        <li><a href="/about">About Us</a></li>
                                        <li><a href="/services">Services</a></li>
                                        <li><a href="/equipments">Equipments</a></li>
                                        <li><a href="/apply">Apply Now</a></li>
                                        <li><a href="/contact">Contact Us</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg col-md-6 col-6">
                            <div className="ca-btn-header d-none d-lg-block text-end">
                                <a href="/apply" className="ca-btn-primary-3 theme-bg-3 text-white br-50">Apply Now <span><i className="fa-solid fa-angle-right"></i></span></a>
                            </div>
                            <div className="ca-header-action-item d-lg-none text-end">
                                <button type="button" className="ca-offcanvas-toogle">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="16" viewBox="0 0 30 16">
                                        <rect x="10" width="20" height="2" fill="currentColor"></rect>
                                        <rect x="5" y="7" width="25" height="2" fill="currentColor"></rect>
                                        <rect x="10" y="14" width="20" height="2" fill="currentColor"></rect>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* Header area end */}
        </>
    );
}
