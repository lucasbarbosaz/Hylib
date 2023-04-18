/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link, useHistory } from "react-router-dom";
import AlertHome from '../../components/AlertHome';
import Bottom from '../../components/Bottom';
import Footer from '../../components/Footer';
import Head from '../../components/Head';
import Header from '../../components/Header';

import Articles from "./components/Articles";
import Currencys from "./components/Currencys";
import DownloadApp from "./components/DownloadApp";
import FeaturedGroups from "./components/FeaturedGroups";
import RichestPlayers from "./components/RichestPlayers";
import SocialNetworks from "./components/SocialNetworks";
import UserHome from "./components/UserHome";


import APIService from "../../services/APIService";
import Requests from "../../services/Requests";
import StoreContext from "../../store/Context";
import useInterval from "../../utils/useInterval";

import groupIcon from "../../assets/img/070.gif";
import ghostAvatar from "../../assets/img/ghost.png";

import { i18n } from "../../translate/i18n";


const Home = () => {
    const { config, user, setUser } = React.useContext(StoreContext);
    const history = useHistory();

    const [richestUsers, setRichestUsers] = React.useState([]);
    const [featuredGroups, setFeaturedGroups] = React.useState([]);
    const [news, setNews] = React.useState([]);
    const [newsSlider, setNewsSlider] = React.useState([]);
    const [events, setEvents] = React.useState([]);
    const [activity, setActivity] = React.useState([]);

    const [showClientOptions, setShowClientOptions] = React.useState(false);

    const [isUserDataLoading, setIsUserDataLoading] = React.useState(true);
    const [richestUsersLoading, setRichestUsersLoading] = React.useState(true);
    const [isGroupLoading, setIsGroupLoading] = React.useState(true);
    const [isLoadingNews, setIsLoadingNews] = React.useState(true);
    const [isLoadingNewsSlider, setIsLoadingNewsSlider] = React.useState(true);
    const [isLoadingEvents, setIsLoadingEvents] = React.useState(true);
    const [isLoadingActivitys, setIsLoadingActivitys] = React.useState(true);



    const getUser = () => {
        Requests.home
            .getUser()
            .then(response => {
                if (APIService.isResponseAuthorized(response)) {
                    setUser(response.data.user)
                }
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setIsUserDataLoading(false);
            });
    }

    const getRichestUsers = () => {
        Requests.home
            .getRichestUsers()
            .then(response => {
                setRichestUsers(response.data);
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setRichestUsersLoading(false);
            });
    }

    const getFeaturedGroups = () => {
        Requests.home
            .getFeaturedGroups()
            .then(response => {
                setFeaturedGroups(response.data);
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setIsGroupLoading(false);
            });
    }

    const getNews = () => {
        Requests.home
            .getNews()
            .then(response => {
                setNews(response.data);
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setIsLoadingNews(false);
            });
    }

    const getNewsSlider = () => {
        Requests.home
            .getNewsSlider()
            .then(response => {
                setNewsSlider(response.data);
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setIsLoadingNewsSlider(false);
            });
    }


    const getEvents = () => {
        Requests.home
            .getEvents()
            .then(response => {
                setEvents(response.data);
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setIsLoadingEvents(false);
            });
    }

    const getActivity = () => {
        Requests.home
            .getActivity()
            .then(response => {
                setActivity(response.data);
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setIsLoadingActivitys(false);
            });
    }

    const loadingGroups = () => {
        const numbers = [1, 2, 3, 4, 5];

        return (
            <>
                {numbers.map((i) =>
                    <div className="featured-groups-item flex" key={i}>
                        <div className="featured-groups-badge mr-right-1 flex">
                            <img src={`${groupIcon}`} className="float-left mr-auto" />
                        </div>
                        <label className="color-4 text-nowrap mr-auto-top-bottom">
                            <h5 className="bold text-nowrap">...</h5>
                            <h6 className="text-nowrap">... membros</h6>
                        </label>
                    </div>
                )}
            </>
        )
    }

    const loadingRichestUsers = () => {
        const numbers = [1, 2, 3];

        return (
            <>
                {numbers.map((repeat, index) =>
                    index === 0 ?
                        <div className="flex featured-user-credits">
                            <div className="featured-user-credits-imager">
                                <img alt={`...`} src={`${ghostAvatar}`} />
                            </div>
                            <label className="white margin-auto-top-bottom margin-auto-right padding-right-min">
                                <Link to={`/profile/...`} place={`Perfil: ... - ${config.hotel.name}`} className="no-link white">
                                    <h4 className="bold">Carregando..</h4>
                                </Link>
                                <div className="flex">
                                    <icon name="credits"></icon>
                                    <h6 className="margin-left-minm margin-auto-top-bottom">...</h6>
                                </div>
                            </label>
                        </div>
                        : (index === 1 ?
                            <div className="flex featured-user-diamonds">
                                <div className="featured-user-diamonds-imager">
                                    <img alt={`...`} src={`${ghostAvatar}`} />
                                </div>
                                <label className="white margin-auto-top-bottom margin-auto-right padding-right-min">
                                    <Link to={`/profile/...`} place={`Perfil: ... - ${config.hotel.name}`} className="no-link white">
                                        <h4 className="bold">Carregando..</h4>
                                    </Link>
                                    <div className="flex">
                                        <icon name="diamonds"></icon>
                                        <h6 className="margin-left-minm margin-auto-top-bottom">...</h6>
                                    </div>
                                </label>
                            </div>
                            :
                            <div className="flex featured-user-duckets">
                                <div className="featured-user-duckets-imager">
                                    <img alt={`...`} src={`${ghostAvatar}`} />
                                </div>
                                <label className="white margin-auto-top-bottom margin-auto-right padding-right-min">
                                    <Link to={`/profile/...`} place={`Perfil: ... - ${config.hotel.name}`} className="no-link white">
                                        <h4 className="bold">Carregando..</h4>
                                    </Link>
                                    <div className="flex">
                                        <icon name="duckets"></icon>
                                        <h6 className="margin-left-minm margin-auto-top-bottom">...</h6>
                                    </div>
                                </label>
                            </div>
                        )

                )}
            </>
        )
    }

    React.useEffect(() => {
        setTimeout(() => {
            getUser();
        }, config.dev.timeout);

        setTimeout(() => {
            getRichestUsers();
        }, config.dev.timeout);

        setTimeout(() => {
            getFeaturedGroups();
        }, config.dev.timeout);

        setTimeout(() => {
            getNews();
        }, config.dev.timeout);

        setTimeout(() => {
            getNewsSlider();
        }, config.dev.timeout);

        setTimeout(() => {
            getEvents();
        }, config.dev.timeout);

        setTimeout(() => {
            getActivity();
        }, config.dev.timeout);
    }, [])

    const goToClient = client => {

        if (client === 'betav2') {
            setShowClientOptions(false)
            history.push('/client/betav2');
        } else if (client === 'flash') {
            setShowClientOptions(false)
            history.push('/client/60');

        }
    }

    const getClientButtons = () => {
        return <React.Fragment>
            {
                showClientOptions ? (
                    <>
                        <Link onClick={() => goToClient('betav2')} className={`${config.cmsStyles.buttonsClass} no-link margin-top`} style={{ width: "180px", height: "42px", marginTop: "20px" }}>
                            <label className="margin-auto white">
                                <h5>{i18n.t('home.userDetails.buttons.beta')}</h5>
                            </label>
                        </Link>
                        <Link onClick={() => goToClient('flash')} className={`${config.cmsStyles.buttonsClass} no-link margin-top`} style={{ width: "180px", height: "42px"}}>
                            <label className="margin-auto white">
                                <h5>{i18n.t('home.userDetails.buttons.flash')}</h5>
                            </label>
                        </Link>
                    </>
                ) : (
                    <>
                        <Link onClick={() => setShowClientOptions(true)} className={`${config.cmsStyles.buttonsClass} no-link margin-top-md`} style={{ width: "180px", height: "42px" , top: "30px"}}>
                            <label className="margin-auto white">
                                <h5>{i18n.t('home.userDetails.buttons.enter')}</h5>
                            </label>
                        </Link>
                    </>
                )
            }
        </React.Fragment>
    }

    useInterval(() => {
        getUser();
    }, 60000);

    return (
        <>
            <Head />
            <Header visited="home" />

            <div className="webcenter flex-column">
                <AlertHome>
                    {config.hotel.txtHome}
                </AlertHome>
                <div className="flex">
                    <div className="col-7">
                        <div className="display-habbo-me flex-column">
                            <div className="display-myhabbo flex" style={{ backgroundImage: `url(${config.cmsStyles.cardHomeImage})` }}>
                                <div className="flex width-content">
                                    <UserHome
                                        isUserDataLoading={isUserDataLoading}
                                        user={user}
                                        config={config}
                                        ghostAvatar={ghostAvatar}
                                        getClientButtons={getClientButtons}
                                    />
                                </div>
                            </div>

                            <div className="display-habbo-currency flex">
                                <Currencys
                                    isUserDataLoading={isUserDataLoading}
                                    user={user}
                                />
                            </div>
                        </div>

                        <div class="col-8 flex margin-top-min margin-right">
                            {
                                isLoadingEvents ? (

                                    <div class="event-box-default" style={{ background: `url() 100% center / auto repeat-x scroll rgb(90, 38, 139)`, opacity: ".9" }}>
                                        <label class="white margin-auto-top-bottom margin-auto-left text-right text-nowrap">
                                            <h3 class="bold text-nowrap" style={{ textShadow: "2px 2px 2px black" }}>...</h3>
                                            <h6 class="text-nowrap">....</h6>
                                        </label>
                                    </div>
                                ) : (
                                    !isLoadingEvents && events.length > 0 ? (
                                        events.map((event, index) => {
                                            return (
                                                <div class="event-box-default" style={{ background: `url(${event.image}) 100% center / auto repeat-x scroll rgb(90, 38, 139)`, opacity: ".9" }} key={index}>
                                                    <label class="white margin-auto-top-bottom margin-auto-left text-right text-nowrap">
                                                        <h3 class="bold text-nowrap" style={{ textShadow: "2px 2px 2px black" }}>{event.title}</h3>
                                                        <h6 class="text-nowrap">{event.description}</h6>
                                                    </label>
                                                </div>
                                            )

                                        })
                                    ) : (
                                        !isLoadingEvents &&
                                        <div class="event-box-special" style={{ background: `url(https://images.habbo.com/web_images/habbo-web-articles/lpromo_sellableroombundle.png) 100% center / auto repeat-x scroll rgb(90, 38, 139)`, opacity: ".9" }}>
                                            <label class="white margin-auto-top-bottom margin-auto-right text-nowrap">
                                                <h3 class="bold text-nowrap" style={{ textShadow: "2px 2px 2px black" }}>{i18n.t('home.events.title')}</h3>
                                                <h6 class="text-nowrap">{i18n.t('home.events.smallText')}</h6>
                                            </label>
                                        </div>
                                    )

                                )

                            }

                            {
                                isLoadingActivitys ? (
                                    <div className="event-box-special" style={{ background: `url() 100% center / auto repeat-x scroll rgb(90, 38, 139)`, opacity: ".9" }}>
                                        <label className="white margin-auto-top-bottom margin-auto-right text-nowrap">
                                            <h3 className="bold text-nowrap" style={{ textShadow: "2px 2px 2px black" }}>...</h3>
                                            <h6 className="text-nowrap">...</h6>
                                        </label>
                                    </div>
                                ) : (
                                    !isLoadingActivitys && activity.length > 0 ? (
                                        activity.map((activity, index) => {
                                            return (
                                                <div className="event-box-special" style={{ background: `url(${activity.image}) 100% center / auto repeat-x scroll rgb(90, 38, 139)`, opacity: ".9" }} key={index}>
                                                    <label className="white margin-auto-top-bottom margin-auto-right text-nowrap">
                                                        <h3 className="bold text-nowrap" style={{ textShadow: "2px 2px 2px black" }}>{activity.title}</h3>
                                                        <h6 className="text-nowrap">{activity.description}</h6>
                                                    </label>
                                                </div>
                                            )
                                        })
                                    ) : (
                                        !isLoadingActivitys &&
                                        <div className="event-box-special" style={{ background: `url(https://images.habbo.com/web_images/habbo-web-articles/lpromo_Jan23.png) 100% center / auto repeat-x scroll rgb(90, 38, 139)`, opacity: ".9" }}>
                                            <label className="white margin-auto-top-bottom margin-auto-right text-nowrap">
                                                <h3 className="bold text-nowrap" style={{ textShadow: "2px 2px 2px black" }}>{i18n.t('home.activitys.title')}</h3>
                                                <h6 className="text-nowrap">{i18n.t('home.activitys.smallText')}</h6>
                                            </label>
                                        </div>
                                    )
                                )
                            }


                        </div>
                        <div className="col-9 flex margin-top-min">
                            <div className="general-box featured-users margin-top-min margin-right-min">
                                <div className="general-header-box-2 flex hbg-1">
                                    <div className="flex margin-auto-top-bottom margin-right-min">
                                        <icon name="gold-trophy" className="margin-auto"></icon>
                                    </div>
                                    <label className="white">
                                        <h5>{i18n.t('home.richestPlayers.title')}</h5>
                                    </label>
                                </div>
                                <div className="flex-column users-featured">
                                    <RichestPlayers
                                        loadingRichestUsers={loadingRichestUsers}
                                        richestUsersLoading={richestUsersLoading}
                                        richestUsers={richestUsers}
                                        creditsText={i18n.t('home.richestPlayers.currencys.type.credits')}
                                        diamondsText={i18n.t('home.richestPlayers.currencys.type.diamonds')}
                                        ducketsText={i18n.t('home.richestPlayers.currencys.type.duckets')}
                                        config={config}
                                    />
                                </div>
                            </div>
                            <div className="general-box featured-rooms margin-top-min">
                                <div className="general-header-box-2 flex hbg-2">
                                    <div className="flex margin-auto-top-bottom margin-right-min">
                                        <icon name="room" className="margin-auto"></icon>
                                    </div>
                                    <label className="white">
                                        <h5>{i18n.t('home.featuredGroup.title')}</h5>
                                    </label>
                                </div>
                                <FeaturedGroups
                                    isGroupLoading={isGroupLoading}
                                    loadingGroups={loadingGroups}
                                    featuredGroups={featuredGroups}
                                    membersText={i18n.t('home.featuredGroup.members')}
                                    config={config}
                                />
                            </div>
                        </div>
                        <DownloadApp
                            titleText={i18n.t('home.downloadApp.title')}
                            windowsText={i18n.t('home.downloadApp.downloads.windows')}
                            macOSText={i18n.t('home.downloadApp.downloads.macOS')}
                            config={config}
                        />
                    </div>
                    <div className="col-10 flex-column">
                        <div className="general-box last-articles-slider width-content pd-none overflow-hidden">
                            <Articles
                                isLoadingNews={isLoadingNews}
                                news={news}
                                isLoadingNewsSlider={isLoadingNewsSlider}
                                newsSlider={newsSlider}
                            />
                        </div>
                        <SocialNetworks
                            titleText={i18n.t('home.socialNetworks.title')}
                            instagramText={i18n.t('home.socialNetworks.instagram')}
                            twitterText={i18n.t('home.socialNetworks.twitter')}
                            discordText={i18n.t('home.socialNetworks.discord')}
                            config={config}
                        />
                    </div>
                </div>
                <Footer />
            </div>
            <Bottom />
        </>
    );
}

export default Home;