import { useEffect, useState } from "react";
import { i18n } from "../../../../../translate/i18n";
import Relationships from "./Relationships";

const Infos = ({ isLoadingUserData, userData, config }) => {
  const [isDev, setIsDev] = useState(false);

  useEffect(() => {
    setIsDev(userData.isOwner);
    config.dev.forEach((dev) => {
      if (dev) {
        const devName = `${dev.name}`.toLowerCase();
        const userName = `${userData.username}`.toLowerCase();
        if (devName === userName) {
          setIsDev(true);
        }
      }
    });
  }, [userData.isOwner, userData.username, config.dev]);

  return (
    <>
      <div className="flex-column">
        <div className="profile-card-main-about-picture default">
          {!isLoadingUserData ? (
            <div className="profile-card-main-about-picture-imager">
              <img
                alt={`${userData.username} - ${config.hotel.name}`}
                src={`${config.hotel.avatarImage}?figure=${userData.figure}&direction=4&head_direction=3&gesture=sml&action=wav,crr=667`}
                className="fixed-imager-profile"
              />
            </div>
          ) : (
            <div className="profile-card-main-about-picture-imager">
              <img
                alt={`... - ${config.hotel.name}`}
                src={`${config.hotel.avatarImage}?figure=ghost&direction=4&head_direction=3&gesture=sml&action=wav,crr=667`}
              />
            </div>
          )}
        </div>
        <div className="profile-card-main-about-lastlogin flex margin-top-min">
          <icon name="clock-mini" className="margin-right-minm"></icon>
          {!isLoadingUserData ? (
            <label className="gray-clear">
              <h5>{userData.online ? i18n.t("profile.infos.online") : i18n.t("profile.infos.offline")}</h5>
            </label>
          ) : (
            <label className="gray-clear">
              <h5>...</h5>
            </label>
          )}
        </div>
      </div>
      <div className="profile-card-main-about-infos flex-column margin-left-max">
        <div className="flex-column" style={{ minHeight: "43px" }}>
          <div className="profile-card-main-about-display-infos flex white">
            <icon className="margin-right-minm" name="male"></icon>
            <label className="flex">
              <h4>
                <b>{!isLoadingUserData ? userData.username : "..."}</b>
                &nbsp;|&nbsp;
              </h4>
              <h6 className="fs-12 margin-auto-top-bottom">
                {!isLoadingUserData
                  ? userData.isOwner
                    ? i18n.t("profile.infos.isOwner")
                    : isDev
                    ? i18n.t("profile.infos.isDev")
                    : userData.canOpenAdminpan
                    ? "Staff"
                    : i18n.t("profile.infos.rank")
                  : "..."}
              </h6>
            </label>
          </div>
          {isLoadingUserData && (
            <label className="margin-top-minm margin-bottom-minm white">
              <h5>...</h5>
            </label>
          )}
          {!isLoadingUserData && (
            <label className="margin-top-minm margin-bottom-minm white">
              <h5>{userData.motto}</h5>
            </label>
          )}
        </div>
        <div
          className="profile-card-main-about-another-infos flex-column margin-top-max"
          style={{ bottom: "-37px" }}
        >
          {!isLoadingUserData && <Relationships userData={userData} />}
        </div>
      </div>
    </>
  );
};

export default Infos;
