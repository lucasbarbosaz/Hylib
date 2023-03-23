import React from 'react';
import { i18n } from "../../translate/i18n";

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
                <div id="general-alert-label-title">{i18n.t('home.alert.title')}</div>
                <div id="general-alert-label-description" className={`${show === true ? 'reading' : ''}`}>{ children }</div>
            </div>
            <button className="reset-button" id="general-button-view-all" onClick={showMore}>{show === true ? i18n.t('home.alert.seeLess') : i18n.t('home.alert.showMore')}</button>
        </div>
    )
}

export default AlertHome;