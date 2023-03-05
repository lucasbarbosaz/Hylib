import React from 'react';

const AlertHome = (props) => {
    const { children } = props;

    const [show, setShow] = React.useState(false);

    const showMore = () => {
        if (show) {
            setShow(false);
        } else {
            setShow(true);
        }
    }

    return (
        <div id="general-alert">
            <div id="general-alert-icon"></div>
            <div id="general-alert-label">
                <div id="general-alert-label-title">Aviso</div>
                <div id="general-alert-label-description" className={`${show === true ? 'reading' : ''}`}>{ children }</div>
            </div>
            <button className="reset-button" id="general-button-view-all" onClick={showMore}>{show === true ? 'Ver menos' : 'Ver mais'}</button>
        </div>
    )
}

export default AlertHome;