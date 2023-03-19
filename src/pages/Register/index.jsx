/* eslint-disable jsx-a11y/alt-text */
import HCaptcha from '@hcaptcha/react-hcaptcha';
import React from "react";
import { useHistory } from "react-router-dom";
import comment from '../../assets/img/custom/comments.png';
import Alert from '../../components/Alert';
import Check from '../../components/Check';
import Head from '../../components/Head';
import Header from '../../components/Header';
import AuthService from "../../services/AuthService";
import Requests from '../../services/Requests';
import StoreContext from "../../store/Context";
import { i18n } from "../../translate/i18n";
import { scrollToTop } from "../../utils/utils";



const Register = () => {
    const { config, setToken, setUser } = React.useContext(StoreContext);

    const [alertUsername, setAlertUsername] = React.useState(null);
    const [alertEmail, setAlertEmail] = React.useState(null);
    const [alertPassword, setAlertPassword] = React.useState(null);

    const [captcha, sethCaptcha] = React.useState("");
    const captchaRef = React.useRef();
    const history = useHistory();

    const timeout = config.dev ? (config.dev.timeout ? config.dev.timeout : 0) : 0;

    const newUserInitialState = { username: "", email: "", password: "", gender: "female", day: null, month: null, year: null, hCaptcha: '' };

    const [newUser, setNewUser] = React.useState(newUserInitialState);

    const [isRegisteringNewUser, setRegisteringNewUser] = React.useState(false);
    const [registerAlert, setRegisterAlert] = React.useState(null);


    const clearRegisterForms = () => {
        setNewUser(newUserInitialState);
    }

    const sendAlert = (type, severity, message) => {
        if (type === 'username') {
            setAlertUsername(
                severity === null || message === null ? (
                    null
                ) : (
                    <Check type={severity} message={message} />
                )
            );
        } else if (type === 'email') {
            setAlertEmail(
                severity === null || message === null ? (
                    null
                ) : (
                    <Check type={severity} message={message} />
                )
            );
        } else if (type === 'password') {
            setAlertPassword(
                severity === null || message === null ? (
                    null
                ) : (
                    <Check type={severity} message={message} />
                )
            );
        }
    }

    const sendRegisterFormAlert = (severity, message) => {
        setRegisterAlert(
            severity === null || message === null ? (
                null
            ) : (
                <Alert message={message} />
            )
        );
    }

    const onKeyUpInputs = (type, value) => {
        if (type === 'username') {
            if (value.trim() === "") {
                setAlertUsername(null);
                return;
            }

            if (value.length > 15) {
                sendAlert('error', 'Nome de usuário inválido');
                return;
            }

            setTimeout(() => {
                Requests.register.check
                    .validateUsername(value)
                    .then(response => {
                        let statusCode = response.data.status_code;
                        let message = response.data.message;

                        if (statusCode === 400) {
                            sendAlert('username', 'error', message);
                        } else {
                            sendAlert('username', 'success', '');
                        }

                    }).catch(error => {
                        console.log(error);
                    }).finally(() => {
                    })
            }, timeout);
        } else if (type === 'email') {

            if (value.trim() === "") {
                setAlertEmail(null);
                return;
            }

            setTimeout(() => {
                Requests.register.check
                    .validateMail(value)
                    .then(response => {
                        let statusCode = response.data.status_code;
                        let message = response.data.message;

                        if (statusCode === 400) {
                            sendAlert('email', 'error', message);
                        } else {
                            sendAlert('email', 'success', '');
                        }

                    }).catch(error => {
                        console.log(error);
                    }).finally(() => {
                    })
            }, timeout);
        } else if (type === 'password') {
            if (value.trim() === "") {
                setAlertPassword(null);
                return;
            }

            setTimeout(() => {
                Requests.register.check
                    .validatePassword(value)
                    .then(response => {
                        let statusCode = response.data.status_code;
                        let message = response.data.message;

                        if (statusCode === 400) {
                            sendAlert('password', 'error', message);
                        } else {
                            sendAlert('password', 'success', '');
                        }

                    }).catch(error => {
                        console.log(error);
                    }).finally(() => {
                    })
            }, timeout);
        }
    }

    const updateNewUser = (field, newValue) => {
        setNewUser({ ...newUser, [field]: newValue });
    }

    const authenticate = (token, user) => {
        AuthService.setupAxiosHeaders(token);
        setToken(token);
        setUser(user);

        history.push('/me');
    }

    const handleSubmitNewUser = (e) => {
        e.preventDefault();

        setRegisteringNewUser(true)
        setTimeout(() => {
            Requests.register
                .registerUser(newUser)
                .then(response => {
                    let statusCode = response.data.status_code;
                    let message = response.data.message;

                    if (statusCode === 200) {
                        authenticate(response.data.token, response.data.user)

                    } else if (message) {
                        scrollToTop();
                        sendRegisterFormAlert('error', message);
                    }
                })
                .catch(error => {
                    console.log(error)
                })
                .finally(() => {
                    setRegisteringNewUser(false)
                })
        }, 500)
    }

    return (
        <>
            <Head alert={registerAlert} />
            <Header />
            <div className="webcenter flex-column">
                <div className="flex">
                    <div className="col-3 flex-column">
                        <div className="general-box register-area margin-top-md height-auto">
                            <div className="general-header-box flex">
                                <div className="flex margin-auto-top-bottom margin-right-min">
                                    <icon name="search"></icon>
                                </div>
                                <label className="white flex-column">
                                    <h4 className="bold">{i18n.t('register.title')}</h4>
                                    <h5>{i18n.t('register.smallText')}</h5>
                                </label>
                            </div>

                            <form onSubmit={handleSubmitNewUser} className="padding-minm padding-top-none register-form">
                                <div className="flex-column margin-bottom-min">
                                    <label className="gray margin-bottom-minm">
                                        <h6>{i18n.t('register.usernameInput.details')}<br /><br />{i18n.t('register.usernameInput.requirements')}</h6>
                                    </label>
                                    <div className="register-inputs width-content flex">
                                        <icon name="head-mini"></icon>
                                        <input type="text" name="username" placeholder={i18n.t('register.usernameInput.placeholder')} data-input="username" id="username" value={newUser.username} onKeyUp={e => onKeyUpInputs("username", e.target.value)} onChange={(e) => updateNewUser('username', e.target.value)} />
                                        <div className="reg-status username pointer-none">
                                            {alertUsername}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex-column margin-bottom-min">
                                    <label className="gray margin-bottom-minm">
                                        <h6>{i18n.t('register.emailInput.requirements')}</h6>
                                    </label>
                                    <div className="register-inputs width-content flex">
                                        <icon name="email"></icon>
                                        <input type="email" name="email" placeholder={i18n.t('register.emailInput.placeholder')} data-input="email" id="email" value={newUser.email} onKeyUp={e => onKeyUpInputs("email", e.target.value)} onChange={(e) => updateNewUser('email', e.target.value)} />
                                        <div className="reg-status email pointer-none">
                                            {alertEmail}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex-column margin-bottom-min">
                                    <label className="gray margin-bottom-minm">
                                        <h6>{i18n.t('register.passwordInput.requirements')}</h6>
                                    </label>
                                    <div className="register-inputs width-content flex">
                                        <icon name="lock-2"></icon>
                                        <input type="password" name="password" placeholder={i18n.t('register.passwordInput.placeholder')} data-input="password" value={newUser.password} onKeyUp={e => onKeyUpInputs("password", e.target.value)} onChange={(e) => updateNewUser('password', e.target.value)} />
                                        <div className="reg-status password pointer-none">
                                            {alertPassword}
                                        </div>
                                    </div>
                                </div>
                                <label className="gray">
                                    <h6>{i18n.t('register.gender.requirements')}</h6>
                                </label>
                                <div className="flex margin-top-min">
                                    <div className="flex width-content">
                                        <div className="margin-right-minm flex reg-gender">
                                            <input type="radio" name="gender" value="female" id="gender-female" className="display-none" onClick={(e) => updateNewUser('gender', e.target.value)} defaultChecked />
                                            <label for="gender-female" className="flex cursor-pointer width-content">
                                                <div className="gender-female-option pointer-none">
                                                    <div className="flex">
                                                        <icon name="female"></icon>
                                                        <h6 className="margin-auto-top-bottom">{i18n.t('register.gender.female')}</h6>
                                                    </div>
                                                </div>
                                            </label>
                                        </div>
                                        <div className="margin-left-minm flex reg-gender">
                                            <input type="radio" name="gender" value="male" id="gender-male" className="display-none" onClick={(e) => updateNewUser('gender', e.target.value)} />
                                            <label for="gender-male" className="flex cursor-pointer width-content">
                                                <div className="gender-male-option pointer-none">
                                                    <div className="flex">
                                                        <icon name="male"></icon>
                                                        <h6 className="margin-auto-top-bottom">{i18n.t('register.gender.male')}</h6>
                                                    </div>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="flex-column col-6 margin-left-min">
                                        <div className="result-register-card flex">
                                            <div className="habbo-result female"></div>
                                            <label className="white flex-column text-nowrap">
                                                <h4 className="bold text-nowrap">{newUser.username !== null && newUser.username !== '' ? newUser.username : i18n.t('register.registerPreview.title')}</h4>
                                                <h6 className="margin-auto-top margin-bottom-minm text-nowrap">{i18n.t('register.registerPreview.smallText')}</h6>
                                            </label>
                                        </div>
                                        <div className="reg-recaptcha margin-top-min">
                                            {<HCaptcha
                                                ref={captchaRef}
                                                sitekey={config.hCaptchaSiteKey}
                                                onVerify={(token) => updateNewUser('hCaptcha', token)}
                                                onExpire={e => sethCaptcha("")}
                                            />
                                            }
                                        </div>
                                        <div className="margin-top-min">
                                            <button type="submit" name="submit-reg" className={`${config.cmsStyles.buttonsClass}`} disabled={isRegisteringNewUser} style={{ width: "100%", height: "48px" }}>
                                                <label className="margin-auto white">
                                                    {
                                                        isRegisteringNewUser == false ?
                                                            <h4 className="bold">{i18n.t('register.buttons.createAccount')}</h4>
                                                            :
                                                            <><h5 className="bold fs-14 uppercase"></h5>
                                                                <div className="loader-ellipsis pointer-none">
                                                                    <span></span>
                                                                    <span></span>
                                                                    <span></span>
                                                                </div></>
                                                    }

                                                </label>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="flex-column margin-left-max margin-top-max col-5">
                        <label className="gray flex-column">
                            <h2 className="bold margin-bottom-min">{i18n.t('register.aboutHotel.title')} {config.hotel.name}</h2>
                            <div className="flex margin-auto-bottom">
                                <h5 className="fs-14"><b>{config.hotel.name}</b> {i18n.t('register.aboutHotel.firstDescription')}</h5>
                                <img className="margin-auto-top-bottom" style={{ minWidth: "200px", height: "123px" }} src="https://images.habbo.com/c_images/WhatIsHabbo/ill_17.png" />
                            </div>
                            <div className="flex margin-top-md">
                                <img className="margin-auto-top-bottom" style={{ minWidth: "200px", height: "171px" }} src="https://images.habbo.com/c_images/WhatIsHabbo/ill_16.png" />
                                <h5 className="text-right fs-14">{i18n.t('register.aboutHotel.secondDescription')}</h5>
                            </div>
                            <div className="flex margin-auto-top">
                                <h5 className="fs-14">{i18n.t('register.aboutHotel.threeDescription')}</h5>
                                <img className="margin-auto-top-bottom" style={{ minWidth: "198px", height: "157px" }} src={comment} />
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;