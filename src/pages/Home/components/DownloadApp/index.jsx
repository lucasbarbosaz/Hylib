import React from "react";

const DownloadApp = ({
    titleText,
    windowsText,
    macOSText,
    config,
}) => {
    return (
        <>
            <div class="col-8 flex margin-top-min margin-right">
                <div className="event-box-special" style={{ background: `url(${config.hotel.downloads.image}) 40% center / auto repeat-x scroll rgb(90, 38, 139)`, opacity: ".9" }}>
                    <label className="white margin-auto-top-bottom margin-auto-right text-nowrap">
                        <h3 className="bold text-nowrap">{titleText} {config.hotel.name}</h3>
                        <h5 className="text-nowrap"><a href={`${config.hotel.downloads.LellaSetupWindows}`} className="no-link bold white">{windowsText}</a></h5>
                        <h5 className="text-nowrap"><a href={`${config.hotel.downloads.LellaSetupMac}`} className="no-link bold white">{macOSText}</a></h5>

                    </label>
                </div>
            </div>
        </>
    )
}

export default DownloadApp;