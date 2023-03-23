/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Head from '../../components/Head';
import Header from '../../components/Header';
import Requests from '../../services/Requests';
import StoreContext from "../../store/Context";
import { i18n } from "../../translate/i18n";

const Vip = (props) => {
    const { config } = React.useContext(StoreContext);

    const [page, setPage] = React.useState(props.vip ? 'vip' : (props.stars ? 'stars' : (props.diamonds ? 'diamonds' : (props.duckets ? 'duckets' : null))));
    const [plansVip, setPlansVip] = React.useState([]);
    const [plansStars, setPlansStars] = React.useState([]);
    const [plansDiamonds, setPlansDiamonds] = React.useState([]);
    const [plansDuckets, setPlansDuckets] = React.useState([]);

    const changePage = (newPage) => {
        setPage(newPage)
    }

    const getPlansVIP = () => {
        Requests.vip
            .getPlansVIP()
            .then(response => {
                setPlansVip(response.data)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
            });
    }

    const getPlansStars = () => {
        Requests.vip
            .getPlansStars()
            .then(response => {
                setPlansStars(response.data)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
            });
    }

    const getPlansDiamonds = () => {
        Requests.vip
            .getPlansDiamonds()
            .then(response => {
                setPlansDiamonds(response.data)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
            });
    }

    const getPlansDuckets = () => {
        Requests.vip
            .getPlansDuckets()
            .then(response => {
                setPlansDuckets(response.data)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
            });
    }

    React.useEffect(() => {

        getPlansVIP();
        getPlansStars();
        getPlansDiamonds();
        getPlansDuckets();
    }, [])


    return (
        <>
            <Head />
            <div className="container flex-column margin-bottom-min">
                <div className="content">
                    <Header visited="shop" />
                    <div className="another-header-menu">
                        <div className="webcenter">
                            <div className="another-header-menu-icon">
                                <icon name="fame"></icon>
                            </div>
                            <div className="flex">
                                {
                                    page === 'vip' ? <a className="another-header-menu-option visited"><label>{i18n.t('shop.pages.vip')}</label></a> : <Link to="/shop/vip" className="another-header-menu-option" onClick={() => changePage('vip')}><label>{i18n.t('shop.pages.vip')}</label></Link>

                                }

                                <separator></separator>
                                {
                                    page === 'stars' ? <a className="another-header-menu-option visited"><label>{i18n.t('shop.pages.stars')}</label></a> : <Link to="/shop/stars" className="another-header-menu-option" onClick={() => changePage('stars')}><label>{i18n.t('shop.pages.stars')}</label></Link>

                                }
                                <separator></separator>
                                {
                                    page === 'diamonds' ? <a className="another-header-menu-option visited"><label>{i18n.t('shop.pages.diamonds')}</label></a> : <Link to="/shop/diamonds" className="another-header-menu-option" onClick={() => changePage('diamonds')}><label>{i18n.t('shop.pages.diamonds')}</label></Link>

                                }
                                <separator></separator>
                                {
                                    page === 'duckets' ? <a className="another-header-menu-option visited"><label>{i18n.t('shop.pages.duckets')}</label></a> : <Link to="/shop/duckets" className="another-header-menu-option" onClick={() => changePage('duckets')}><label>{i18n.t('shop.pages.duckets')}</label></Link>

                                }
                            </div>
                        </div>
                    </div>
                    <div className="webcenter flex-column">
                        <div className="flex">
                            {
                                page === 'vip' &&
                                <div className="card-packets">
                                    {
                                        plansVip.map((planos, index) => {
                                            return (
                                                <div className="general-box vip card padding-none" key={index}>
                                                    <div className="general-box-container flex-column padding-min">
                                                        <div className="general-box-header flex-column">
                                                            <div className="general-box-header-content flex" style={{ background: `${planos.hex ? `${planos.hex}` : '#4e4e4e'}` }}>
                                                                <icon name="vip-badge-mini" className="margin-auto-top-bottom margin-right-min"></icon>
                                                                <label className="white flex width-content">
                                                                    <h5 className="margin-auto-top-bottom">{planos.product_id}</h5>
                                                                    <div className="price">
                                                                        <h6><b>R$ {planos.precos}</b></h6>
                                                                    </div>
                                                                </label>
                                                            </div>
                                                            <div className="vip-benefits">
                                                                <div className="vip-benefits-cover"></div>
                                                                <ol className="vip-benefits-list flex-column">
                                                                    {ReactHtmlParser(planos.beneficios)}
                                                                </ol>
                                                            </div>
                                                        </div>
                                                        <div className="general-box-content flex-column">
                                                            <div className="flex">
                                                                <a href={`${planos.link}`} target="_blank" className={`${config.cmsStyles.buttonsClass} margin-right-min buy-package no-link`} style={{ minWidth: "113px", height: "43px" }}>
                                                                    <label className="margin-auto white">
                                                                        <h5>{i18n.t('shop.buttons.buy')}</h5>
                                                                    </label>
                                                                </a>
                                                                <button className="blue-button-1 benefits" style={{ minWidth: "160px", height: "43px" }}>
                                                                    <label className="margin-auto white">
                                                                        <h5>{i18n.t('shop.buttons.seeMore')}</h5>
                                                                    </label>
                                                                </button>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })
                                    }
                                </div>
                            }
                            {
                                page === 'stars' &&
                                <div id="cash-packages-area">
                                    {
                                        plansStars.length > 0 &&
                                        plansStars.map((planos, index) => {
                                            return (
                                                <div className="margin-bottom-minm" id="cash-package-div" key={index}>
                                                    <div className="margin-right-min" id="cash-amount">{planos.product_id} <br /><img src={`${config.hotel.shop.starsIcon}`} /></div>
                                                    <label className="gray flex-column margin-auto-top-bottom text-nowrap">
                                                        <h5 className="bold" style={{ fontSize: "12px" }}>STARS APENAS:</h5>
                                                        <h4 className="margin-top-minm"><b>R${planos.precos}0</b> ou <b>€{planos.precos_pt}</b></h4>
                                                    </label>
                                                    <a href={`${planos.link}`} target="_blank" className={`${config.cmsStyles.buttonsClass} margin-auto-left margin-auto-top-bottom no-link`} style={{ width: "205px", height: "40px", left: "-1px", fontSize: "13px" }}>
                                                        <label className="margin-auto white">Aquirir este pacote</label>
                                                    </a>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            }

                            {
                                page === 'diamonds' &&
                                <div id="cash-packages-area">
                                    {
                                        plansDiamonds.length > 0 &&
                                        plansDiamonds.map((planos, index) => {
                                            return (
                                                <div className="margin-bottom-minm" id="cash-package-div" key={index}>
                                                    <div className="margin-right-min" id="cash-amount">{planos.product_id} <img src={`${config.hotel.shop.diamondIcon}`} /></div>
                                                    <label className="gray flex-column margin-auto-top-bottom text-nowrap">
                                                        <h5 className="bold" style={{ fontSize: "12px" }}>DIAMANTES APENAS:</h5>
                                                        <h4 className="margin-top-minm"><b>R${planos.precos}0</b> ou <b>€{planos.precos_pt}</b></h4>
                                                    </label>
                                                    <a href={`${planos.link}`} target="_blank" className={`${config.cmsStyles.buttonsClass} margin-auto-left margin-auto-top-bottom no-link`} style={{ width: "205px", height: "40px", left: "-1px", fontSize: "13px" }}>
                                                        <label className="margin-auto white">Aquirir este pacote</label>
                                                    </a>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            }

                            {
                                page === 'duckets' &&
                                <div id="cash-packages-area">
                                    {
                                        plansDuckets.length > 0 &&
                                        plansDuckets.map((planos, index) => {
                                            return (
                                                <div className="margin-bottom-minm" id="cash-package-div" key={index}>
                                                    <div className="margin-right-min" id="cash-amount">{planos.product_id} <img src={`${config.hotel.shop.ducketsIcon}`} /></div>
                                                    <label className="gray flex-column margin-auto-top-bottom text-nowrap">
                                                        <h5 className="bold" style={{ fontSize: "12px" }}>DUCKETS APENAS:</h5>
                                                        <h4 className="margin-top-minm"><b>R${planos.precos}0</b> ou <b>€{planos.precos_pt}</b></h4>
                                                    </label>
                                                    <a href={`${planos.link}`} target="_blank" className={`${config.cmsStyles.buttonsClass} margin-auto-left margin-auto-top-bottom no-link`} style={{ width: "205px", height: "40px", left: "-1px", fontSize: "13px" }}>
                                                        <label className="margin-auto white">Aquirir este pacote</label>
                                                    </a>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            }

                            <div className="flex-column col-15">
                                <div className="general-box padding-none height-fit overflow-hidden">
                                    <div className="gray" id="general-warning-store">
                                        <h5 className="bold uppercase">Você mora em Portugal?</h5>
                                        <h5 className="margin-top-bottom-min">Caso você seja um jogador português e não tenha como utilizar o MercadoPago como método de compra, a sua única maneira para poder comprar cash é entrando em contato com um membro da equipe pelo <a href={`${config.hotel.socialmedia.discord}`} className="bold no-link" target="_blank">DISCORD</a> ou pela <b>ferramenta de ajuda</b></h5>
                                        <div className={`${config.cmsStyles.buttonsClass}`} style={{ width: "234px", height: "40px", fontSize: "13px", margin: "15px 0 0 0" }}>
                                            <label className="margin-auto bold white pn">
                                                <icon style={{ position: "absolute", width: "18px", height: "18px", top: "-1px", left: "-35px", overflow: "hidden" }}>
                                                    <img style={{ marginTop: "-595px", marginLeft: "-1440px" }} src="<?php echo $hotel['site']; ?>/general/assets/img/sprite.png?<?php echo time(); ?>" />
                                                </icon>
                                                {i18n.t('shop.buttons.help')}
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-column col-15">
                                    <div className="general-box padding-none height-fit overflow-hidden">
                                        <div className="gray margin-top-min" id="general-warning-store">
                                            <h5 className="bold uppercase margin-bottom-min">LEMBRE-SE SEMPRE!</h5>
                                            <h5>Sempre peça autorização do seus pais ou responsáveis. Se não a tiver e o pagamento for cancelado ou recusado, você será banido.</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Footer/>
                    </div>
                    
                </div>
                
            </div>
        </>
    )
}

export default Vip;