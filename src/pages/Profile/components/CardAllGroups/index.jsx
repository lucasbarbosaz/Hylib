import React from "react";
import { i18n } from "../../../../translate/i18n";
import Groups from "./Groups";
import "./style.css";

const CardAllGroups = ({
    isLoadingUserData,
    userData,
    isLoadingCount,
    countGroups,
    groups,
    config,
}) => {
    return (
        <div className="general-box padding-none height-auto overflow-hidden profile-groups margin-top-min">
            <div className="general-box-header-3 padding-md">
                <label className="gray">
                    {isLoadingUserData && (
                        <h5 className="bold">{i18n.t('profile.groups.title')} ...</h5>
                    )}
                    {!isLoadingUserData && (
                        <h5 className="bold">{i18n.t('profile.groups.title')} {userData.username}</h5>
                    )}
                    {isLoadingCount && (
                        <h6>
                            <text>0</text> {i18n.t('profile.groups.of')} ...
                        </h6>
                    )}
                    {!isLoadingCount && (
                        <h6>
                            <text>0</text> {i18n.t('profile.groups.of')} {`${countGroups} ${i18n.t('profile.groups.groupText')}`}
                        </h6>
                    )}
                </label>
            </div>
            <div className="general-box-content flex padding-md bg-2">
                   { <Groups groups={groups} config={config} /> }
            </div>
        </div>
    )

}

export default CardAllGroups;