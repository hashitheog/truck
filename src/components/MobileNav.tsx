export default function MobileNav() {
    return (
        <>
               {/*  offcanvas start  */}
   <div className="ca-offcanvas w-bg">
      <div className="ca-offcanvas-wrapper">
         <div className="ca-offcanvas-header d-flex justify-content-between align-items-center mb-40">
            <div className="ca-offcanvas-logo">
               <a href="#"><img src="/img/logo/union-trucking-logo.png" alt="" /></a>
            </div>
            <div className="ca-offcanvas-close">
               <button className="ca-offcanvas-close-toggle"><i className="fal fa-times"></i></button>
            </div>
         </div>
         <div className="ca-offcanvas-menu-3 mb-40">
            <nav>
            </nav>
         </div>
         <div className="ca-offcanvas-contact mb-40">
            <a href="#" className="ca-btn-primary-3 theme-bg-3 text-white br-50">Get A Quote <span><i className="fa-solid fa-angle-right"></i></span></a>
         </div>
         <div className="ca-offcanvas-contact-info mb-40">
            <h3 className="ca-offcanvas-sm-title">Contact Info</h3>
            {/*  single item  */}
            <div className="ca-sm-single-item-4 ca-sm-single-item-1 mb-20">
               <div className="icon">
                  <span>
                     <i className="fa-solid fa-location-dot"></i>
                  </span>
               </div>
               <div className="ca-sm-single-item-4-content">
                  <p><a href="#">12425 River Ridge Blvd #2 Burnsville MN 55337
                        </a></p>
               </div>
            </div>

            {/*  single item  */}
            <div className="ca-sm-single-item-4 ca-sm-single-item-1 mb-20">
               <div className="icon">
                  <span>
                     <i className="fa-solid fa-phone"></i>
                  </span>
               </div>
               <div className="ca-sm-single-item-4-content">
                  <p><a href="tel:+16517061022">+1 (651) 706-1022</a></p>
               </div>
            </div>

            {/*  single item  */}
            <div className="ca-sm-single-item-4 ca-sm-single-item-1 mb-20">
               <div className="icon">
                  <span>
                     <i className="fa-solid fa-envelope"></i>
                  </span>
               </div>
               <div className="ca-sm-single-item-4-content">
                  <p><a href="mailto:infoUnion Trucking@gmail.com">infoUnion Trucking@gmail.com</a></p>
               </div>
            </div>
         </div>
         <div className="ca-offcanvas-social mb-40">
            <h3 className="ca-offcanvas-sm-title">Follow Us</h3>
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
   <div className="ca-offcanvas-overlay"></div>
   {/*  offcanvas end  */}

        </>
    );
}

