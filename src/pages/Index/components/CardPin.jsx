import { useContext, useState } from 'react';
import { useHistory } from "react-router-dom";
import Alert from "../../../components/Alert";
import AuthService from "../../../services/AuthService";
import Requests from "../../../services/Requests";
import StoreContext from '../../../store/Context';
import { i18n } from '../../../translate/i18n';

const CardPin = ({ isLoggingIn, setLoggingIn, setAlert }) => {
    const { config, setToken, setUser } = useContext(StoreContext);
    const history = useHistory();

    const [loginPin, setLoginPin] = useState(null);

    const authenticate = (token, user) => {
        AuthService.setupAxiosHeaders(token);
        setToken(token);
        setUser(user);

        history.push('/home');
    };

    const sendAlert = (severity, message) => {
        setAlert(severity === null || message === null ? null : <Alert message={message} />);
    };

    const submitPin = (e) => {
        if (e !== undefined) e.preventDefault();

        setLoggingIn(true)

        setTimeout(() => {
            Requests
                .index
                .submitPin(loginPin)
                .then(response => {
                    let statusCode = response.data.status_code;
                    let message = response.data.message;

                    if (statusCode === 200) {
                        authenticate(response.data.token, response.data.user)
                    } else {
                        sendAlert('error', message);
                    }
                })
                .catch(error => {
                    console.log(error);
                })
                .finally(() => {
                    setLoggingIn(false);
                })
        }, 500);
    };


    return (
        <form
            onSubmit={(e) => submitPin(e)}
            className='lgn-area general-box flex-column margin-top-md'
        >
            <div
                className='general-header-box flex'
                style={{ background: `${config.cmsStyles.cardLoginHex}` }}
            >
                <div className='flex margin-auto-top-bottom margin-right-min'>
                    <icon name='pad'></icon>
                </div>
                <label className='white flex-column'>
                    <h4 className='bold'>{i18n.t('index.pin.title')}</h4>
                    <h5>{i18n.t('index.pin.smallText')}</h5>
                </label>
            </div>
            <div className='width-content flex inputs-login margin-bottom-min'>
                <icon name='frank-head'></icon>
                <input
                    type='text'
                    name='identification'
                    placeholder={i18n.t('index.pin.placeholders.pinInput')}
                    className='border-none'
                    onChange={(e) => setLoginPin(e.target.value)}
                />
            </div>
            <div className='width-content flex inputs-loginPin'>
                <button
                    type='submit'
                    className={`lgn-button ${config.cmsStyles.buttonsClass} transition-disabled margin-left-min`}
                    style={{ minWidth: '120px', height: '45px' }}
                    disabled={isLoggingIn}
                >
                    <label className='margin-auto white'>
                        {isLoggingIn === false ? (
                            <h5 className='bold fs-14 uppercase'>
                                {i18n.t('index.pin.pinButton')}
                            </h5>
                        ) : (
                            <>
                                <h5 className='bold fs-14 uppercase'> </h5>
                                <div className='loader-ellipsis pointer-none'>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </>
                        )}
                    </label>
                </button>
            </div>
        </form>
    );
};

export default CardPin;
