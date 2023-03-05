import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import StoreContext from "../../store/Context";

const Alert = ({ message }) => {
    const { config } = React.useContext(StoreContext);


    return (
        <>
            <div className="errors-top">
                <div className="error-top flex" style={{backgroundColor: `${config.cmsStyles.errorHex}`}}>
                    <div className="error-top-icon flex" style={{backgroundColor: `${config.cmsStyles.errorHexBold}`}}>
                        <icon name="error-top" className="margin-auto"></icon>
                    </div>
                    <label className="bold white margin-auto">
                        <h5>{ReactHtmlParser(message)}</h5>
                    </label>
                </div>
            </div>
        </>
    )
}

export default Alert;