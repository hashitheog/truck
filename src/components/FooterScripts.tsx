import Script from 'next/script';

export default function FooterScripts() {
    return (
        <>
           <Script src="/js/jquery-3.7.1.min.js" strategy="lazyOnload" />
           <Script src="/js/bootstrap.bundle.min.js" strategy="lazyOnload" />
           <Script src="/js/jquery.magnific-popup.min.js" strategy="lazyOnload" />
           <Script src="/js/jquery.counterup.min.js" strategy="lazyOnload" />
           <Script src="/js/slick.min.js" strategy="lazyOnload" />
           <Script src="/js/jquery.nice-select.js" strategy="lazyOnload" />
           <Script src="/js/waypoints.min.js" strategy="lazyOnload" />
           <Script src="/js/aos.js" strategy="lazyOnload" />
           <Script src="/js/main.js" strategy="lazyOnload" />
        </>
    );
}

