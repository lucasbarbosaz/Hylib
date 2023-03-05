import { useState } from "react";

const GroupsData = ({ groupsData, index, config }) => {
    const [showSubtitle, setShowSubtitle] = useState(false);

    return (
        <>
            <div
                className="profile-card-main-about-badges-display badge"
                tooltip={`${groupsData.groupBadge}`}
                key={index}
                onMouseEnter={() => setShowSubtitle(true)}
                onMouseLeave={() => setShowSubtitle(false)}
            >
                <img
                    alt={`${groupsData.groupBadge}`}
                    src={`${config.hotel.groupImage}${groupsData.groupBadge}.gif`}
                />
                <span className={`legenda_interna ${showSubtitle ? "" : "legenda_visibility"}`}>
                    {groupsData.groupName}
                </span>
            </div>
        </>
    )
}

export default GroupsData;