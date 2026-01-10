import React from 'react';
import '../styles/print.css';

export const LinkedInBanner: React.FC = () => {
    return (
        <div style={{
            width: '1584px',
            height: '396px',
            background: '#050505', // PURE SOLID DEEP BLACK
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start', // Align start after padding
            paddingLeft: '45%', // STRICT 45% Safe Zone
            paddingRight: '60px',
            boxSizing: 'border-box'
        }}>

            {/* Subtle Utility Grid (Senior Dev Standard) */}
            <div style={{
                position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
                zIndex: 1,
                pointerEvents: 'none'
            }} />

            {/* Grouped Content Wrapper */}
            <div style={{
                zIndex: 10,
                display: 'flex',
                alignItems: 'center',
                gap: '50px' // Tightly grouped
            }}>
                {/* Main Text Content */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0px' }}>
                    <h1 style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: '78px', // Slightly scaled down to fit group
                        fontWeight: 800,
                        color: '#ffffff',
                        margin: 0,
                        lineHeight: 0.9,
                        letterSpacing: '-0.02em',
                    }}>Axie Studio</h1>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px'
                    }}>
                        <div style={{ width: '40px', height: '2px', background: '#6366f1' }}></div>
                        <div style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: '15px',
                            color: '#94a3b8',
                            letterSpacing: '0.3em',
                            textTransform: 'uppercase',
                            fontWeight: 500,
                        }}>Autonomous Agents</div>
                    </div>
                </div>

                {/* QR Code - Minimal White Block */}
                <div style={{
                    background: '#ffffff',
                    padding: '8px',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <img
                        src="/assets/qr-code.png"
                        style={{ width: '100px', height: '100px', display: 'block' }}
                        alt="Scan QR"
                    />
                </div>
            </div>
        </div>
    );
};
