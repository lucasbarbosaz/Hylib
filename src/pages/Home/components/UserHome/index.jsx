import React from "react";

const UserHome = ({
    isUserDataLoading,
    user,
    config,
    ghostAvatar,
    getClientButtons,
}) => {
    return (
        <>
            {
                isUserDataLoading &&
                <>
                    <div className="display-myhabbo-imager">
                        <img alt={`... - ${config.hotel.name}`} src={`${ghostAvatar}`} />
                    </div><label className="white margin-auto-top-bottom margin-left-min">
                        <h3 className="bold">...</h3>
                        <h6>...</h6>
                    </label>
                    <div className="margin-auto-left margin-right-md">
                        {getClientButtons()}
                    </div>
                </>
            }
            {
                !isUserDataLoading &&
                <>
                    <div className="display-myhabbo-imager">
                        <img alt={`${user.username} - ${config.hotel.name}`} src={`${config.hotel.avatarImage}?figure=${user.figure}`} />
                    </div>
                    <label className="white margin-auto-top-bottom margin-left-min">
                        <h3 className="bold">{user.username}</h3>
                        <h6>{user.motto}</h6>
                    </label>
                    <div className="margin-auto-left margin-right-md">
                        {getClientButtons()}
                    </div>
                </>
            }
        </>
    )

}

export default UserHome;