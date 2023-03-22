import React from 'react';
import { Link } from 'react-router-dom';
import Bottom from "../../components/Bottom";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import Head from "../../components/Head";
import Header from "../../components/Header";
import Requests from '../../services/Requests';
import { i18n } from "../../translate/i18n";

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
                {page === 'coins' ? <Link className="another-header-menu-option visited"><label>{i18n.t('hall.pages.rich')}</label></Link> : <Link to={"/community/hall/coins"} onClick={() => changePage('coins')} className="another-header-menu-option"><label>{i18n.t('hall.pages.rich')}</label></Link>}
                <separator></separator>
                {page === 'achievements' ? <Link className="another-header-menu-option visited"><label>{i18n.t('hall.pages.other')}</label></Link> : <Link to={"/community/hall/achievements"} onClick={() => changePage('achievements')} className="another-header-menu-option"><label>{i18n.t('hall.pages.other')}</label></Link>}
            </Card>
            {
                page === 'coins' &&
                <>
                    <div className="webcenter flex-column">
                        <div className="flex">
                            <div className="general-box hall-of-fame credits padding-none overflow-hidden flex-column margin-right-min">
                                <div className="hall-of-fame-cover" style={{ background: `url(${config.cmsStyles.hallImage})` }}>
                                    <span>{i18n.t('hall.rich.currencys.credits.title')}</span>
                                </div>
                                <CreditsComponent
                                    credits={credits}
                                    config={config}
                                />
                            </div>
                            {/* ================================================================================ */}
                            <div className="general-box hall-of-fame diamonds padding-none overflow-hidden flex-column margin-right-min">
                                <div className="hall-of-fame-cover" style={{ background: `url(${config.cmsStyles.hallImage})` }}>
                                    <span>{i18n.t('hall.rich.currencys.diamonds.title')}</span>
                                </div>
                                <DiamondsComponent
                                    diamonds={diamonds}
                                    config={config}
                                />
                            </div>
                            {/* ================================================================================ */}
                            <div className="general-box hall-of-fame duckets padding-none overflow-hidden flex-column">
                                <div className="hall-of-fame-cover" style={{ background: `url(${config.cmsStyles.hallImage})` }}>
                                    <span>{i18n.t('hall.rich.currencys.duckets.title')}</span>
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
                                    <span>{i18n.t('hall.events_and_promotions.events.title')}</span>
                                </div>
                                <EventsComponent
                                    events={events}
                                    config={config}
                                />
                            </div>
                            {/* ================================================================================ */}
                            <div className="general-box hall-of-fame promotions padding-none overflow-hidden flex-column margin-right-min">
                                <div className="hall-of-fame-cover" style={{ background: `url(${config.cmsStyles.hallImage})` }}>
                                    <span>{i18n.t('hall.events_and_promotions.promotions.title')}</span>
                                </div>
                                <PromosComponent
                                    promo={promo}
                                    config={config}
                                />
                            </div>
                            {/* ================================================================================ */}

                            <div className="general-box padding-max overflow-hidden flex-column margin-right-min height-content">
                                <label className="gray">
                                    <h5>{i18n.t('hall.aboutHall')}<br /><br />{i18n.t('hall.aboutHall2')}</h5>
                                </label>
                                <button className={`${config.cmsStyles.buttonsClass} margin-top-md`} style={{ width: "100%", height: "45px", marginBottom: "2px" }}>
                                    <label className="margin-auto white">{i18n.t('hall.button')}</label>
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