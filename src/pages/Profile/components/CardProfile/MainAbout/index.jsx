const MainAbout = ({ isLoadingUserData, isLoadingCount, userData, countFriends, config }) => {
    return (
        <div className="flex margin-bottom-max">
            <div className="profile-card-main-about-habbo">
                {isLoadingUserData && (
                    <div className="profile-card-main-about-habbo-imager margin-auto-left-right">
                        <img
                            alt={`... - ${config.hotel.name}`}
                            src={`${config.hotel.avatarImage}?figure=ghost?gesture=std&head_direction=3&direction=2&size=s`}
                        />
                    </div>
                )}
                {!isLoadingUserData && (
                    <div className="profile-card-main-about-habbo-imager margin-auto-left-right">
                        <img
                            alt={`${userData.username} - ${config.hotel.name}`}
                            src={`${config.hotel.avatarImage}?figure=${userData.figure}?gesture=std&head_direction=3&direction=2&size=s`}
                        />
                    </div>
                )}
            </div>
            {isLoadingCount && (
                <div className="profile-card-main-about-friends flex margin-auto-top-bottom margin-auto-left">
                    <icon
                        name="friends"
                        className="margin-right-minm"
                    ></icon>
                    <label className="fs-14 white">...</label>
                </div>
            )}
            {!isLoadingCount && (
                <div className="profile-card-main-about-friends flex margin-auto-top-bottom margin-auto-left">
                    <icon
                        name="friends"
                        className="margin-right-minm"
                    ></icon>
                    <label className="fs-14 white">
                        {countFriends.length > 0 || countFriends > 1
                            ? `${countFriends} amigos`
                            : `${countFriends} amigo`}
                    </label>
                </div>
            )}
        </div>
    )
}

export default MainAbout;