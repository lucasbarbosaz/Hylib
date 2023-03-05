/* eslint-disable react/jsx-no-target-blank */
import React from "react";

const SocialNetworks = ({
    config,
}) => {
    return (
        <>
            <div className="social-meadia-links flex-column margin-top-min">
                <h3 className="color-4 bold margin-bottom-min">Mais acessibilidade para você!</h3>
                <a href={`${config.hotel.socialmedia.instagram}`} target="_blank" className="social-media-instagram flex no-link">
                    <div className="margin-auto-top-bottom">Página no instagram</div>
                </a>

                <a href={`${config.hotel.socialmedia.twitter}`} target="_blank" className="social-media-twitter flex no-link">
                    <div className="margin-auto-top-bottom">Siga-nos no twitter</div>
                </a>
                <a href={`${config.hotel.socialmedia.discord}`} target="_blank" className="social-media-discord flex no-link">
                    <div className="margin-auto-top-bottom">Servidor no discord</div>
                </a>
            </div>
        </>
    )

}

export default SocialNetworks;