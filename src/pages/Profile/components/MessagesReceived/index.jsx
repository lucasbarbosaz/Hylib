import React from "react";
import { i18n } from "../../../../translate/i18n";

const MessagesReceived = ({
    isLoadingUserData,
    userData,
}) => {
    return (
        <div className="general-box errands padding-none overflow-hidden margin-top-min height-fit">
            <div className="general-box-header-3 padding-md">
                <label className="gray">
                    {isLoadingUserData && (
                        <>
                            <h5 className="bold">{i18n.t('profile.errands.title', { username: '...' })}</h5>
                            <h6>
                                {i18n.t('profile.errands.smallText', { username: '...' })}
                            </h6>
                        </>
                    )}
                    {!isLoadingUserData && (
                        <>
                            <h5 className="bold">
                                {i18n.t('profile.errands.title', { username: userData.username })}
                            </h5>
                            <h6>
                                {i18n.t('profile.errands.smallText', { username: userData.username })}
                            </h6>
                        </>
                    )}
                </label>
            </div>
            <div className="general-box-content bg-2 padding-md">
                <div className="errands-area flex-column">
                    <div className="errands-area-box-nothing margin-bottom-minm flex padding-min">
                        <label className="gray margin-auto-left-right">
                            {isLoadingUserData && (
                                <h5>{i18n.t('profile.errands.errandsBox.title', { username: '...' })}</h5>
                            )}
                            {!isLoadingUserData && (
                                <h5>
                                    {i18n.t('profile.errands.errandsBox.title', { username: userData.username })}
                                </h5>
                            )}
                        </label>
                    </div>
                </div>
                <div className="flex margin-top-min">
                    <label className="gray flex-column">
                        <h6 className="fs-12 margin-bottom-minm">
                            {i18n.t('profile.errands.errandsBox.smallText')}
                        </h6>
                        <h6 dangerouslySetInnerHTML={{ __html: i18n.t('profile.errands.errandsBox.habboway') }}></h6>
                    </label>
                </div>
            </div>
        </div>
        
    )
}

export default MessagesReceived;
