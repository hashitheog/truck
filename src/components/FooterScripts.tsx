import Script from 'next/script';

export default function FooterScripts() {
    return (
        <Script src="/js/all-scripts.js" strategy="lazyOnload" />
    );
}
