import React from 'react';

const Social = ({ social }) => {
    return (
        <a href={social.src} className="social">

            <div className="container">
                <img src={social.imgSrc} alt={social.name} />
            </div>
            <p>{social.title}</p>
        </a>
    );
}

export default Social;