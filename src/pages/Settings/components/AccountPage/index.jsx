import React from 'react';
import Switch from '../../../../components/Switch';

const AccountPage = ({
    i18n,
    handleSubmit,
    user,
    userSettings,
    updateSettings,
    isUpdatingAccount,
}) => {
    return (
        <>
            <div className='col-17 flex-column'>
                <div className='general-box-3 flex-column pd-0 overflow-hidden'>
                    <div className='general-box-header flex'>
                        <div className='general-box-header-icon flex'>
                            <icon name='gear' className='mr-auto'></icon>
                        </div>
                        <label className='flex-column color-4 mr-auto-top-bottom text-nowrap'>
                            <h4 className='bold text-nowrap'>{i18n.t('settings.generalSettings.title')}</h4>
                            <h6 className=' text-nowrap'>
                                {i18n.t('settings.generalSettings.smallText')}
                            </h6>
                        </label>
                    </div>
                    <form
                        className='change-email-form flex-column'
                        onSubmit={handleSubmit}
                    >
                        <li className='list-none flex-column padding-max gray'>
                            <label className='margin-bottom-min'>
                                <h5 className='bold uppercase'>{i18n.t('settings.generalSettings.motto.title')}</h5>
                                <h5>{i18n.t('settings.generalSettings.motto.smallText')} {user.username}?</h5>
                            </label>
                            <div>
                                <icon
                                    type='motto'
                                    style={{ top: '11px', left: '11px' }}
                                ></icon>
                                <input
                                    type='text'
                                    name='motto'
                                    placeholder={i18n.t('settings.generalSettings.motto.placeholder')}
                                    style={{
                                        paddingLeft: '30px',
                                    }}
                                    value={userSettings?.motto}
                                    onChange={(e) =>
                                        updateSettings('motto', e.target.value)
                                    }
                                />
                            </div>
                        </li>
                        <hr />
                        <li className='list-none flex padding-max gray'>
                            <label style={{}}>
                                <h5 className='bold'>{i18n.t('settings.generalSettings.friendRequests.title')}</h5>
                                <h5>{i18n.t('settings.generalSettings.friendRequests.smallText')}</h5>
                            </label>
                            <div
                                className='margin-auto-left margin-auto-top-bottom'
                                configurations
                            >
                                <Switch
                                    checked={userSettings?.allow_friend_requests}
                                    onChange={(e) =>
                                        updateSettings(
                                            'allow_friend_requests',
                                            e.target.checked
                                        )
                                    }
                                    color='primary'
                                    name='allow_friend_requests'
                                />
                            </div>
                        </li>
                        <li className='list-none flex padding-max gray'>
                            <label style={{}}>
                                <h5 className='bold'>{i18n.t('settings.generalSettings.lastOnline.title')}</h5>
                                <h5>
                                    {i18n.t('settings.generalSettings.lastOnline.smallText')}
                                </h5>
                            </label>
                            <div
                                className='margin-auto-left margin-auto-top-bottom'
                                configurations
                            >
                                <Switch
                                    checked={
                                        userSettings?.hide_last_online ? false : true
                                    }
                                    onChange={(e) =>
                                        updateSettings(
                                            'hide_last_online',
                                            e.target.checked ? false : true
                                        )
                                    }
                                    color='primary'
                                    name='hide_last_online'
                                />
                            </div>
                        </li>
                        <li className='list-none flex padding-max gray'>
                            <label style={{}}>
                                <h5 className='bold'>{i18n.t('settings.generalSettings.statusOnline.title')}</h5>
                                <h5>
                                    {i18n.t('settings.generalSettings.statusOnline.smallText')}
                                </h5>
                            </label>
                            <div
                                className='margin-auto-left margin-auto-top-bottom'
                                configurations
                            >
                                <Switch
                                    checked={userSettings?.online}
                                    onChange={(e) =>
                                        updateSettings('online', e.target.checked)
                                    }
                                    color='primary'
                                    name='online'
                                />
                            </div>
                        </li>
                        <li className='list-none flex padding-max gray'>
                            <label style={{}}>
                                <h5 className='bold'>{i18n.t('settings.generalSettings.copyFigure.title')}</h5>
                                <h5>
                                    {i18n.t('settings.generalSettings.copyFigure.smallText')}
                                </h5>
                            </label>
                            <div
                                className='margin-auto-left margin-auto-top-bottom'
                                configurations
                            >
                                <Switch
                                    checked={userSettings?.allow_mimic}
                                    onChange={(e) =>
                                        updateSettings('allow_mimic', e.target.checked)
                                    }
                                    color='primary'
                                    name='allow_mimic'
                                />
                            </div>
                        </li>
                        <li className='list-none flex padding-max gray'>
                            <label style={{}}>
                                <h5 className='bold'>{i18n.t('settings.generalSettings.followMe.title')}</h5>
                                <h5>
                                    {i18n.t('settings.generalSettings.followMe.smallText')}
                                </h5>
                            </label>
                            <div
                                className='margin-auto-left margin-auto-top-bottom'
                                configurations
                            >
                                <Switch
                                    checked={userSettings?.allow_follow}
                                    onChange={(e) =>
                                        updateSettings('allow_follow', e.target.checked)
                                    }
                                    color='primary'
                                    name='allow_follow'
                                />
                            </div>
                        </li>
                        <li className='list-none flex padding-max gray'>
                            <label style={{}}>
                                <h5 className='bold'>{i18n.t('settings.generalSettings.trade.title')}</h5>
                                <h5>
                                    {i18n.t('settings.generalSettings.trade.smallText')}
                                </h5>
                            </label>
                            <div
                                className='margin-auto-left margin-auto-top-bottom'
                                configurations
                            >
                                <Switch
                                    checked={userSettings?.allow_trade}
                                    onChange={(e) =>
                                        updateSettings('allow_trade', e.target.checked)
                                    }
                                    color='primary'
                                    name='allow_trade'
                                />
                            </div>
                        </li>
                        <li className='list-none flex padding-max gray'>
                            <label style={{}}>
                                <h5 className='bold'>{i18n.t('settings.generalSettings.whisper.title')}</h5>
                                <h5>
                                    {i18n.t('settings.generalSettings.whisper.smallText')}
                                </h5>
                            </label>
                            <div
                                className='margin-auto-left margin-auto-top-bottom'
                                configurations
                            >
                                <Switch
                                    checked={
                                        userSettings?.disable_whisper ? false : true
                                    }
                                    onChange={(e) =>
                                        updateSettings(
                                            'disable_whisper',
                                            e.target.checked ? false : true
                                        )
                                    }
                                    color='primary'
                                    name='disable_whisper'
                                />
                            </div>
                        </li>
                        <li className='list-none flex padding-max gray'>
                            <label style={{}}>
                                <h5 className='bold'>{i18n.t('settings.generalSettings.allowSex.title')}</h5>
                                <h5>
                                    {i18n.t('settings.generalSettings.allowSex.smallText')}
                                </h5>
                            </label>
                            <div
                                className='margin-auto-left margin-auto-top-bottom'
                                configurations
                            >
                                <Switch
                                    checked={userSettings?.allow_sex}
                                    onChange={(e) =>
                                        updateSettings('allow_sex', e.target.checked)
                                    }
                                    color='primary'
                                    name='allow_sex'
                                />
                            </div>
                        </li>
                        <li className='list-none flex padding-max gray'>
                            <label style={{}}>
                                <h5 className='bold'>{i18n.t('settings.generalSettings.mentions.title')}</h5>
                                <h5>
                                    {i18n.t('settings.generalSettings.mentions.smallText')} @{user.username}
                                </h5>
                            </label>
                            <div
                                className='margin-auto-left margin-auto-top-bottom'
                                configurations
                            >
                                <Select
                                    value={userSettings?.mention_type}
                                    onChange={(e) =>
                                        updateSettings('mention_type', e.target.value)
                                    }
                                >
                                    <MenuItem value={'FRIENDS'}>{i18n.t('settings.generalSettings.mentions.types.friends')}</MenuItem>
                                    <MenuItem value={'ALL'}>{i18n.t('settings.generalSettings.mentions.types.everyone')}</MenuItem>
                                    <MenuItem value={'NONE'}>{i18n.t('settings.generalSettings.mentions.types.nobody')}</MenuItem>
                                </Select>
                            </div>
                        </li>
                        <li className='list-none flex padding-max gray padding-top-none'>
                            <button
                                type='submit'
                                className={`${config.cmsStyles.buttonsClass} no-link`}
                                disabled={isUpdatingAccount}
                                style={{
                                    width: '100%',
                                    height: '42px',
                                    left: '-1px',
                                    fontSize: '14px',
                                }}
                            >
                                <label className='margin-auto white'>
                                    Salvar alterações
                                </label>
                            </button>
                        </li>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AccountPage;