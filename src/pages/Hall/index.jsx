import React from 'react';
import { Link } from 'react-router-dom';
import Bottom from "../../components/Bottom";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import Head from "../../components/Head";
import Header from "../../components/Header";
import Requests from '../../services/Requests';

import CreditsComponent from "./components/Currencys/Credits";
import DiamondsComponent from "./components/Currencys/Diamonds";
import DucketsComponent from "./components/Currencys/Duckets";

import EventsComponent from "./components/Others/Events";
import PromosComponent from "./components/Others/Promotions";

import StoreContext from "../../store/Context";


const Hall = (props) => {
    const { config, user, setUser } = React.useContext(StoreContext);

    const [page, setPage] = React.useState(props.coins ? 'coins' : 'achievements');

    const [isLoadingHall, setLoadingHall] = React.useState(true);
    const [credits, setCredits] = React.useState([]);
    const [diamonds, setDiamonds] = React.useState([]);
    const [duckets, setDuckets] = React.useState([]);

    const [events, setEvents] = React.useState([]);
    const [promo, setPromo] = React.useState([]);


    const changePage = (newPage) => {
        setPage(newPage)
    }

    const getCredits = () => {
        Requests.hall.getCredits()
            .then(response => {
                setCredits(response.data);
            }).finally(() => {
                setLoadingHall(false);
            })
    }

    const getDiamonds = () => {
        Requests.hall.getDiamonds()
            .then(response => {
                setDiamonds(response.data);
            }).finally(() => {
                setLoadingHall(false);
            })
    }

    const getDuckets = () => {
        Requests.hall.getDuckets()
            .then(response => {
                setDuckets(response.data);
            }).finally(() => {
                setLoadingHall(false);
            })
    }

    const getEvents = () => {
        Requests.hall.getEvents()
            .then(response => {
                setEvents(response.data);
            }).finally(() => {
                setLoadingHall(false);
            })
    }

    const getPromo = () => {
        Requests.hall.getPromo()
            .then(response => {
                setPromo(response.data);
            }).finally(() => {
                setLoadingHall(false);
            })
    }

    React.useEffect(() => {
        getCredits();
        getDiamonds();
        getDuckets();
        getEvents();
        getPromo();
    }, [])

    return (
        <>
            <Head />
            <Header visited="community" />

            <Card>
                {page === 'coins' ? <Link className="another-header-menu-option visited"><label>Riqueza</label></Link> : <Link to={"/community/hall/coins"} onClick={() => changePage('coins')} className="another-header-menu-option"><label>Riqueza</label></Link>}
                <separator></separator>
                {page === 'achievements' ? <Link className="another-header-menu-option visited"><label>Eventos e Promoções</label></Link> : <Link to={"/community/hall/achievements"} onClick={() => changePage('achievements')} className="another-header-menu-option"><label>Eventos e Promoções</label></Link>}
            </Card>
            {
                page === 'coins' &&
                <>
                    <div className="webcenter flex-column">
                        <div className="flex">
                            <div className="general-box hall-of-fame credits padding-none overflow-hidden flex-column margin-right-min">
                                <div className="hall-of-fame-cover" style={{ background: `url(${config.cmsStyles.hallImage})` }}>
                                    <span>Créditos</span>
                                </div>
                                <CreditsComponent
                                    credits={credits}
                                    config={config}
                                />
                            </div>
                            {/* ================================================================================ */}
                            <div className="general-box hall-of-fame diamonds padding-none overflow-hidden flex-column margin-right-min">
                                <div className="hall-of-fame-cover" style={{ background: `url(${config.cmsStyles.hallImage})` }}>
                                    <span>Diamantes</span>
                                </div>
                                <DiamondsComponent
                                    diamonds={diamonds}
                                    config={config}
                                />
                            </div>
                            {/* ================================================================================ */}
                            <div className="general-box hall-of-fame duckets padding-none overflow-hidden flex-column">
                                <div className="hall-of-fame-cover" style={{ background: `url(${config.cmsStyles.hallImage})` }}>
                                    <span>Duckets</span>
                                </div>
                                <DucketsComponent
                                    duckets={duckets}
                                    config={config}
                                />
                            </div>
                            {/* ================================================================================ */}
                        </div>
                        <Footer />
                    </div>
                    <Bottom />
                </>
            }
            {
                page === 'achievements' &&
                <>
                    <div className="webcenter flex-column">
                        <div className="flex">
                            <div className="general-box hall-of-fame events padding-none overflow-hidden flex-column margin-right-min">
                                <div className="hall-of-fame-cover" style={{ background: `url(${config.cmsStyles.hallImage})` }}>
                                    <span>Eventos</span>
                                </div>
                                <EventsComponent
                                    events={events}
                                    config={config}
                                />
                            </div>
                            {/* ================================================================================ */}
                            <div className="general-box hall-of-fame promotions padding-none overflow-hidden flex-column margin-right-min">
                                <div className="hall-of-fame-cover" style={{ background: `url(${config.cmsStyles.hallImage})` }}>
                                    <span>Promoções</span>
                                </div>
                                <PromosComponent
                                    promo={promo}
                                    config={config}
                                />
                            </div>
                            {/* ================================================================================ */}

                            <div className="general-box padding-max overflow-hidden flex-column margin-right-min height-content">
                                <label className="gray">
                                    <h5>O Hall da Fama de <b>pontos e promoções</b> foi criado com intuito de promover os melhores jogadores de eventos ou os mais empenhados em ganhar promoções onde você tem a chance de ficar entre os 5 usuários que fazem mais pontos em eventos ou que participaram e ganharam promoções!<br /><br />Ao final de todo mês este hall da fama é resetado, assim dando uma nova chance para que as outras pessoas possam aparecer por aqui, sem contar que após ser resetado os usuários que ficaram no pódio (5 lugares) ganharam prêmios sendo eles rubis, gemas, emblemas ou até raros. Não perca essa chance e participe dos eventos e ganhe promoções para receber prêmios e ficar famoso!</h5>
                                </label>
                                <button className={`${config.cmsStyles.buttonsClass} margin-top-md`} style={{ width: "100%", height: "45px", marginBottom: "2px" }}>
                                    <label className="margin-auto white">Saber mais</label>
                                </button>
                            </div>
                        </div>
                        <Footer />
                    </div>
                    <Bottom />
                </>
            }

        </>
    )

}

export default Hall;