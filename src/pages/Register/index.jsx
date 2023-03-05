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
                                    <h4 className="bold">Registre-se agora</h4>
                                    <h5>Junte-se a nós hoje!</h5>
                                </label>
                            </div>

                            <form onSubmit={handleSubmitNewUser} className="padding-minm padding-top-none register-form">
                                <div className="flex-column margin-bottom-min">
                                    <label className="gray margin-bottom-minm">
                                        <h6>Escolha seu nome de usuário sabiamente, <b>não toleramos vulgaridades em nomes de usuários!</b><br /><br />E o seu nome, também, deve ter entre <b>4 e 15 letras e sem caracteres especiais</b>.</h6>
                                    </label>
                                    <div className="register-inputs width-content flex">
                                        <icon name="head-mini"></icon>
                                        <input type="text" name="username" placeholder="Nome de usuário(a)" data-input="username" id="username" value={newUser.username} onKeyUp={e => onKeyUpInputs("username", e.target.value)} onChange={(e) => updateNewUser('username', e.target.value)} />
                                        <div className="reg-status username pointer-none">
                                            {alertUsername}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex-column margin-bottom-min">
                                    <label className="gray margin-bottom-minm">
                                        <h6>Certifique-se de utilizar um e-mail <b>válido</b> e <b>verdadeiro</b>, pois caso necessário para recuperação de senhas, entrar em contato e dentre outro, entraremos em contato pelo mesmo.</h6>
                                    </label>
                                    <div className="register-inputs width-content flex">
                                        <icon name="email"></icon>
                                        <input type="email" name="email" placeholder="Endereço de e-mail" data-input="email" id="email" value={newUser.email} onKeyUp={e => onKeyUpInputs("email", e.target.value)} onChange={(e) => updateNewUser('email', e.target.value)} />
                                        <div className="reg-status email pointer-none">
                                            {alertEmail}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex-column margin-bottom-min">
                                    <label className="gray margin-bottom-minm">
                                        <h6>Segurança nunca é demais! Utilize <b>uma senha segura</b> e fácil de você lembrar, outra opção é <b>aceitar sugestões de senhas pelo seu próprio navegador</b>, a senha fica salva nele ao fazer login, facilitando mais e te deixando seguro(a).</h6>
                                    </label>
                                    <div className="register-inputs width-content flex">
                                        <icon name="lock-2"></icon>
                                        <input type="password" name="password" placeholder="Senha" data-input="password" value={newUser.password} onKeyUp={e => onKeyUpInputs("password", e.target.value)} onChange={(e) => updateNewUser('password', e.target.value)} />
                                        <div className="reg-status password pointer-none">
                                            {alertPassword}
                                        </div>
                                    </div>
                                </div>
                                <label className="gray">
                                    <h6>Além de ser <b>obrigatório</b>, a <b>escolha de sexo</b> é essêncial para que ao você se registrar você possa receber presentes bem legal, além de também identificar o seu gênero de acordo com a sua escolha.</h6>
                                </label>
                                <div className="flex margin-top-min">
                                    <div className="flex width-content">
                                        <div className="margin-right-minm flex reg-gender">
                                            <input type="radio" name="gender" value="female" id="gender-female" className="display-none" onClick={(e) => updateNewUser('gender', e.target.value)} defaultChecked />
                                            <label for="gender-female" className="flex cursor-pointer width-content">
                                                <div className="gender-female-option pointer-none">
                                                    <div className="flex">
                                                        <icon name="female"></icon>
                                                        <h6 className="margin-auto-top-bottom">Sexo feminino</h6>
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
                                                        <h6 className="margin-auto-top-bottom">Sexo masculino</h6>
                                                    </div>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="flex-column col-6 margin-left-min">
                                        <div className="result-register-card flex">
                                            <div className="habbo-result female"></div>
                                            <label className="white flex-column text-nowrap">
                                                <h4 className="bold text-nowrap">{newUser.username !== null && newUser.username !== '' ? newUser.username : "Seu nome aqui!"}</h4>
                                                <h6 className="margin-auto-top margin-bottom-minm text-nowrap">Vamos embarcar?</h6>
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
                                                            <h4 className="bold">Vamos nessa!</h4>
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
                            <h2 className="bold margin-bottom-min">Venha conhecer o {config.hotel.name}!</h2>
                            <div className="flex margin-auto-bottom">
                                <h5 className="fs-14">O <b>{config.hotel.name}</b> é um comunidade virtua de pixels onde você pode criar seu próprio avatar, fazer muitos amigos, bater-papo com diversos usuários e usuárias do nosso hotel, construir e decorar seus próprios quartos, criar seus próprios jogos ou jogar os de outros usuários e muitos mais...</h5>
                                <img className="margin-auto-top-bottom" style={{ minWidth: "200px", height: "123px" }} src="https://images.habbo.com/c_images/WhatIsHabbo/ill_17.png" />
                            </div>
                            <div className="flex margin-top-md">
                                <img className="margin-auto-top-bottom" style={{ minWidth: "200px", height: "171px" }} src="https://images.habbo.com/c_images/WhatIsHabbo/ill_16.png" />
                                <h5 className="text-right fs-14">Criatividade e originalidade são super bem-vindas no <b>{config.hotel.name}</b>! Toda semana temos várias competições novas para você participar. De competições de quarto, atividades legais onde você pode expressar todos os seus dons artísticos e criativos e, ainda por cima, ganhar conquistas e prêmios! Bateu a inspiração? Dê uma olhada nas nossas <b>notícias</b> para ficar por dentro das últimas atividades e competições da semana!</h5>
                            </div>
                            <div className="flex margin-auto-top">
                                <h5 className="fs-14">Você adora bater papo e encontrar os seus amigos? os <b>{config.hotel.name} Grupos, Fórums e comunidades de RPG</b> são ótimas opções para você. Entre no exército e assuma seus deveres, monte a sua própria escola e decida você mesmo o que estudar, e arrase na passarela ou corra para a emergência e comece a salvar vidas pixeladas.</h5>
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