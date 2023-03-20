import moment from 'moment';
import React from 'react';
import { i18n } from "../../../../translate/i18n";
import Badge from './Badge';

const BadgesUsed = ({ badgesUsed, config, isLoadingUserData, userData }) => {
    return (
        <div className='flex-column margin-auto-left' style={{ justifyContent: 'space-between' }}>
            <div className='profile-card-main-about-badges flex'>
                <Badge
                    isLoadingUserData={isLoadingUserData}
                    badgesUsed={badgesUsed}
                    config={config}
                />
            </div>
            <div className='flex-column margin-top-min' style={{ alignItems: 'end' }}>
                {userData.isOwner && (
                    <div className='flex margin-bottom-minm'>
                        <icon name='link' className='margin-right-minm'></icon>
                        <label className='gray-clear'>Discord: {config.dev.contact}</label>
                    </div>
                )}
                <div className='flex'>
                    <icon name='display-identity' className='margin-right-minm'></icon>
                    <label className='gray-clear'>
                        {isLoadingUserData && <h5>{i18n.t('profile.infos.registeredIn')} ...</h5>}
                        {!isLoadingUserData && (
                            <h5>
                                {i18n.t('profile.infos.registeredIn')} {moment.unix(userData.reg_timestamp).format('DD/MM/YYYY')}
                            </h5>
                        )}
                    </label>
                </div>
            </div>
        </div>
    );
};

export default BadgesUsed;
