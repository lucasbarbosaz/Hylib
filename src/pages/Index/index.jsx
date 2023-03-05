import React from "react";
import { Link, useHistory } from "react-router-dom";
import ghostAvatar from "../../assets/img/ghost.png";
import Alert from '../../components/Alert';
import Bottom from '../../components/Bottom';
import Footer from '../../components/Footer';
import Head from '../../components/Head';
import Header from '../../components/Header';
import NewsMiniCard from '../../components/NewsMiniCard';
import AuthService from "../../services/AuthService";
import Requests from '../../services/Requests';

import StoreContext from "../../store/Context";
import { loop, scrollToTop } from "../../utils/utils";

const Index = () => {
    const { config, setToken, setUser } = React.useContext(StoreContext);
    const history = useHistory();

    const [identification, setIdentification] = React.useState("");
    const [figure, setFigure] = React.useState("");
    const [lastNews, setLastNews] = React.useState([]);
    const [isLoadingLastNews, setLoadingLastNews] = React.useState(true);


    const [password, setPassword] = React.useState("");
    const [isLoggingIn, setLoggingIn] = React.useState(false);

    const timeout = config.dev ? (config.dev.timeout ? config.dev.timeout : 0) : 0;

    const [alert, setAlert] = React.useState(null);

    const sendAlert = (severity, message) => {
        setAlert(
            severity === null || message === null ? (
                null
            ) : (
                <Alert message={message} />
            )
        );
    }

    const clearForms = () => {
        setIdentification("");
        setPassword("");
    }

    const authenticate = (token, user) => {
        AuthService.setupAxiosHeaders(token);
        setToken(token);
        setUser(user);

        history.push('/home');
    }

    const onKeyUpValue = (identification) => {
        if (identification.length < 1 || identification.trim() === "") {
            setFigure("");
            return;
        }

        setTimeout(() => {
            Requests.index
            .getFigureUsername(identification).then(response => {
                let statusCode = response.data.status_code;

                if (statusCode === 200) {
                    setFigure(response.data.look);
                } else {
                    setFigure("");
                }
                
            }).catch(error => {
                setFigure("");
                console.log(error);
            }).finally(() => {
            })
        }, timeout);
    }

    const submitLogin = (e) => {
        if (e !== undefined) e.preventDefault()

        setLoggingIn(true);
        setTimeout(() => {
            Requests.index
            .submitLogin(identification, password).then(response => {
                    let statusCode = response.data.status_code;
                    let message = response.data.message;
                    if (statusCode === 200) {
                        clearForms();
                        authenticate(response.data.token, response.data.user);
                    } else {
                        sendAlert('error', message)
                    }
                })
                .catch(error => {
                    console.log(error);
                })
                .finally(() => {
                    setLoggingIn(false);
                })


        }, 500);
    }

    React.useEffect(() => {
        scrollToTop();
        setTimeout(() => {
            Requests.index
            .getNewsIndex().then(response => {
                setLastNews(response.data);
            }).catch(error => {
                console.log(error);
            })
            .finally(() => {
                setLoadingLastNews(false);
            })
        }, timeout);
    }, [])


    return (
        <>
            <Head alert={alert} />
            <Header />

            <div className="webcenter flex-column">
                <div className="flex col-c-1">
                    <div className="flex-column col-1">
                        <form onSubmit={e => submitLogin(e)} className="lgn-area general-box flex-column margin-top-md">
                            <div className="general-header-box flex" style={{background: `${config.cmsStyles.cardLoginHex}`}}>
                                <div className="flex margin-auto-top-bottom margin-right-min">
                                    <icon name="pad"></icon>
                                </div>
                                <label className="white flex-column">
                                    <h4 className="bold">Área de login</h4>
                                    <h5>Faça login para jogar conosco!</h5>
                                </label>
                            </div>
                            <div className="width-content flex inputs-login margin-bottom-min">
                                <div className="identification-look" style={{background: `url(${figure ? figure : ghostAvatar}) 0px 0px / auto no-repeat scroll`}}></div>
                                <input type="text" name="identification" placeholder="Nome de usuário..." className="border-none" onChange={(e) => setIdentification(e.target.value)} onKeyUp={e => onKeyUpValue(e.target.value)}/>
                            </div>
                            <div className="width-content flex inputs-login flex">
                                <div className="flex width-content">
                                    <icon name="lock-big"></icon>
                                    <input type="password" name="password" placeholder="Sua senha..." className="border-none" onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <button type="submit" className={`lgn-button ${config.cmsStyles.buttonsClass} transition-disabled margin-left-min`} style={{ minWidth: "120px", height: "45px" }} disabled={isLoggingIn}>
                                    <label className="margin-auto white">
                                        {isLoggingIn == false ?
                                            <h5 className="bold fs-14 uppercase">Entrar</h5> :
                                            <><h5 className="bold fs-14 uppercase"></h5><div className="loader-ellipsis pointer-none">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </div></>
                                        }

                                    </label>
                                </button>
                            </div>
                        </form>
                        <div className="margin-top-min">
                            <div className="general-box padding-minm width-content">
                                <div className="featured-user flex">
                                    <div className="featured-user-avatarimage flex">
                                        <icon name="medal"></icon>
                                        <img className="habbo-imager" src={`${config.hotel.avatarImage}?figure=hr-115-42.hd-195-19.ch-3030-82.lg-275-1408.fa-1201.ca-1804-64&action=std&direction=2&head_direction=3&gesture=std&size=n&img_format=png&frame=0&headonly=0`} />
                                    </div>
                                    <label className="gray-clear margin-auto-top-bottom padding-right-min">
                                        <h5 className="bold fs-14">Sem destaque...</h5>
                                        <h6>Nenhum usuário(a) destaque em eventos se destacou este mês.</h6>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="margin-left-min flex col-2">
                        <div className="general-box register-announcement flex padding-md" style={{background: `url(${config.cmsStyles.backgroundIndex}) right 0 / auto no-repeat scroll #5b217f`}}>
                            <label className="flex-column white">
                                <div className="flex-column padding-minm padding-top-none">
                                    <h2 className="bold uppercase">Bem-vindo, ou vinda!</h2>
                                    <h5 className="margin-top-min">O <b>{config.hotel.name}</b> é um incrível mundo de pixels onde você pode criar e construir quartos da maneira que quiser e se divertir com seus amigos através de jogos da comunidade.</h5>
                                </div>
                                <div className="flex margin-auto-top">
                                    <h6 className="margin-auto margin-right-min">Não perca tempo, registre-se agora mesmo e venha viver pessoalmente uma experiência agradável, ou não, aqui no <b>{config.hotel.name}</b></h6>
                                    <Link to="/register" place={`${config.hotel.name} - Crie sua conta, faça amigos e divirta-se gratuitamente.`} className={`${config.cmsStyles.buttonsClass} transition-disabled margin-auto-top-bottom no-link`} style={{ minWidth: "150px", height: "50px" }}>
                                        <label className="margin-auto white">
                                            <h5 className="bold fs-14 uppercase">Criar conta</h5>
                                        </label>
                                    </Link>
                                </div>
                            </label>
                        </div>
                        <div className="news-index flex-column margin-left-min">

                            {
                                (!isLoadingLastNews) ? (
                                    lastNews.map((news, i) => {
                                        return (
                                            <NewsMiniCard id={news.id} title={news.title} shortstory={news.shortstory} image={news.image} key={i}/>
                                        )
        
                                    })
                                ) : (
                                    loop(
                                        <NewsMiniCard loading />
                                    , 3).map((c) => c)
                                )
                            }
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
            <Bottom />
        </>
    );
}

export default Index;