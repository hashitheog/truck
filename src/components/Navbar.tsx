export default function Navbar() {
    return (
        <>
               {/*  Header Area Start */}
   <header className="header-area-3 stiky">
      <div className="container header-3">
         <div className="row align-items-center">
            <div className="col-xl-3 col-lg col-md-6 col-6">
               {/*  ca-logo  */}
               <div className="ca-logo">
                  <a href="/"><img src="/img/logo/union-trucking-logo.png" alt="" /></a>
               </div>
            </div>
            <div className="col-xl-6 col-lg-7 d-none d-lg-block">
               {/*  ca-main-menu  */}
               <div className="ca-main-menu-3">
                  <nav className="ca-mobile-menu-active-3">
                     <ul>
                        <li>
                           <a href="/">Home</a>
                        </li>
                        <li><a href="/about">About Us</a></li>
                        <li>
                           <a href="/service">Service</a>
                        </li>
                        <li>
                           <a href="#">Pages <span><i className="fa-solid fa-angle-down"></i></span></a>
                           <ul className="sub-menu">
                              <li><a href="/team">Team</a></li>
                              <li><a href="/testimonial">Testimonial</a></li>
                              <li><a href="/faq">Faq</a></li>
                              <li><a href="/pricing">Pricing Plan</a></li>
                              <li><a href="/contact">Contact</a></li>
                              <li><a href="/404">404</a></li>
                           </ul>
                        </li>
                        <li>
                           <a href="/blog">Blog</a>
                        </li>
                          <li>
                             <a href="/projects">Projects</a>
                          </li>
                     </ul>
                  </nav>
               </div>
            </div>
            <div className="col-xl-3 col-lg col-md-6 col-6">
               {/*  ca-btn  */}
               <div className="ca-btn-header d-none d-lg-block text-end">
                  <a href="/contact" className="ca-btn-primary-3 theme-bg-3 text-white br-50">Get A Quote <span><i className="fa-solid fa-angle-right"></i></span></a>
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
   {/*  Header area end  */}

        </>
    );
}

