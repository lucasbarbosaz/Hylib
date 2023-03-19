import axios from "axios";
import { useContext, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import APIService from "../../services/APIService";
import AuthService from "../../services/AuthService";
import StoreContext from "../../store/Context";
import useInterval from "../../utils/useInterval";

import { i18n } from "../../translate/i18n";

const Header = (props) => {
    const { updateLoggedUser, visited } = props;
    const history = useHistory();

    const { config, token, user, setUser } = useContext(StoreContext);

    const handleLogout = () => {
        history.push('/logout');
    }


    const updateUserInfo = () => {
        axios.get(`${config.apiUrl}/user-me`)
            .then(response => {
                if (APIService.isResponseAuthorized(response)) {
                    setUser(response.data.user)
                }
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {});
    }

    useEffect(() => {
        if (AuthService.isUserLoggedIn()) {
            AuthService.setupAxiosHeaders(token);
            if (updateLoggedUser) {
                updateUserInfo();
            };
        }
    }, []);

    useInterval(() => {
        if (AuthService.isUserLoggedIn()) {
            AuthService.isTokenExpired(); //check if token has expired 
        }
    }, 60000) ;
    

       

    return (
        <div id="header-wrapper">
            {
                AuthService.isUserLoggedIn() &&
                <>
                    <div className="header-nav-menu mr-bottom-3">
                        <div className="webcenter">

                            <div className="header-menu-options flex-wrap">
                                <li className="header-menu dropdown">
                                    <label className={`dropbtn ${visited === 'home' ? 'visited' : ''}`}>
                                        <h5 className="no-select">{user?.username}</h5>
                                    </label>
                                    <ul className="dropdown-content">
                                        <Link to="/me" place={`Principal: ${user?.username} - ${config.hotel.name}`} className="list-content">
                                            <h5 className="no-select">Minha página</h5>
                                        </Link>

                                        <Link to={`/profile/${user?.username}`} place={`Perfil: ${user?.username} - ${config.hotel.name}`} className="list-content">
                                            <h5 className="no-select">Meu perfil</h5>
                                        </Link>

                                        <Link to="/settings/account" place={`Perfil: ${user?.username} - ${config.hotel.name}`} className="list-content">
                                            <h5 className="no-select">Configurações</h5>
                                        </Link>

                                        <Link to="/logout" onClick={handleLogout} className="list-content">
                                            <h5 className="no-select">Sair</h5>
                                        </Link>
                                    </ul>
                                </li>
                                <li className="header-menu dropdown">
                                    <label className={`dropbtn ${visited === 'articles' ? 'visited' : ''}`}>
                                        <h5 className="no-select">Jornalismo</h5>
                                    </label>
                                    <ul className="dropdown-content">
                                        {Array.isArray(config.newsSubmenu) && config.newsSubmenu.length > 0 &&
                                            config.newsSubmenu.map((item, index) => {
                                                return <Link key={index} to={`/news/${item.newsId}`} className="list-content">
                                                    <h5 className="no-select">{item.title}</h5>
                                                </Link>
                                            })
                                        }


                                    </ul>
                                </li>
                                <li className="header-menu dropdown">
                                    <label className={`dropbtn ${visited === 'community' ? 'visited' : ''}`}>
                                        <h5 className="no-select">Comunidade</h5>
                                    </label>
                                    <div className="dropdown-content">
                                        <Link to="/community/hall/coins" place={`Comunidade: Hall da Fama  - ${config.hotel.name}`} className="list-content">
                                            <h5 className="no-select">Hall da Fama</h5>
                                        </Link>
                                        <Link to="/community/staff" place={`Comunidade: Equipe  - ${config.hotel.name}`} className="list-content">
                                            <h5 className="no-select">Equipe</h5>
                                        </Link>
                                    </div>
                                </li>
                                <li className="header-menu">
                                    <label className={`dropbtn ${visited === 'shop' ? 'visited' : ''}`}>
                                        <Link to="/shop/vip">
                                            <h5 className="no-select">Loja</h5>
                                        </Link>
                                    </label>

                                </li>
                                <li className="header-menu">
                                    <label className={`dropbtn`}>
                                        <a href={`${config.hotel.form.link}`} target="_blank">
                                            <h5 className="no-select">{config.hotel.form.title}</h5>
                                        </a>
                                    </label>
                                </li>
                                {
                                    user?.canOpenAdminpan &&
                                    <>
                                        <li className="header-menu">
                                            <a href="/adminpan/login">
                                                <h5 className="no-select">Painel de controle</h5>
                                            </a>
                                        </li>
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                </>
            }
            {

                !AuthService.isUserLoggedIn() &&

                <div className="webcenter flex">
                    <div className="mr-bottom-2 margin-top-min width-content">
                        <div className="general-box hotel-big-msg flex width-content">
                            <icon name="hotel-big" className="margin-right-min"></icon>
                            <h5 className="gray-clear margin-auto-top-bottom">{i18n.t('index.header')}</h5>
                        </div>
                    </div>
                </div>


            }
        </div>
    );
}

export default Header;