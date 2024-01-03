const Badge = ({ isLoadingUserData, badgesUsed, config }) => {
    return (
        <>
            {!isLoadingUserData && badgesUsed.length >= 6 &&
                badgesUsed.map((badges, index) => {
                    return (
                        <div
                            className="profile-card-main-about-badges-display badge"
                            tooltip={`${badges.badge_code}`}
                            key={index}
                        >
                            <img
                                alt={`${badges.badge_code}`}
                                src={`${config.hotel.url}/swf/c_images/album1584/${badges.badge_code}.gif`}
                            />
                        </div>
                    );
                })}
            {!isLoadingUserData && badgesUsed.length === 0 &&
                badgesUsed.map((badges, index) => {
                    return (
                        <div
                            className="profile-badges-display"
                            tooltip={`${badges.badge_code}`}
                            key={index}
                        >
                            <img
                                alt={`${badges.badge_code}`}
                                src={`${config.hotel.badgeImage}${badges.badge_code}.gif`}
                            />
                        </div>
                    );
                })}
            {badgesUsed.length === 0 && (
                <>
                    <div
                        className="profile-card-main-about-badges-display not-badge"
                        tooltip="No badge slot"
                    ></div>
                    <div
                        className="profile-card-main-about-badges-display not-badge"
                        tooltip="No badge slot"
                    ></div>
                    <div
                        className="profile-card-main-about-badges-display not-badge"
                        tooltip="No badge slot"
                    ></div>
                    <div
                        className="profile-card-main-about-badges-display not-badge"
                        tooltip="No badge slot"
                    ></div>
                    <div
                        className="profile-card-main-about-badges-display not-badge"
                        tooltip="No badge slot"
                    ></div>
                    <div
                        className="profile-card-main-about-badges-display not-badge"
                        tooltip="No badge slot"
                    ></div>
                </>
            )}
            {!isLoadingUserData && badgesUsed.length === 1 &&
                badgesUsed.map((badges, index) => {
                    return (
                        <div
                            className="profile-badges-display"
                            tooltip={`${badges.badge_code}`}
                            key={index}
                        >
                            <img
                                alt={`${badges.badge_code}`}
                                src={`${config.hotel.badgeImage}${badges.badge_code}.gif`}
                            />
                        </div>
                    );
                })}
            {!isLoadingUserData && badgesUsed.length === 1 && (
                <>
                    <div
                        className="profile-card-main-about-badges-display not-badge"
                        tooltip="No badge slot"
                    ></div>
                    <div
                        className="profile-card-main-about-badges-display not-badge"
                        tooltip="No badge slot"
                    ></div>
                    <div
                        className="profile-card-main-about-badges-display not-badge"
                        tooltip="No badge slot"
                    ></div>
                    <div
                        className="profile-card-main-about-badges-display not-badge"
                        tooltip="No badge slot"
                    ></div>
                    <div
                        className="profile-card-main-about-badges-display not-badge"
                        tooltip="No badge slot"
                    ></div>
                </>
            )}
            {!isLoadingUserData && badgesUsed.length === 2 &&
                badgesUsed.map((badges, index) => {
                    return (
                        <div
                            className="profile-badges-display"
                            tooltip={`${badges.badge_code}`}
                            key={index}
                        >
                            <img
                                alt={`${badges.badge_code}`}
                                src={`${config.hotel.badgeImage}${badges.badge_code}.gif`}
                            />
                        </div>
                    );
                })}
            {!isLoadingUserData && badgesUsed.length === 2 && (
                <>
                    <div
                        className="profile-card-main-about-badges-display not-badge"
                        tooltip="No badge slot"
                    ></div>
                    <div
                        className="profile-card-main-about-badges-display not-badge"
                        tooltip="No badge slot"
                    ></div>
                    <div
                        className="profile-card-main-about-badges-display not-badge"
                        tooltip="No badge slot"
                    ></div>
                    <div
                        className="profile-card-main-about-badges-display not-badge"
                        tooltip="No badge slot"
                    ></div>
                </>
            )}
            {!isLoadingUserData && badgesUsed.length === 3 &&
                badgesUsed.map((badges, index) => {
                    return (
                        <div
                            className="profile-badges-display"
                            tooltip={`${badges.badge_code}`}
                            key={index}
                        >
                            <img
                                alt={`${badges.badge_code}`}
                                src={`${config.hotel.badgeImage}${badges.badge_code}.gif`}
                            />
                        </div>
                    );
                })}
            {!isLoadingUserData && badgesUsed.length === 3 && (
                <>
                    <div
                        className="profile-card-main-about-badges-display not-badge"
                        tooltip="No badge slot"
                    ></div>
                    <div
                        className="profile-card-main-about-badges-display not-badge"
                        tooltip="No badge slot"
                    ></div>
                    <div
                        className="profile-card-main-about-badges-display not-badge"
                        tooltip="No badge slot"
                    ></div>
                </>
            )}

            {!isLoadingUserData && badgesUsed.length === 4 &&
                badgesUsed.map((badges, index) => {
                    return (
                        <div
                            className="profile-badges-display"
                            tooltip={`${badges.badge_code}`}
                            key={index}
                        >
                            <img
                                alt={`${badges.badge_code}`}
                                src={`${config.hotel.badgeImage}${badges.badge_code}.gif`}
                            />
                        </div>
                    );
                })}
            {!isLoadingUserData && badgesUsed.length === 4 && (
                <>
                    <div
                        className="profile-card-main-about-badges-display not-badge"
                        tooltip="No badge slot"
                    ></div>
                    <div
                        className="profile-card-main-about-badges-display not-badge"
                        tooltip="No badge slot"
                    ></div>
                </>
            )}
            {!isLoadingUserData && badgesUsed.length === 5 &&
                badgesUsed.map((badges, index) => {
                    return (
                        <div
                            className="profile-badges-display"
                            tooltip={`${badges.badge_code}`}
                            key={index}
                        >
                            <img
                                alt={`${badges.badge_code}`}
                                src={`${config.hotel.badgeImage}${badges.badge_code}.gif`}
                            />
                        </div>
                    );
                })}
            {!isLoadingUserData && badgesUsed.length === 5 && (
                <>
                    <div
                        className="profile-card-main-about-badges-display not-badge"
                        tooltip="No badge slot"
                    ></div>
                </>
            )}
        </>
    )
}

export default Badge;