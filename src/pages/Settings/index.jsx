import { MenuItem, Select } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import Alert from '../../components/Alert';
import Head from '../../components/Head';
import Header from '../../components/Header';
import Switch from '../../components/Switch';
import Requests from '../../services/Requests';
import StoreContext from '../../store/Context';
import { i18n } from "../../translate/i18n";
import { scrollToTop } from '../../utils/utils';

import Footer from '../../components/Footer';

const Settings = (props) => {
    const { config, user, setUser } = React.useContext(StoreContext);
    const [page, setPage] = React.useState(
        props.email ? 'email' : props.password ? 'password' : 'account'
    );
    const [alert, setAlert] = React.useState(null);

    const changePage = (newPage) => {
        setAlert(null);
        setPage(newPage);
    };

    const [originalUserSettings, setOriginalUserSettings] = React.useState(null);
    const [userSettings, setUserSettings] = React.useState(null);

    const [email, setEmail] = React.useState(null);
    const [oldPassword, setOldPassword] = React.useState(null);
    const [newPassword, setNewPassword] = React.useState(null);
    const [newPasswordRepeated, setNewPasswordRepeated] = React.useState(null);

    const [isUpdatingAccount, setUpdatingAccount] = React.useState(false);
    const [isUpdatingEmail, setUpdatingEmail] = React.useState(false);
    const [isUpdatingPassword, setUpdatingPassword] = React.useState(false);

    const [wto, setWto] = React.useState();

    const updateSettings = (field, newValue) => {
        if (field === 'name_colour') {
            clearTimeout(wto);
            setWto(
                setTimeout(() => {
                    setUserSettings({ ...userSettings, name_colour: newValue });
                }, 500)
            );
        } else {
            setUserSettings({ ...userSettings, [field]: newValue });
        }
    };

    const sendAlert = (severity, message) => {
        setAlert(severity === null || message === null ? null : <Alert message={message} />);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (page === 'account') {
            setUpdatingAccount(true);

            let newUserSettings = {
                username: userSettings.username,
                motto: userSettings.motto,
                name_colour: userSettings.name_colour,

                allow_mimic: userSettings.allow_mimic,
                allow_trade: userSettings.allow_trade,
                allow_friend_requests: userSettings.allow_friend_requests,
                hide_online: userSettings.hide_online,
                hide_last_online: userSettings.hide_last_online,
                allow_follow: userSettings.allow_follow,
                disable_whisper: userSettings.disable_whisper,
                allow_sex: userSettings.allow_sex,
                mention_type: userSettings.mention_type,
            };

            setTimeout(() => {
                Requests.settings
                    .sendUpdateAccount(newUserSettings)
                    .then((response) => {
                        let statusCode = response.data.status_code;
                        let message = response.data.message;

                        if (statusCode === 200) {
                            sendAlert('success', i18n.t('settings.generalSettings.success'));
                            setOriginalUserSettings(userSettings);
                            setUser({
                                ...user,
                                username: userSettings.username,
                                motto: userSettings.motto,
                            });
                        } else if (statusCode === 204) {
                            sendAlert(null);
                        } else if (message) {
                            sendAlert('error', message);
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    })
                    .finally(() => {
                        setUpdatingAccount(false);
                        scrollToTop();
                    });
            }, 500);
        } else if (page === 'email') {
            setUpdatingEmail(true);

            setTimeout(() => {
                Requests.settings
                    .sendUpdateEmail(email)
                    .then((response) => {
                        let statusCode = response.data.status_code;
                        let message = response.data.message;

                        if (statusCode === 200) {
                            sendAlert('success', i18n.t('settings.email.success'));
                        } else if (statusCode === 204) {
                            sendAlert(null);
                        } else if (message) {
                            sendAlert('error', message);
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    })
                    .finally(() => {
                        setUpdatingEmail(false);
                    });
            }, 500);
        } else if (page === 'password') {
            setUpdatingPassword(true);

            setTimeout(() => {
                Requests.settings
                    .sendUpdatePassword(oldPassword, newPassword, newPasswordRepeated)
                    .then((response) => {
                        let statusCode = response.data.status_code;
                        let message = response.data.message;

                        if (statusCode === 200) {
                            sendAlert('success', i18n.t('settings.password.success'));
                            setOldPassword(null);
                            setNewPassword(null);
                            setNewPasswordRepeated(null);
                        } else if (statusCode === 204) {
                            sendAlert(null);
                        } else if (message) {
                            sendAlert('error', message);
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    })
                    .finally(() => {
                        setUpdatingPassword(false);
                    });
            }, 500);
        }
    };

    React.useEffect(() => {
        scrollToTop();

        setTimeout(() => {
            Requests.settings
                .getUserSettings()
                .then((response) => {
                    setOriginalUserSettings(response.data);
                    setUserSettings(response.data);
                    setEmail(response.data.email);
                })
                .catch((error) => {
                    console.log(error);
                })
                .finally(() => { });
        }, [config.dev.timeout]);
    }, []);

    return (
        <>
            <Head alert={alert} />
            <Header visited='home' />
            <div className='webcenter flex-column'>
                <div className='flex'>
                    <div className='col-16 flex-column mr-right-3'>
                        <div className='general-box-3 flex-column pd-0 overflow-hidden'>
                            <div className='general-box-header flex'>
                                <div className='general-box-header-icon flex'>
                                    <icon name='plus-magic' className='mr-auto'></icon>
                                </div>
                                <label className='flex-column color-4 mr-auto-top-bottom text-nowrap'>
                                    <h4 className='bold text-nowrap'>{i18n.t('settings.othersPreferences.title')}</h4>
                                    <h6 className='text-nowrap'>
                                        {i18n.t('settings.othersPreferences.smallText')}
                                    </h6>
                                </label>
                            </div>
                            <div className='general-box-content flex-column'>
                                {page === 'account' ? (
                                    <a className='general-box-menu-link no-link color-5 flex visited'>
                                        <label className='pointer-none mr-auto-top-bottom'>
                                            <h5 className='bold'>{i18n.t('settings.othersPreferences.generalPreferences')}</h5>
                                        </label>
                                    </a>
                                ) : (
                                    <Link
                                        to='/settings/email'
                                        className='general-box-menu-link no-link color-5 flex'
                                        onClick={() => changePage('account')}
                                    >
                                        <label className='pointer-none mr-auto-top-bottom'>
                                            {i18n.t('settings.othersPreferences.generalPreferences')}
                                        </label>
                                    </Link>
                                )}
                                {page === 'email' ? (
                                    <a className='general-box-menu-link no-link color-5 flex visited'>
                                        <label className='pointer-none mr-auto-top-bottom'>
                                            <h5 className='bold'>{i18n.t('settings.othersPreferences.myMail')}</h5>
                                        </label>
                                    </a>
                                ) : (
                                    <Link
                                        to='/settings/email'
                                        className='general-box-menu-link no-link color-5 flex'
                                        onClick={() => changePage('email')}
                                    >
                                        <label className='pointer-none mr-auto-top-bottom'>
                                            {i18n.t('settings.othersPreferences.myMail')}
                                        </label>
                                    </Link>
                                )}
                                {page === 'password' ? (
                                    <a className='general-box-menu-link no-link color-5 flex visited'>
                                        <label className='pointer-none mr-auto-top-bottom'>
                                            <h5 className='bold'>{i18n.t('settings.othersPreferences.myPassword')}</h5>
                                        </label>
                                    </a>
                                ) : (
                                    <Link
                                        to='/settings/password'
                                        className='general-box-menu-link no-link color-5 flex'
                                        onClick={() => changePage('password')}
                                    >
                                        <label className='pointer-none mr-auto-top-bottom'>
                                            <h5>{i18n.t('settings.othersPreferences.myPassword')}</h5>
                                        </label>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                    {page === 'account' && (
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
                    )}
                    {page === 'email' && (
                        <div className='general-box-3 flex-column pd-0 overflow-hidden'>
                            <div className='general-box-header flex'>
                                <div className='general-box-header-icon flex'>
                                    <icon name='gear' className='mr-auto'></icon>
                                </div>
                                <label className='flex-column color-4 mr-auto-top-bottom text-nowrap'>
                                    <h4 className='bold text-nowrap'>{i18n.t('settings.email.title')}</h4>
                                    <h6 className=' text-nowrap'>
                                        {i18n.t('settings.email.smallText')}
                                    </h6>
                                </label>
                            </div>
                            <div className='general-box-content flex-column pd-3'>
                                <label className='flex-column color-5 mr-bottom-3'>
                                    <h5 className='bold uppercase mr-bottom-2'>
                                        {i18n.t('settings.email.infos.title')}
                                    </h5>
                                    <h6 className='mr-bottom-1'>
                                        {i18n.t('settings.email.infos.smallText')}
                                    </h6>
                                    <h6>
                                        {i18n.t('settings.email.infos.smallText2')}
                                    </h6>
                                </label>
                                <form
                                    className='change-email-form flex-column'
                                    onSubmit={handleSubmit}
                                >
                                    <div className='md-input mr-bottom-2'>
                                        <label className='flex-column color-4 mr-bottom-1'>
                                            <h5>{i18n.t('settings.email.emailInput.newMail')}</h5>
                                        </label>
                                        <input
                                            type='text'
                                            name='email'
                                            value={email !== null ? email : ''}
                                            placeholder={i18n.t('settings.email.emailInput.newMail')}
                                            style={{ height: 'auto' }}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <button
                                        className={`${config.cmsStyles.buttonsClass}`}
                                        type='submit'
                                        disabled={isUpdatingEmail}
                                        style={{ width: '100%', height: '47px' }}
                                    >
                                        <label className='mr-auto color-1'>
                                            <h5 className='uppercase'>{i18n.t('settings.email.button')}</h5>
                                        </label>
                                    </button>
                                </form>
                            </div>
                        </div>
                    )}
                    {page === 'password' && (
                        <div className='col-17 flex-column'>
                            <div className='general-box-3 flex-column pd-0 overflow-hidden'>
                                <div className='general-box-header flex'>
                                    <div className='general-box-header-icon flex'>
                                        <icon name='gear' className='mr-auto'></icon>
                                    </div>
                                    <label className='flex-column color-4 mr-auto-top-bottom text-nowrap'>
                                        <h4 className='bold text-nowrap'>{i18n.t('settings.password.title')}</h4>
                                        <h6 className=' text-nowrap'>
                                            {i18n.t('settings.password.smallText')}
                                        </h6>
                                    </label>
                                </div>
                                <div className='general-box-content flex-column pd-3'>
                                    <label className='flex-column color-5 mr-bottom-3'>
                                        <h5 className='bold uppercase mr-bottom-2'>
                                            {i18n.t('settings.password.infos.title')}
                                        </h5>
                                        <h6 className='mr-bottom-1'>
                                            {i18n.t('settings.password.infos.smallText')}
                                        </h6>
                                        <h6 className='mr-bottom-1'>
                                            {i18n.t('settings.password.infos.smallText2')}
                                        </h6>
                                        <h6>
                                            {i18n.t('settings.password.infos.smallText3')}
                                        </h6>
                                    </label>
                                    <form
                                        className='change-password-form flex-column'
                                        onSubmit={handleSubmit}
                                    >
                                        <div className='md-input mr-bottom-2'>
                                            <label className='flex-column color-4 mr-bottom-1'>
                                                <h5>{i18n.t('settings.password.passwordInput.currentPassword')}</h5>
                                            </label>
                                            <input
                                                type='password'
                                                name='current-password'
                                                placeholder={i18n.t('settings.password.passwordInput.placeholders.currentPassword')}
                                                style={{ height: 'auto' }}
                                                value={oldPassword !== null ? oldPassword : ''}
                                                onChange={(e) => setOldPassword(e.target.value)}
                                            />
                                            <div className='input-warns'></div>
                                        </div>
                                        <div className='md-input mr-bottom-2'>
                                            <label className='flex-column color-4 mr-bottom-1'>
                                                <h5>{i18n.t('settings.password.passwordInput.newPassword')}</h5>
                                            </label>
                                            <input
                                                type='password'
                                                name='new-password'
                                                placeholder={i18n.t('settings.password.passwordInput.placeholders.newPassword')}
                                                style={{ height: 'auto' }}
                                                value={newPassword !== null ? newPassword : ''}
                                                onChange={(e) => setNewPassword(e.target.value)}
                                            />
                                            <div className='input-warns'></div>
                                        </div>
                                        <div className='md-input mr-bottom-2'>
                                            <label className='flex-column color-4 mr-bottom-1'>
                                                <h5>{i18n.t('settings.password.passwordInput.repeatPassword')}</h5>
                                            </label>
                                            <input
                                                type='password'
                                                name='confirm-new-password'
                                                placeholder={i18n.t('settings.password.passwordInput.placeholders.repeatPassword')}
                                                style={{ height: 'auto' }}
                                                value={
                                                    newPasswordRepeated !== null
                                                        ? newPasswordRepeated
                                                        : ''
                                                }
                                                onChange={(e) =>
                                                    setNewPasswordRepeated(e.target.value)
                                                }
                                            />
                                            <div className='input-warns'></div>
                                        </div>
                                        <button
                                            className={`${config.cmsStyles.buttonsClass}`}
                                            type='submit'
                                            style={{ width: '100%', height: '47px' }}
                                            disabled={isUpdatingPassword}
                                        >
                                            <label className='mr-auto color-1'>
                                                <h5 className='uppercase'>{i18n.t('settings.password.button')}</h5>
                                            </label>
                                        </button>
                                        <div className='form-warns flex'></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <Footer/>
            </div>
            
        </>
    );
};

export default Settings;
