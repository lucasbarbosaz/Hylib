import { i18n } from "../../../../../translate/i18n";

const MainAbout = ({ isLoadingUserData, isLoadingCount, userData, countFriends, config }) => {
    return (
        <div className="flex margin-bottom-max">
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
                        {`${countFriends} ${i18n.t('profile.infos.friendText')}`}
                    </label>
                </div>
            )}
        </div>
    )
}

export default MainAbout;