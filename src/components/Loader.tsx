"use client";
import { useEffect, useState } from 'react';

export default function Loader() {
    const [loading, setLoading] = useState(true);
    const [fade, setFade] = useState(false);

    useEffect(() => {
        // Start fading out after 600ms
        const fadeTimer = setTimeout(() => {
            setFade(true);
        }, 600);

        // Completely remove from DOM after fade completes
        const removeTimer = setTimeout(() => {
            setLoading(false);
        }, 1100);

        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(removeTimer);
        };
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

