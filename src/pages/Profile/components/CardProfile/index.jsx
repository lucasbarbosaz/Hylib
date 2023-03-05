import React from "react";
import BadgesUsed from "../BadgesUsed";
import Infos from "./Infos";
import MainAbout from "./MainAbout";

const CardProfile = ({
    isLoadingUserData,
    userData,
    isLoadingCount,
    countFriends,
    config,
    badgesUsed,

}) => {
    return (
        <div className="profile-card-main general-box padding-none">
            <div className="profile-card-main-cover">
                <img alt="" src="" />
            </div>

            <div className="profile-card-main-about flex">
                
                <div className="flex-column padding-max width-content">
                    <MainAbout 
                        isLoadingUserData={isLoadingUserData}
                        isLoadingCount={isLoadingCount}
                        userData={userData}
                        countFriends={countFriends}
                        config={config}
                    />
                    <div className="flex">
                        <Infos isLoadingUserData={isLoadingUserData} userData={userData} config={config}/>

                        <BadgesUsed userData={userData} badgesUsed={badgesUsed} config={config} isLoadingUserData={isLoadingUserData}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardProfile;