import React from 'react';
import { Link } from "react-router-dom";
import StoreContext from "../../store/Context";


const Head = ({ alert }) => {
    const { config, user } = React.useContext(StoreContext);

    return (
        <>
            {alert !== null ? alert : ''}
            <div className="container">
                <div className="content flex-column"></div>
                <div className="header__1 flex" style={{background: `url(${config.cmsStyles.backgroundUrl}) 0 center / auto repeat-x scroll ${config.cmsStyles.backgroundHex}`}}>
                    {
                        user === null ? (
                            <Link to="/" className="margin-auto flex">
                                <icon name="logo-hybbe-big" style={{background: `url(${config.cmsStyles.logoUrl})`}}/>
                            </Link>
                        ) : (
                            <Link to="/" className="margin-auto flex">
                                <icon name="logo-hybbe-big" style={{background: `url(${config.cmsStyles.logoUrl})`, marginLeft: "-250%"}}/>
                            </Link>
                        )

                    }

                </div>
            </div>
        </>
    )
}

export default Head;