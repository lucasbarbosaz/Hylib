import moment from "moment";
import React, { useEffect, useState } from "react";
import { i18n } from "../../../../translate/i18n";
import Badge from "./Badge";

const BadgesUsed = ({ badgesUsed, config, isLoadingUserData, userData }) => {
  const [devContact, setDevContact] = useState("");
  const [isDev, setIsDev] = useState(false);

  useEffect(() => {
    setIsDev(userData.isOwner);
    config.dev.forEach((dev) => {
      if (dev) {
        const devName = `${dev.name}`.toLowerCase();
        const userName = `${userData.username}`.toLowerCase();
        if (devName === userName) {
          setIsDev(true);
          setDevContact(dev.contact);
        }
      }
    });
  }, [userData.isOwner, userData.username, config.dev]);

  return (
    <div className="flex-column margin-auto-left" style={{ justifyContent: "space-between" }}>
      <div className="profile-card-main-about-badges flex">
        <Badge isLoadingUserData={isLoadingUserData} badgesUsed={badgesUsed} config={config} />
      </div>
      <div className="flex-column margin-top-min" style={{ alignItems: "end" }}>
        {isDev && (
          <div className="flex margin-bottom-minm">
            <icon name="link" className="margin-right-minm"></icon>
            <label className="gray-clear">Discord: {devContact}</label>
          </div>
        )}
        <div className="flex">
          <icon name="display-identity" className="margin-right-minm"></icon>
          <label className="gray-clear">
            {isLoadingUserData && <h5>{i18n.t("profile.infos.registeredIn")} ...</h5>}
            {!isLoadingUserData && (
              <h5>
                {i18n.t("profile.infos.registeredIn")}{" "}
                {moment.unix(userData.reg_timestamp).format("DD/MM/YYYY")}
              </h5>
            )}
          </label>
        </div>
      </div>
    </div>
  );
};

export default BadgesUsed;
