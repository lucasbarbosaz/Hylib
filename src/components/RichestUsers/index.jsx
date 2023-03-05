import React from 'react';
import { Link } from "react-router-dom";
import StoreContext from "../../store/Context";

const RichestUsers = (props) => {
    const { config } = React.useContext(StoreContext);

    const { username, avatar, label, amount, key, ...rest } = props;

    console.log(username)

    return (
        <>
            <div className="flex featured-user-credits" key={key}>
                <div className="featured-user-credits-imager">
                    <img alt={`${username}`} src={`${config.hotel.avatarImage}?figure=${avatar}`} />
                </div>
                <label className="white margin-auto-top-bottom margin-auto-right padding-right-min">
                    <Link to={`/profile/${username}`} place={`Perfil: ${username} - ${config.hotel.name}`} className="no-link white">
                        <h4 className="bold">{username}</h4>
                    </Link>
                    <div className="flex">
                        <icon name="credits"></icon>
                        <h6 className="margin-left-minm margin-auto-top-bottom">{amount} {label}</h6>
                    </div>
                </label>
            </div>
    
            <div className="flex featured-user-diamonds" key={key}>
                <div className="featured-user-diamonds-imager">
                    <img alt={`${username}`} src={`${config.hotel.avatarImage}?figure=${avatar}`} />
                </div>
                <label className="white margin-auto-top-bottom margin-auto-right padding-right-min">
                    <Link to={`/profile/${username}`} place={`Perfil: ${username} - ${config.hotel.name}`} className="no-link white">
                        <h4 className="bold">{username}</h4>
                    </Link>
                    <div className="flex">
                        <icon name="diamonds"></icon>
                        <h6 className="margin-left-minm margin-auto-top-bottom">{amount} {label}</h6>
                    </div>
                </label>
            </div>
    
    
            <div className="flex featured-user-duckets" key={key}>
                <div className="featured-user-duckets-imager">
                    <img alt={`${username}`} src={`${config.hotel.avatarImage}?figure=${avatar}`} />
                </div>
                <label className="white margin-auto-top-bottom margin-auto-right padding-right-min">
                    <Link to={`/profile/${username}`} place={`Perfil: ${username} - ${config.hotel.name}`} className="no-link white">
                        <h4 className="bold">{username}</h4>
                    </Link>
                    <div className="flex">
                        <icon name="duckets"></icon>
                        <h6 className="margin-left-minm margin-auto-top-bottom">{amount} {label}</h6>
                    </div>
                </label>
            </div>
        </>
    )
}

export default RichestUsers;