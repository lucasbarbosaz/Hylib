import { MenuItem, Select } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import Alert from '../../components/Alert';
import Head from '../../components/Head';
import Header from '../../components/Header';
import Switch from '../../components/Switch';
import Requests from '../../services/Requests';
import StoreContext from '../../store/Context';
import { scrollToTop } from '../../utils/utils';

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
                            sendAlert('success', 'Preferências salvas com sucesso!');
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
                            sendAlert('success', 'E-mail alterado com sucesso!');
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
                            sendAlert('success', 'Senha alterada com sucesso!');
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
                .finally(() => {});
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
                                    <h4 className='bold text-nowrap'>Outras preferências</h4>
                                    <h6 className='text-nowrap'>
                                        Veja o que mais você pode alterar em sua conta.
                                    </h6>
                                </label>
                            </div>
                            <div className='general-box-content flex-column'>
                                {page === 'account' ? (
                                    <a className='general-box-menu-link no-link color-5 flex visited'>
                                        <label className='pointer-none mr-auto-top-bottom'>
                                            <h5 className='bold'>Preferências geral</h5>
                                        </label>
                                    </a>
                                ) : (
                                    <Link
                                        to='/settings/email'
                                        className='general-box-menu-link no-link color-5 flex'
                                        onClick={() => changePage('account')}
                                    >
                                        <label className='pointer-none mr-auto-top-bottom'>
                                            Preferências geral
                                        </label>
                                    </Link>
                                )}
                                {page === 'email' ? (
                                    <a className='general-box-menu-link no-link color-5 flex visited'>
                                        <label className='pointer-none mr-auto-top-bottom'>
                                            <h5 className='bold'>Meu email</h5>
                                        </label>
                                    </a>
                                ) : (
                                    <Link
                                        to='/settings/email'
                                        className='general-box-menu-link no-link color-5 flex'
                                        onClick={() => changePage('email')}
                                    >
                                        <label className='pointer-none mr-auto-top-bottom'>
                                            Meu email
                                        </label>
                                    </Link>
                                )}
                                {page === 'password' ? (
                                    <a className='general-box-menu-link no-link color-5 flex visited'>
                                        <label className='pointer-none mr-auto-top-bottom'>
                                            <h5 className='bold'>Minha senha</h5>
                                        </label>
                                    </a>
                                ) : (
                                    <Link
                                        to='/settings/password'
                                        className='general-box-menu-link no-link color-5 flex'
                                        onClick={() => changePage('password')}
                                    >
                                        <label className='pointer-none mr-auto-top-bottom'>
                                            <h5>Minha senha</h5>
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
                                        <h4 className='bold text-nowrap'>Configurações rápidas</h4>
                                        <h6 className=' text-nowrap'>
                                            Aqui estão algumas configurações rápidas e essênciais
                                            que você pode alterar.
                                        </h6>
                                    </label>
                                </div>
                                <form
                                    className='change-email-form flex-column'
                                    onSubmit={handleSubmit}
                                >
                                    <li className='list-none flex-column padding-max gray'>
                                        <label className='margin-bottom-min'>
                                            <h5 className='bold uppercase'>Sua missão</h5>
                                            <h5>No que você está pensando hoje {user.username}?</h5>
                                        </label>
                                        <div>
                                            <icon
                                                type='motto'
                                                style={{ top: '11px', left: '11px' }}
                                            ></icon>
                                            <input
                                                type='text'
                                                name='motto'
                                                placeholder='Sua missão aqui...'
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
                                            <h5 className='bold'>Pedidos de amizade</h5>
                                            <h5>Eu desejo receber pedidos de amizade de todos.</h5>
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
                                            <h5 className='bold'>Último online</h5>
                                            <h5>
                                                Permitir que outros usuários vejam a última vez que
                                                você entrou no hotel?
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
                                            <h5 className='bold'>Estado online</h5>
                                            <h5>
                                                Permitir que outros usuários vejam quando você
                                                estiver online?
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
                                            <h5 className='bold'>Copiar visual</h5>
                                            <h5>
                                                Permitir que outros usuários possam copiar o seu
                                                visual? (comando <i>:copy</i>)
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
                                            <h5 className='bold'>Te segui</h5>
                                            <h5>
                                                Permitir que outros usuários possam te seguir?
                                                (comando <i>:follow</i>)
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
                                            <h5 className='bold'>Negociações</h5>
                                            <h5>
                                                Permitir que outros usuários possam negociar com
                                                você?
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
                                            <h5 className='bold'>Sussurros</h5>
                                            <h5>
                                                Permitir que outros usuários sussurrem com você?
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
                                            <h5 className='bold'>Sexo</h5>
                                            <h5>
                                                Permitir que outros usuários usem o comando{' '}
                                                <i>:sexo</i> com você?
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
                                            <h5 className='bold'>Menções</h5>
                                            <h5>
                                                Quem pode usar <i>@{user.username}</i> para
                                                mencionar você?
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
                                                <MenuItem value={'FRIENDS'}>Amigos</MenuItem>
                                                <MenuItem value={'ALL'}>Todos</MenuItem>
                                                <MenuItem value={'NONE'}>Ninguém</MenuItem>
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
                                    <h4 className='bold text-nowrap'>Alterar email</h4>
                                    <h6 className=' text-nowrap'>
                                        Aqui você pode trocar o email da sua conta.
                                    </h6>
                                </label>
                            </div>
                            <div className='general-box-content flex-column pd-3'>
                                <label className='flex-column color-5 mr-bottom-3'>
                                    <h5 className='bold uppercase mr-bottom-2'>
                                        Seu email é muito importante!
                                    </h5>
                                    <h6 className='mr-bottom-1'>
                                        Ao alterar seu email, use um email real! Porque? Caso algum
                                        dia você esqueça a senha da sua conta, com certeza,
                                        precisaremos do seu email para fazer esse processo.
                                    </h6>
                                    <h6>
                                        Não se preocupe, não enviamos esses e-mails promocionais
                                        chatos ou coisas desnecessárias no seu email.
                                    </h6>
                                </label>
                                <form
                                    className='change-email-form flex-column'
                                    onSubmit={handleSubmit}
                                >
                                    <div className='md-input mr-bottom-2'>
                                        <label className='flex-column color-4 mr-bottom-1'>
                                            <h5>Novo email</h5>
                                        </label>
                                        <input
                                            type='text'
                                            name='email'
                                            value={email !== null ? email : ''}
                                            placeholder='Novo email...'
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
                                            <h5 className='uppercase'>Concluir</h5>
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
                                        <h4 className='bold text-nowrap'>Alterar senha</h4>
                                        <h6 className=' text-nowrap'>
                                            Aqui você pode alterar a senha da sua conta.
                                        </h6>
                                    </label>
                                </div>
                                <div className='general-box-content flex-column pd-3'>
                                    <label className='flex-column color-5 mr-bottom-3'>
                                        <h5 className='bold uppercase mr-bottom-2'>
                                            Sempre escolha uma senha segura!
                                        </h5>
                                        <h6 className='mr-bottom-1'>
                                            Segurança nunca é demais! Portanto, ao alterar sua
                                            senha, de preferência, <b>escolha uma senha segura</b>,
                                            que você lembre e também que seja diferente daquela que
                                            você já usa em outros habbos.
                                        </h6>
                                        <h6 className='mr-bottom-1'>
                                            <b>Nunca dê a ninguém acesso à sua conta!</b> Ao
                                            fornecer sua senha, não somos responsáveis ​​por isso;
                                            portanto, é de sua exclusiva responsabilidade sua
                                            comprometer o acesso à sua conta para outras pessoas.
                                        </h6>
                                        <h6>
                                            E nunca, de forma alguma, um membro de nossa equipe
                                            solicitará sua senha e, se solicitar, você deve
                                            denunciar imediatamente a um membro superior.
                                        </h6>
                                    </label>
                                    <form
                                        className='change-password-form flex-column'
                                        onSubmit={handleSubmit}
                                    >
                                        <div className='md-input mr-bottom-2'>
                                            <label className='flex-column color-4 mr-bottom-1'>
                                                <h5>Senha atual</h5>
                                            </label>
                                            <input
                                                type='password'
                                                name='current-password'
                                                placeholder='Senha atual...'
                                                style={{ height: 'auto' }}
                                                value={oldPassword !== null ? oldPassword : ''}
                                                onChange={(e) => setOldPassword(e.target.value)}
                                            />
                                            <div className='input-warns'></div>
                                        </div>
                                        <div className='md-input mr-bottom-2'>
                                            <label className='flex-column color-4 mr-bottom-1'>
                                                <h5>Nova senha</h5>
                                            </label>
                                            <input
                                                type='password'
                                                name='new-password'
                                                placeholder='Nova senha...'
                                                style={{ height: 'auto' }}
                                                value={newPassword !== null ? newPassword : ''}
                                                onChange={(e) => setNewPassword(e.target.value)}
                                            />
                                            <div className='input-warns'></div>
                                        </div>
                                        <div className='md-input mr-bottom-2'>
                                            <label className='flex-column color-4 mr-bottom-1'>
                                                <h5>Cofirme sua nova senha</h5>
                                            </label>
                                            <input
                                                type='password'
                                                name='confirm-new-password'
                                                placeholder='Confirme sua nova senha...'
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
                                                <h5 className='uppercase'>Concluir</h5>
                                            </label>
                                        </button>
                                        <div className='form-warns flex'></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Settings;
