import { useState } from "react";

const Badge = ({ badge, index, config }) => {
    const [showSubtitle, setShowSubtitle] = useState(false);
    return (
        <div
            className="profile-badges-display"
            tooltip={`${badge.badge_code}`}
            key={index}
            onMouseEnter={() => setShowSubtitle(true)}
            onMouseLeave={() => setShowSubtitle(false)}
            onClick={() => {navigator.clipboard.writeText(badge.badge_code)}}
        >
            <img
                className="badge-item"
                alt={`${badge.badge_code}`}
                src={`${config.hotel.url}/swf/c_images/album1584/${badge.badge_code}.gif`}
            />
            <span className={`legenda_interna ${showSubtitle ? "" : "legenda_visibility"}`}>
                {badge.badge_code}
            </span>
        </div>
    );
};

export default Badge;
