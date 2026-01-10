import React from 'react';

interface BusinessCardProps {
    name: string;
    title: string;
    email: string;
    phone: string;
    website: string;
    logoUrl: string;
    headshotUrl: string;
    tagline: string;
}

export const BusinessCard: React.FC<BusinessCardProps> = ({
    name, title, email, phone, website, logoUrl, headshotUrl, tagline
}) => {
    return (
        <>
            {/* Front Face */}
            <div className="card-face front">
                <div className="logo-container">
                    <img src={logoUrl} className="logo-img" alt="Logo" />
                    <div className="brand-name">Axie Studio</div>
                    <div className="tagline">{tagline}</div>
                </div>
            </div>

            {/* Back Face */}
            <div className="card-face back">
                <div className="info-col">
                    <div className="name">{name}</div>
                    <div className="role">{title}</div>

                    <div className="contact-group">
                        <div className="contact-item">{email}</div>
                        <div className="contact-item">{phone}</div>
                        <div className="contact-item">{website}</div>
                    </div>
                </div>

                <div className="visual-col">
                    <div className="headshot-container">
                        <img src={headshotUrl} className="headshot" alt="Headshot" />
                    </div>
                </div>
            </div>
        </>
    );
};
