import React from "react";
import { Link } from "react-router-dom";

const Rooms = ({
    isLoadingUserData,
    userData,
    rooms,
    isLoadingCount,
    countRooms,
    config,
}) => {
    return (
        <div className="general-box padding-none height-auto overflow-hidden profile-rooms">
            <div className="general-box-header-3 padding-md">
                <label className="gray">
                    {isLoadingUserData && (
                        <h5 className="bold">Quartos de ...</h5>
                    )}
                    {!isLoadingUserData && (
                        <h5 className="bold">Quartos de {userData.username}</h5>
                    )}
                    {isLoadingCount && (
                        <h6>
                            <text>0</text> de ... quartos
                        </h6>
                    )}
                    {!isLoadingUserData && !isLoadingCount && (
                        <h6>
                            <text>0</text> de {countRooms} quartos
                        </h6>
                    )}
                </label>
            </div>
            <div className="general-box-content flex-column bg-2 padding-min">
                {!isLoadingUserData && rooms.length > 0 &&
                    rooms.map((room) => {
                        return (
                            <div className="profile-rooms-box flex">
                                <label className="gray margin-auto-top-bottom">
                                    <h5>{room.roomName}</h5>
                                </label>
                                <Link
                                    to={`/client/room/${room.roomId}`}
                                    target="_blank"
                                    className={`${config.cmsStyles.buttonsClass} disabled no-link margin-auto-left`}
                                    style={{ width: "80px", height: "30px" }}
                                >
                                    <label className="margin-auto white">
                                        <h6>Visitar</h6>
                                    </label>
                                </Link>
                            </div>
                        );
                    })}
                {rooms.length === 0 && (
                    <div class="padding-min">
                        <label class="text-center">
                            <label class="gray">
                                <h6>
                                    O usuário {userData.username} não possui
                                    quartos.
                                </h6>
                            </label>
                        </label>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Rooms;