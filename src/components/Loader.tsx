"use client";
import { useEffect, useState } from 'react';

export default function Loader() {
    const [loading, setLoading] = useState(true);
    const [fade, setFade] = useState(false);

    useEffect(() => {
        const handleLoad = () => {
            // Start fading out only AFTER everything is downloaded
            setFade(true);
            setTimeout(() => {
                setLoading(false);
            }, 500);
        };

        if (document.readyState === 'complete') {
            // If already loaded, delay just a tiny bit for smoothness
            setTimeout(handleLoad, 300);
        } else {
            // Wait for the entire window (images, scripts) to finish loading
            window.addEventListener('load', handleLoad);
            
            // Fallback in case window.onload never fires or is blocked
            const fallbackTimer = setTimeout(handleLoad, 5000);

            return () => {
                window.removeEventListener('load', handleLoad);
                clearTimeout(fallbackTimer);
            };
        }
    }, []);

    if (!loading) return null;

    return (
        <>
            <div id="preloader" style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                backgroundColor: '#ffffff',
                zIndex: 999999,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                opacity: fade ? 0 : 1,
                transition: 'opacity 0.5s ease-out',
                pointerEvents: fade ? 'none' : 'auto'
            }}>
                <div className="logo-pulse">
                    <img src="/img/logo/union-trucking-logo.png" alt="Union Trucking Logo" style={{ maxWidth: '240px' }} />
                </div>
                <div className="loading-bar-container" style={{
                    width: '180px',
                    height: '4px',
                    backgroundColor: '#f1f1f1',
                    marginTop: '40px',
                    borderRadius: '4px',
                    overflow: 'hidden'
                }}>
                    <div className="loading-bar"></div>
                </div>
            </div>
            <style>{`
                .logo-pulse {
                    animation: pulse 1.2s infinite alternate ease-in-out;
                }
                @keyframes pulse {
                    0% { transform: scale(0.95); opacity: 0.8; }
                    100% { transform: scale(1.02); opacity: 1; }
                }
                .loading-bar {
                    width: 40%;
                    height: 100%;
                    background-color: #FF6600;
                    border-radius: 4px;
                    animation: slide 1.2s infinite ease-in-out;
                }
                @keyframes slide {
                    0% { transform: translateX(-150%); }
                    100% { transform: translateX(300%); }
                }
            `}</style>
        </>
    );
}
