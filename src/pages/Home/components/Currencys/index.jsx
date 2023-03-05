import React from "react";
import ReactHtmlParser from 'react-html-parser';

const Currencys = ({
    isUserDataLoading,
    user,
}) => {
    return (
        <>
            {
                isUserDataLoading &&
                <>
                    <div className="display-habbo-currency-credits flex">
                        <icon name="credits" className="margin-auto-top-bottom margin-right-minm"></icon>
                        <h6 className="white fs-12 margin-auto-top-bottom">...</h6>
                    </div>
                    <div className="display-habbo-currency-diamonds flex">
                        <icon name="diamonds" className="margin-auto-top-bottom margin-right-minm"></icon>
                        <h6 className="white fs-12 margin-auto-top-bottom">...</h6>
                    </div>
                    <div className="display-habbo-currency-duckets flex">
                        <icon name="duckets" className="margin-auto-top-bottom margin-right-minm"></icon>
                        <h6 className="white fs-12 margin-auto-top-bottom">...</h6>
                    </div>
                    <div className="display-habbo-vip-status flex">
                        <h6 className="white fs-12 margin-auto-top-bottom">...</h6>
                    </div>
                </>
            }
            {
                !isUserDataLoading &&
                <>
                    <div className="display-habbo-currency-credits flex">
                        <icon name="credits" className="margin-auto-top-bottom margin-right-minm"></icon>
                        <h6 className="white fs-12 margin-auto-top-bottom">{user.credits}</h6>
                    </div>
                    <div className="display-habbo-currency-diamonds flex">
                        <icon name="diamonds" className="margin-auto-top-bottom margin-right-minm"></icon>
                        <h6 className="white fs-12 margin-auto-top-bottom">{user.diamonds}</h6>
                    </div>
                    <div className="display-habbo-currency-duckets flex">
                        <icon name="duckets" className="margin-auto-top-bottom margin-right-minm"></icon>
                        <h6 className="white fs-12 margin-auto-top-bottom">{user.duckets}</h6>
                    </div>
                    <div className="display-habbo-vip-status flex">
                        <h6 className="white fs-12 margin-auto-top-bottom">{user.isVip === true ? ReactHtmlParser('Você é <b>VIP</b>!') : ReactHtmlParser('Você não é <b>VIP</b>!')}</h6>
                    </div>
                </>
            }
        </>
    )

}

export default Currencys;