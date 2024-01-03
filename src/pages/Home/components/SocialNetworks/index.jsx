/* eslint-disable react/jsx-no-target-blank */
import React from "react";

const SocialNetworks = ({
    titleText,
    facebookText,
    instagramText,
    twitterText,
    discordText,
    config,
}) => {
    return (
        <>
            <div className="social-meadia-links flex-column margin-top-min">
                <h3 className="color-4 bold margin-bottom-min">{titleText}</h3>
                <a href={`${config.hotel.socialmedia.facebook}`} target="_blank" className="social-media-facebook flex no-link">
                    <div className="margin-auto-top-bottom">{facebookText}</div>
                </a>
                <a href={`${config.hotel.socialmedia.instagram}`} target="_blank" className="social-media-instagram flex no-link">
                    <div className="margin-auto-top-bottom">{instagramText}</div>
                </a>

                <a href={`${config.hotel.socialmedia.twitter}`} target="_blank" className="social-media-twitter flex no-link">
                    <div className="margin-auto-top-bottom">{twitterText}</div>
                </a>
                <a href={`${config.hotel.socialmedia.discord}`} target="_blank" className="social-media-discord flex no-link">
                    <div className="margin-auto-top-bottom">{discordText}</div>
                </a>
            </div>
        </>
    )

}

export default SocialNetworks;