"use client";
import { useEffect, useState } from 'react';

export default function Loader() {
    const [loading, setLoading] = useState(true);
    const [fade, setFade] = useState(false);

    useEffect(() => {
        const startTime = Date.now();
        const minLoaderTime = 1200; // Force loader to show for at least 1.2 seconds

        const handleLoad = () => {
            const timeElapsed = Date.now() - startTime;
            const timeRemaining = Math.max(0, minLoaderTime - timeElapsed);

            setTimeout(() => {
                setFade(true);
                setTimeout(() => {
                    setLoading(false);
                }, 500); // 500ms fade transition
            }, timeRemaining);
        };

        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
            const fallbackTimer = setTimeout(handleLoad, 8000); // Max wait 8 seconds

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
