import React from "react";
import { Link } from "react-router-dom";

const Events = ({
    events,
    config,
}) => {
    return (
        <>
            <div className="general-box-content flex-column">
                {
                    events.length > 0 &&
                    events.map((player, index) => {
                        return (
                            <div className="hall-of-fame-box flex" key={index}>
                                <div className="habbo-imager">
                                    <img alt="" src={`${config.hotel.avatarImage}?figure=${player.figure}&action=wav&direction=2&head_direction=3&gesture=std"`} />
                                    <img alt="" src={`${config.hotel.avatarImage}?figure=${player.figure}&direction=2&head_direction=2&headonly=1`} />
                                </div>
                                <div className="flex margin-auto-top-bottom width-content">
                                    <label className="gray flex-column margin-auto-top-bottom">
                                        <h5 className="bold"><Link className="no-link" to={`/profile/${player.username}`}>{player.username}</Link></h5>
                                        <h6>por ganhar <b>{player.amount}</b> eventos</h6>
                                    </label>
                                </div>
                                <div className="trophy flex">
                                    <span></span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Events;