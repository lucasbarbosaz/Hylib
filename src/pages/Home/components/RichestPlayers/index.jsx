import React from "react";
import { Link } from "react-router-dom";

const RichestPlayers = ({
    richestUsersLoading,
    richestUsers,
    loadingRichestUsers,
    creditsText,
    diamondsText,
    ducketsText,
    config,
}) => {
    return (
        <>
            {
                richestUsersLoading &&
                loadingRichestUsers()
            }
            {
                !richestUsersLoading && richestUsers.length > 0 &&

                <>
                    <div className="flex featured-user-credits">
                        <div className="featured-user-credits-imager">
                            <img alt={`${richestUsers[0].username}`} src={`${config.hotel.avatarImage}?figure=${richestUsers[0].figure}`} />
                        </div>
                        <label className="white margin-auto-top-bottom margin-auto-right padding-right-min">
                            <Link to={`/profile/${richestUsers[0].username}`} place={`Perfil: ${richestUsers[0].username} - ${config.hotel.name}`} className="no-link white">
                                <h4 className="bold">{richestUsers[0].username}</h4>
                            </Link>
                            <div className="flex">
                                <icon name="credits"></icon>
                                <h6 className="margin-left-minm margin-auto-top-bottom">{richestUsers[0].amount} {creditsText}</h6>
                            </div>
                        </label>
                    </div>

                    <div className="flex featured-user-diamonds">
                        <div className="featured-user-diamonds-imager">
                            <img alt={`${richestUsers[1].username}`} src={`${config.hotel.avatarImage}?figure=${richestUsers[1].figure}`} />
                        </div>
                        <label className="white margin-auto-top-bottom margin-auto-right padding-right-min">
                            <Link to={`/profile/${richestUsers[1].username}`} place={`Perfil: ${richestUsers[1].username} - ${config.hotel.name}`} className="no-link white">
                                <h4 className="bold">{richestUsers[1].username}</h4>
                            </Link>
                            <div className="flex">
                                <icon name="diamonds"></icon>
                                <h6 className="margin-left-minm margin-auto-top-bottom">{richestUsers[1].amount} {diamondsText}</h6>
                            </div>
                        </label>
                    </div>


                    <div className="flex featured-user-duckets">
                        <div className="featured-user-duckets-imager">
                            <img alt={`${richestUsers[2].username}`} src={`${config.hotel.avatarImage}?figure=${richestUsers[2].figure}`} />
                        </div>
                        <label className="white margin-auto-top-bottom margin-auto-right padding-right-min">
                            <Link to={`/profile/${richestUsers[2].username}`} place={`Perfil: ${richestUsers[2].username} - ${config.hotel.name}`} className="no-link white">
                                <h4 className="bold">{richestUsers[2].username}</h4>
                            </Link>
                            <div className="flex">
                                <icon name="duckets"></icon>
                                <h6 className="margin-left-minm margin-auto-top-bottom">{richestUsers[2].amount} {ducketsText}</h6>
                            </div>
                        </label>
                    </div>
                </>
            }
        </>
    )

}

export default RichestPlayers;