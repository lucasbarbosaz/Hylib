import React from 'react';
import { useParams } from "react-router-dom";
import Alert from '../../components/Alert';
import Head from "../../components/Head";
import Header from "../../components/Header";
import Requests from '../../services/Requests';
import StoreContext from "../../store/Context";

const RecoveryPassword = () => {
    const { config } = React.useContext(StoreContext);

    const [isLoading, setLoading] = React.useState(false);

    const [id, setId] = React.useState(null);
    const [username, setUsername] = React.useState(null);

    const [password, setNewPassword] = React.useState(null);
    const [passwordRepeat, setNewPasswordRepeat] = React.useState(null);

    const [alert, setAlert] = React.useState(null);

    const params = useParams();
    const resetKey = params.resetkey;

    const sendAlert = (severity, message) => {
        setAlert(
            severity === null || message === null ? (
                null
            ) : (
                <Alert message={message} />
            )
        );
    }

    React.useEffect(() => {
        setTimeout(() => {
            Requests.recoveryPassword
                .getResetKey(resetKey)
                .then(response => {
                    let statusCode = response.data.status_code;

                    if (statusCode === 200) {
                        setId(response.data.player_id);
                        setUsername(response.data.username);
                    }
                })
                .catch(error => console.log(error))
                .finally();
        }, [config.dev[0].timeout])
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        setTimeout(() => {
            Requests.recoveryPassword
                .sendRequestNewPassword(resetKey, password, passwordRepeat)
                .then(response => {
                    let statusCode = response.data.status_code;
                    let message = response.data.message;

                    if (statusCode === 200) {
                        sendAlert('success', 'Sua senha foi redefinida com sucesso!')

                    } else if (statusCode === 204) {
                        sendAlert(null)

                    } else if (message) {
                        sendAlert('error', message)
                    }

                })
                .catch(error => console.log(error))
                .finally(() => {
                    setLoading(false)
                })
        }, [config.dev[0].timeout])
    }

    return (
        <>
            <Head alert={alert} />
            <Header />
            <div className="webcenter flex-column">
                <div className="flex">
                    <div className="col-17 flex-column">
                        <div className="general-box-3 flex-column pd-0 overflow-hidden">

                            <div className="general-box-header flex">
                                <div className="general-box-header-icon flex">
                                    <icon name="gear" className="mr-auto"></icon>
                                </div>
                                <label className="flex-column color-4 mr-auto-top-bottom text-nowrap">
                                    <h4 className="bold text-nowrap">Recupere sua conta!</h4>
                                    <h6 className=" text-nowrap">Olá {username}, digite sua nova senha e repita a mesma para confirmar</h6>
                                </label>
                            </div>

                            <form className="change-email-form flex-column" onSubmit={handleSubmit}>
                                <li className="list-none flex-column padding-max gray">
                                    <label className="margin-bottom-min">
                                        <h5 className="bold uppercase">Nova senha</h5>
                                        <h5>Digite sua nova senha</h5>
                                    </label>
                                    <div>
                                        <input type="password" name="password" placeholder="Sua senha aqui..." onChange={(e) => setNewPassword(e.target.value)} />
                                    </div>
                                </li>

                                <li className="list-none flex-column padding-max gray">
                                    <label className="margin-bottom-min">
                                        <h5 className="bold uppercase">Repita a senha</h5>
                                        <h5>Confirme-a para não esquecer!</h5>
                                    </label>
                                    <div>
                                        <input type="password" name="repeatpassword" placeholder="Repita sua senha.." onChange={(e) => setNewPasswordRepeat(e.target.value)} />
                                    </div>
                                </li>
                                <li className="list-none flex padding-max gray padding-top-none">
                                    <button type="submit" className={`${config.cmsStyles.buttonsClass} no-link`} disabled={isLoading} style={{ width: "100%", height: "42px", left: "-1px", fontSize: "14px" }}>
                                        <label className="margin-auto white">Salvar alterações</label>
                                    </button>
                                </li>
                            </form>
                        </div>
                    </div>
                    <div className="col-16 flex-column">
                        <div className="general-box padding-none height-fit overflow-hidden">
                            <div className="gray" id="general-warning-store">
                                <h5 className="bold uppercase">Crie uma senha segura!</h5>
                                <h5 className="margin-top-bottom-min">Recomendamos que você utilize uma senha forte que inclua <b>caracteres especiais, letra maiúsculas e minúsculas e números</b> para proteger ainda mais sua conta! <br /><br /><b>JAMAIS UTILIZE SENHAS QUE VOCÊ JÁ USE EM OUTROS SITES!</b></h5>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RecoveryPassword;