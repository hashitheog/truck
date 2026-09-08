export default function Equipments() {
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
                    <h2 className="ca-breadcrumb-title fnw-600">Our Equipments</h2>
                    <div className="it-breadcum-link">
                        <a href="/">Home</a>
                        <span><i className="fa-solid fa-angle-right"></i></span>
                        <a className="active" href="#">Equipments</a>
                    </div>
                </div>
            </div>
        </section>
        {/* breadcrumb area end */}

        {/* equipment area start */}
        <section className="ca-iner-servics pt-100 pb-100">
            <div className="container">
                <div className="text-center mb-60">
                    <h5 className="ca-section-subtitle subtitle-bg-6 p-relative theme-color-3 br-50">Our Fleet</h5>
                    <h2 className="ca-section-title theme-black-3 fnw-600 pt-16">Modern Equipment for Every Job</h2>
                    <p className="pt-16">We maintain a diverse fleet of well-maintained trucks and trailers to handle any freight need across the United States.</p>
                </div>
                <div className="row">
                    {/* item */}
                    <div className="col-xl-4 col-md-6 mb-30">
                        <div className="ca-ser-icon-box ca-ser-icon-box-2 fix p-relative cream-bg-3 z-index-1 p-32 br-7">
                            <div className="ca-about-icon">
                                <div className="ca-about-ic ca-ser-ic">
                                    <img src="/img/icon/ca-iner-ser1.1.svg" alt="" />
                                </div>
                            </div>
                            <div className="ca-service-content ca-service-content-iner">
                                <h4 className="ca-title fnw-700 pb-16 pt-32">53ft Dry Van Trailers</h4>
                                <p className="pb-24">Our standard dry van trailers are perfect for protecting general freight from weather and theft during long-haul runs.</p>
                            </div>
                        </div>
                    </div>
                    {/* item */}
                    <div className="col-xl-4 col-md-6 mb-30">
                        <div className="ca-ser-icon-box ca-ser-icon-box-2 fix p-relative cream-bg-3 z-index-1 p-32 br-7">
                            <div className="ca-about-icon">
                                <div className="ca-about-ic ca-ser-ic">
                                    <img src="/img/icon/ca-iner-ser1.2.svg" alt="" />
                                </div>
                            </div>
                            <div className="ca-service-content ca-service-content-iner">
                                <h4 className="ca-title fnw-700 pb-16 pt-32">Refrigerated Reefer Trailers</h4>
                                <p className="pb-24">Temperature-controlled trailers for perishable goods, pharmaceuticals, and any cargo requiring a cold chain environment.</p>
                            </div>
                        </div>
                    </div>
                    {/* item */}
                    <div className="col-xl-4 col-md-6 mb-30">
                        <div className="ca-ser-icon-box ca-ser-icon-box-2 fix p-relative cream-bg-3 z-index-1 p-32 br-7">
                            <div className="ca-about-icon">
                                <div className="ca-about-ic ca-ser-ic">
                                    <img src="/img/icon/ca-iner-ser1.3.svg" alt="" />
                                </div>
                            </div>
                            <div className="ca-service-content ca-service-content-iner">
                                <h4 className="ca-title fnw-700 pb-16 pt-32">Flatbed Trailers</h4>
                                <p className="pb-24">Ideal for oversized, overweight, and dimensional freight including steel, lumber, machinery, and construction materials.</p>
                            </div>
                        </div>
                    </div>
                    {/* item */}
                    <div className="col-xl-4 col-md-6 mb-30">
                        <div className="ca-ser-icon-box ca-ser-icon-box-2 fix p-relative cream-bg-3 z-index-1 p-32 br-7">
                            <div className="ca-about-icon">
                                <div className="ca-about-ic ca-ser-ic">
                                    <img src="/img/icon/ca-iner-ser1.4.svg" alt="" />
                                </div>
                            </div>
                            <div className="ca-service-content ca-service-content-iner">
                                <h4 className="ca-title fnw-700 pb-16 pt-32">Kenworth T680 Trucks</h4>
                                <p className="pb-24">Our primary Class 8 semi trucks, known for fuel efficiency, comfort, and reliability across long-haul interstate routes.</p>
                            </div>
                        </div>
                    </div>
                    {/* item */}
                    <div className="col-xl-4 col-md-6 mb-30">
                        <div className="ca-ser-icon-box ca-ser-icon-box-2 fix p-relative cream-bg-3 z-index-1 p-32 br-7">
                            <div className="ca-about-icon">
                                <div className="ca-about-ic ca-ser-ic">
                                    <img src="/img/icon/ca-iner-ser1.5.svg" alt="" />
                                </div>
                            </div>
                            <div className="ca-service-content ca-service-content-iner">
                                <h4 className="ca-title fnw-700 pb-16 pt-32">Freightliner Cascadia</h4>
                                <p className="pb-24">High-performance aerodynamic trucks equipped with advanced safety systems and GPS tracking for real-time visibility.</p>
                            </div>
                        </div>
                    </div>
                    {/* item */}
                    <div className="col-xl-4 col-md-6 mb-30">
                        <div className="ca-ser-icon-box ca-ser-icon-box-2 fix p-relative cream-bg-3 z-index-1 p-32 br-7">
                            <div className="ca-about-icon">
                                <div className="ca-about-ic ca-ser-ic">
                                    <img src="/img/icon/ca-iner-ser1.6.svg" alt="" />
                                </div>
                            </div>
                            <div className="ca-service-content ca-service-content-iner">
                                <h4 className="ca-title fnw-700 pb-16 pt-32">ELD & GPS Systems</h4>
                                <p className="pb-24">All units are equipped with Electronic Logging Devices and live GPS tracking ensuring compliance and full shipment visibility.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* equipment area end */}
        </main>
        </>
    );
}
