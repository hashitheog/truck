
export default function ServiceLeft() {
    return (
<>
            






    
    
    

    {/*  main  */}
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
                    <h2 className="ca-breadcrumb-title fnw-600">Freight Management</h2>
                    <div className="it-breadcum-link">
                        <a href="/">Home</a>
                        <span><i className="fa-solid fa-angle-right"></i></span>
                        <a href="/service">Service</a>
                        <span><i className="fa-solid fa-angle-right"></i></span>
                        <a className="active" href="#">Freight Management</a>
                    </div>
                </div>
            </div>
        </section>
        {/*  breadcrumb area end  */}

        {/*  service left  */}
        <div className="ca-service-lft-area pt-100 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 mb-30">
                        {/*  sidebar area  */}
                        <div className="ca-sidebar-area mr-50">
                            {/*  search  */}
                            <div className="ca-search ca-padding cream-bg-3 br-7 mb-30">
                                <h4 className="ca-title fnw-600 theme-black-3 pb-16">Search</h4>
                                <div className="ca-search-box p-relative z-index-1">
                                    <input type="text" placeholder="Search.." />
                                    <div className="ca-sea-icon">
                                        <span><i className="fa-solid fa-magnifying-glass"></i></span>
                                    </div>
                                </div>
                            </div>
                            {/*  service list  */}
                            <div className="ca-servic-list ca-padding cream-bg-3 br-7 mb-30">
                                <h4 className="ca-title fnw-600 theme-black-3 pb-24">Our Services</h4>
                                <h3 className="ca-ser-list-title"><a href="#" className="d-flex justify-content-between align-items-center">Freight Management <span><i className="fa-solid fa-angle-down"></i></span></a></h3>
                                <h3 className="ca-ser-list-title"><a href="#" className="d-flex justify-content-between align-items-center">Domestic Freight Transport <span><i className="fa-solid fa-angle-down"></i></span></a></h3>
                                <h3 className="ca-ser-list-title"><a href="#" className="d-flex justify-content-between align-items-center">Heavy Lift and Project Cargo <span><i className="fa-solid fa-angle-down"></i></span></a></h3>
                                <h3 className="ca-ser-list-title"><a href="#" className="d-flex justify-content-between align-items-center">Inventory Optimization <span><i className="fa-solid fa-angle-down"></i></span></a></h3>
                                <h3 className="ca-ser-list-title"><a href="#" className="d-flex justify-content-between align-items-center">E-commerce Fulfillment <span><i className="fa-solid fa-angle-down"></i></span></a></h3>
                            </div>
                            {/*  phone us  */}
                            <div className="ca-servic-list ca-padding cream-bg-3 br-7 mb-30">
                                <h4 className="ca-title ca-servic-list-title fnw-600 theme-black-3 pb-24">If You Need Any Help <br /> Contact With Us</h4>
                                <div className="ca-ph-content">
                                    <div className="ca-ph-ic">
                                        <span><img src="/img/icon/ca-ser-phone.svg" alt="" /></span>
                                    </div>
                                    <div className="ca-ph-title">
                                        <h4 className="ph-title"><a href="tel:1234567890">+123 456 7890</a></h4>
                                    </div>
                                </div>
                            </div>
                            {/*  sidebar contact  */}
                            <div className="ca-search ca-padding cream-bg-3 br-7 mb-30">
                                <h4 className="ca-title fnw-600 theme-black-3 pb-24">Get A Free Quote</h4>
                                <div className="ca-sidebar-form">
                                    <form action="#">
                                        <input type="text" placeholder="Your Name" />
                                        <input type="email" placeholder="Email Address" />
                                        <input type="tel" placeholder="Phone Number" />
                                        <textarea name="message" id="message" rows={10} cols={4} placeholder="Your Message"></textarea>
                                    </form>
                                    <div className="ca-sidebar-form-btn text-end">
                                        <a href="#" className="ca-btn-primary-3 theme-bg-3 text-white br-50">Contact Now <span><i className="fa-solid fa-angle-right"></i></span></a>
                                    </div>
                                </div>
                            </div>
                            {/*  Follow Us  */}
                            <div className="ca-search ca-padding cream-bg-3 br-7 mb-30">
                                <h4 className="ca-title fnw-600 theme-black-3 pb-24">Follow Us</h4>
                                <div className="ca-footer-social ca-footer-social-3">
                                    <ul>
                                        <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                                        <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                        <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 mb-30">
                        <div className="ca-service-content-area">
                            <div className="ca-servic-thumb br-7 mb-40">
                                <img className="w-100" src="/img/service/ca-servic-larg.png" alt="" />
                            </div>
                            <div className="ca-servic-thumb-content">
                                <h2 className="ca-service-thumb-title theme-black-3 fnw-600 ca-text-cap">Freight Management</h2>
                                <p className="pt-16">We pride ourselves on offering a comprehensive suite of logistics and transport services tailored to meet <br />the diverse needs of our clients. Our Freight Forwarding Services ensure your goods are transported <br /> efficiently and safely across international borders, leveraging our extensive network and expertise.</p>
                                <p className="pt-16">Our Warehousing Solutions provide secure storage with advanced inventory management systems to keep <br />your products organized and easily accessible. We specialize in Customs Clearance, navigating the<br /> complexities of international trade regulations to ensure smooth and timely shipments.</p>
                                <h3 className="ca-thumb-title-2 theme-black-3 fnw-600 pt-40 ca-text-cap">Comprehensive Service Overview</h3>
                                <p className="pt-16 pb-40">Our Global Flatbed Transports connect you to markets worldwide, offering reliable & cost-effective solutions<br /> for your business. For domestic needs, our Domestic Transport Solutions guarantee fast and dependable <br />delivery across the country. Our Freight Management services optimize every step of your logistics</p>
                                <div className="ca-acordion-area">
                                    <div className="accordion" id="accordionExample">
                                        {/*  single accordion item  */}
                                        <div className="ca-accordion-item ca-accordion-item-2 mb-24">
                                            <h2 className="ca-accordion-header" id="headingTwo">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    What is your policy on damaged or lost goods?
                                                </button>
                                            </h2>
                                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                <div className="ca-accordion-body">
                                                    <p>That's why we've compiled a list of frequently asked questions to help you get the <br /> answers you need quickly and easily. Whether you're curious about our range of<br /> services, need information on tracking your shipment, or want to understand.</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/*  single accordion item  */}
                                        <div className="ca-accordion-item ca-accordion-item-2 mb-24">
                                            <h2 className="ca-accordion-header" id="headingOne">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    What should I do if my shipment is delayed?
                                                </button>
                                            </h2>
                                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                <div className="ca-accordion-body">
                                                    <p>That's why we've compiled a list of frequently asked questions to help you get the <br /> answers you need quickly and easily. Whether you're curious about our range of<br /> services, need information on tracking your shipment, or want to understand.</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/*  single accordion item  */}
                                        <div className="ca-accordion-item ca-accordion-item-2 mb-24">
                                            <h2 className="ca-accordion-header" id="headingThree">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    Can you handle oversized or special cargo?
                                                </button>
                                            </h2>
                                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                <div className="ca-accordion-body">
                                                    <p>That's why we've compiled a list of frequently asked questions to help you get the <br /> answers you need quickly and easily. Whether you're curious about our range of<br /> services, need information on tracking your shipment, or want to understand.</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/*  single accordion item  */}
                                        <div className="ca-accordion-item ca-accordion-item-2 mb-24">
                                            <h2 className="ca-accordion-header" id="headingFour">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                    What types of goods can you transport?
                                                </button>
                                            </h2>
                                            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                                <div className="ca-accordion-body">
                                                    <p>That's why we've compiled a list of frequently asked questions to help you get the <br /> answers you need quickly and easily. Whether you're curious about our range of<br /> services, need information on tracking your shipment, or want to understand.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h3 className="ca-thumb-title-2 theme-black-3 fnw-600 pt-16 ca-text-cap">In-Depth Service Information</h3>
                                <p className="pt-16 pb-40">Our Freight Forwarding Services are designed to handle complex international shipments, ensuring your <br />goods reach their destination safely & on time. Our Warehousing Solutions offer state-of-the-art facilities <br />equipped with advanced security & inventory management systems, allowing for efficient storage.</p>
                                <h3 className="ca-thumb-title-2 theme-black-3 fnw-600 ca-text-cap">Our Specialized Services</h3>
                                <p className="pt-16 pb-40">With our Customs Clearance Expertise, we simplify process of navigating international trade regulations, <br />ensuring compliance and minimizing delays. Our Global Flatbed Transports provide comprehensive solutions <br />for transporting goods worldwide, backed by a network of reliable carriers and partners.</p>
                                <h4 className="ca-thumb-title-4 theme-black-3 fnw-600 pb-16">Detailed Service Offerings Service Highlights</h4>
                                <div className="ca-ab-item-check ca-ab-item-check-2">
                                    {/*  single-item  */}
                                    <div className="ca-ab-sngle-item">
                                        <div className="ca-ab-sngle-item-ic">
                                            <span><i className="fa-solid fa-check"></i></span>
                                        </div>
                                        <div className="ca-ab-sngle-item-content">
                                            <h4 className="ca-item-ch-title">Service Breakdown</h4>
                                        </div>
                                    </div>
                                    {/*  single-item  */}
                                    <div className="ca-ab-sngle-item">
                                        <div className="ca-ab-sngle-item-ic">
                                            <span><i className="fa-solid fa-check"></i></span>
                                        </div>
                                        <div className="ca-ab-sngle-item-content">
                                            <h4 className="ca-item-ch-title">Our Specialized Services</h4>
                                        </div>
                                    </div>
                                    {/*  single-item  */}
                                    <div className="ca-ab-sngle-item">
                                        <div className="ca-ab-sngle-item-ic">
                                            <span><i className="fa-solid fa-check"></i></span>
                                        </div>
                                        <div className="ca-ab-sngle-item-content">
                                            <h4 className="ca-item-ch-title">Service Highlights</h4>
                                        </div>
                                    </div>
                                    {/*  single-item  */}
                                    <div className="ca-ab-sngle-item">
                                        <div className="ca-ab-sngle-item-ic">
                                            <span><i className="fa-solid fa-check"></i></span>
                                        </div>
                                        <div className="ca-ab-sngle-item-content">
                                            <h4 className="ca-item-ch-title">Our Services in Detail</h4>
                                        </div>
                                    </div>
                                    {/*  single-item  */}
                                    <div className="ca-ab-sngle-item">
                                        <div className="ca-ab-sngle-item-ic">
                                            <span><i className="fa-solid fa-check"></i></span>
                                        </div>
                                        <div className="ca-ab-sngle-item-content">
                                            <h4 className="ca-item-ch-title">What We Provide</h4>
                                        </div>
                                    </div>
                                    {/*  single-item  */}
                                    <div className="ca-ab-sngle-item">
                                        <div className="ca-ab-sngle-item-ic">
                                            <span><i className="fa-solid fa-check"></i></span>
                                        </div>
                                        <div className="ca-ab-sngle-item-content">
                                            <h4 className="ca-item-ch-title">Extensive Service</h4>
                                        </div>
                                    </div>
                                </div>
                                <h3 className="ca-thumb-title-2 theme-black-3 fnw-600 pt-30">Our Services in Detail</h3>
                                <p className="pt-16">For businesses requiring domestic transportation, our Domestic Transport Solutions offer fast, flexible, and<br /> cost-effective delivery options. Our Freight Management services are tailored to optimize every <br />aspect of your logistics process, from procurement to final delivery.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="ca-more-section pb-70">
            <div className="container">
                <h2 className="ca-more-title theme-black-3 fnw-600 text-center mb-60">More Services</h2>
                <div className="row">
                    {/*  single service box  */}
                    <div className="col-lg-4 col-md-6 mb-30">
                        <div className="ca-ser-icon-box ca-ser-icon-box-2 fix p-relative cream-bg-3 z-index-1 p-32 br-7">
                            <div className="ca-about-icon">
                                <div className="ca-about-ic ca-ser-ic">
                                    <img src="/img/icon/ca-iner-ser1.1.svg" alt="" />
                                </div>
                                <div className="ca-num">
                                    <h4 className="overly-num overly-num2">01</h4>
                                </div>
                            </div>
                            <div className="ca-service-content ca-service-content-iner">
                                <h4 className="ca-title fnw-700 pb-16 pt-32"><a href="/service-single">Express Delivery Services</a></h4>
                                <p className="pb-24">We provide a comprehensive suite logistics services designed to streamline your supply <br /> chain &amp; meet your unique business needs.</p>
                                <a href="/service-single" className="read-more">Read More <span><i className="fa-solid fa-angle-right"></i></span></a>
                            </div>
                        </div>
                    </div>
                    {/*  single service box  */}
                    <div className="col-lg-4 col-md-6 mb-30">
                        <div className="ca-ser-icon-box ca-ser-icon-box-2 fix p-relative cream-bg-3 z-index-1 p-32 br-7">
                            <div className="ca-about-icon">
                                <div className="ca-about-ic ca-ser-ic">
                                    <img src="/img/icon/ca-iner-ser1.2.svg" alt="" />
                                </div>
                                <div className="ca-num">
                                    <h4 className="overly-num overly-num2">02</h4>
                                </div>
                            </div>
                            <div className="ca-service-content ca-service-content-iner">
                                <h4 className="ca-title fnw-700 pb-16 pt-32"><a href="/service-single">Freight Management</a></h4>
                                <p className="pb-24">We offer state-of-the-art warehousing <br />solutions, ensuring your inventory is<br /> managed with precision and care.</p>
                                <a href="/service-single" className="read-more">Read More <span><i className="fa-solid fa-angle-right"></i></span></a>
                            </div>
                        </div>
                    </div>
                    {/*  single service box  */}
                    <div className="col-lg-4 col-md-6 mb-30">
                        <div className="ca-ser-icon-box ca-ser-icon-box-2 fix p-relative cream-bg-3 z-index-1 p-32 br-7">
                            <div className="ca-about-icon">
                                <div className="ca-about-ic ca-ser-ic">
                                    <img src="/img/icon/ca-iner-ser1.3.svg" alt="" />
                                </div>
                                <div className="ca-num">
                                    <h4 className="overly-num overly-num2">03</h4>
                                </div>
                            </div>
                            <div className="ca-service-content ca-service-content-iner">
                                <h4 className="ca-title fnw-700 pb-16 pt-32"><a href="/service-single">heavy load transport</a></h4>
                                <p className="pb-24">Our freight forwarding services ensure<br /> smooth and efficient transportation of<br /> goods across borders, while our customs</p>
                                <a href="/service-single" className="read-more">Read More <span><i className="fa-solid fa-angle-right"></i></span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <button id="topBtn3"><i className="fa-solid fa-arrow-up"></i></button>

    
    





        </>
);
}




