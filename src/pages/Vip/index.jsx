/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import ReactHtmlParser from "react-html-parser";
import { useHistory, Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Head from "../../components/Head";
import Header from "../../components/Header";
import Requests from "../../services/Requests";
import StoreContext from "../../store/Context";
import { i18n } from "../../translate/i18n";
import axios from "axios";
import ApprovedModal from "../../components/Payments/Status/Approved";
import RejectedModal from "../../components/Payments/Status/Rejected";
import PaymentModal from "../../components/Payments/Modals";
import copy from "copy-to-clipboard";

const Vip = (props) => {
  const { user, config } = React.useContext(StoreContext);

  const [page, setPage] = React.useState(
    props.vip ? "vip" : props.stars ? "stars" : props.diamonds ? "diamonds" : props.duckets ? "duckets" : null
  );

  const copyToClipboard = () => {
    copy("corplaxus@gmail.com"); //chave pix
    alert("Chave pix copiada com sucesso!");
}

  const isMobile = window.screen.width <= 480;

  const [plansVip, setPlansVip] = React.useState([]);
  const [precoPixVip1, setPrecoPixVip1] = React.useState(0);
  const [precoPixVip2, setPrecoPixVip2] = React.useState(0);
  const [precoPixVip3, setPrecoPixVip3] = React.useState(0);

  const [plansStars, setPlansStars] = React.useState([]);
  const [plansDiamonds, setPlansDiamonds] = React.useState([]);
  const [plansDuckets, setPlansDuckets] = React.useState([]);

  const [paymentVip, setPaymentVip] = React.useState([]);
  const [paymentDiamonds, setPaymentDiamonds] = React.useState([]);
  const [paymentDuckets, setPaymentDuckets] = React.useState([]);
  const [paymentSeasonal, setPaymentSeasonal] = React.useState([]);
  const [type, setType] = React.useState("");

  const [openPaymentModal, setOpenPaymentModal] = React.useState(false);
  const [openPaymentModalDiamonds, setOpenPaymentModalDiamonds] = React.useState(false);
  const [openPaymentModalDuckets, setOpenPaymentModalDuckets] = React.useState(false);
  const [openPaymentModalSeasonal, setOpenPaymentModalSeasonal] = React.useState(false);

  const handleCloseVipModal = () => {
    setOpenPaymentModal(false);
    setOpenPaymentModalDiamonds(false);
    setOpenPaymentModalDuckets(false);
    setOpenPaymentModalSeasonal(false);

    setPaymentVip([]);
    setPaymentDiamonds([]);
    setPaymentDuckets([]);
    setPaymentSeasonal([]);
  };

  const handleOpenVipModal = () => {
    setOpenPaymentModal(true);
  };

  const handleOpenDiamondsModal = () => {
    setOpenPaymentModalDiamonds(true);
  };

  const handleOpenDucketsModal = () => {
    setOpenPaymentModalDuckets(true);
  };

  const handleOpenSeasonalModal = () => {
    setOpenPaymentModalSeasonal(true);
  };

  const [approvedPaymentModal, setApprovedPaymentModal] = React.useState(false);
  const [rejectedPaymentModal, setRejectedPaymentModal] = React.useState(false);

  const handleClosePaymentModal = () => {
    setApprovedPaymentModal(false);
    setRejectedPaymentModal(false);
  };

  const changePage = (newPage) => {
    setPage(newPage);
  };

  const getPlansVIP = () => {
    Requests.vip
      .getPlansVIP()
      .then((response) => {
        setPrecoPixVip3(parseInt(response.data[0].preco_pix));

        setPlansVip(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => { });
  };
  const getPlansStars = () => {
    Requests.vip
      .getPlansStars()
      .then((response) => {
        setPlansStars(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => { });
  };

  const getPlansDiamonds = () => {
    Requests.vip
      .getPlansDiamonds()
      .then((response) => {
        setPlansDiamonds(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => { });
  };

  const getPlansDuckets = () => {
    Requests.vip
      .getPlansDuckets()
      .then((response) => {
        setPlansDuckets(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => { });
  };

  /*
    const api = axios.create({
        baseURL: "https://api.mercadopago.com"
    });

    api.interceptors.request.use(async config => {
        // https://www.mercadopago.com.br/developers/panel
        // vai precisar gerar um token, acesse esse link. 
        // E gratuito.
        // Aqui no video não vou mostrar meu token, por questões
        // de segurança. Mas e algo como:
        //  TEST-asasj14jh2ldfljdfsfld
        const token = "APP_USR-3402148247962607-052822-2fd9c90ff38ffccd1abee0337e1a0c90-1187480610"
        config.headers.Authorization = `Bearer ${token}`

        return config
    });
*/
  const getPayment = (type) => {
    let transactionAmount, description;

    switch (type.toLowerCase()) {
      case "supervip":
        handleOpenVipModal();
        setPaymentVip([]);
        setType("");
        transactionAmount = precoPixVip3;
        description = "Plano VIP Diamante";
        setType("supervip");
        break;
      case "coins-diamond-1":
        handleOpenDiamondsModal();
        setPaymentDiamonds([]);
        setType("");
        transactionAmount = 55;
        description = "Plano Diamante 40,000";
        setType("coins_diamond_1");
        break;

      case "coins-diamond-2":
        handleOpenDiamondsModal();
        setPaymentDiamonds([]);
        setType("");
        transactionAmount = 40;
        description = "Plano Diamante 25,000";
        setType("coins_diamond_2");
        break;

      case "coins-diamond-3":
        handleOpenDiamondsModal();
        setPaymentDiamonds([]);
        setType("");
        transactionAmount = 30;
        description = "Plano Diamante 15,000";
        setType("coins_diamond_3");
        break;

      case "coins-diamond-4":
        handleOpenDiamondsModal();
        setPaymentDiamonds([]);
        setType("");
        transactionAmount = 25;
        description = "Plano Diamante 10,000";
        setType("coins_diamond_4");
        break;

      case "coins-diamond-5":
        handleOpenDiamondsModal();
        setPaymentDiamonds([]);
        setType("");
        transactionAmount = 15;
        description = "Plano Diamante 8,000";
        setType("coins_diamond_5");
        break;

      case "coins-diamond-6":
        handleOpenDiamondsModal();
        setPaymentDiamonds([]);
        setType("");
        transactionAmount = 8;
        description = "Plano Diamante 4,000";
        setType("coins_diamond_6");
        break;

      case "coins-diamond-new-1":
        handleOpenDiamondsModal();
        setPaymentDiamonds([]);
        setType("");
        setType("coins_diamond_new1");
        break;

      case "coins-diamond-new-2":
        handleOpenDiamondsModal();
        setPaymentDiamonds([]);
        setType("");
        setType("coins_diamond_new2");
        break;
      case "coins-ducket-1":
        handleOpenDucketsModal();
        setPaymentDuckets([]);
        setType("");
        transactionAmount = 50;
        description = "Plano Duckets 500";
        setType("coins_ducket_1");
        break;

      case "coins-ducket-2":
        handleOpenDucketsModal();
        setPaymentDuckets([]);
        setType("");
        transactionAmount = 40;
        description = "Plano Duckets 400";
        setType("coins_ducket_2");
        break;

      case "coins-ducket-3":
        handleOpenDucketsModal();
        setPaymentDuckets([]);
        setType("");
        transactionAmount = 30;
        description = "Plano Duckets 300";
        setType("coins_ducket_3");
        break;

      case "coins-ducket-4":
        handleOpenDucketsModal();
        setPaymentDuckets([]);
        setType("");
        transactionAmount = 25;
        description = "Plano Duckets 250";
        setType("coins_ducket_4");
        break;
      case "coins-ducket-5":
        handleOpenDucketsModal();
        setPaymentDuckets([]);
        setType("");
        transactionAmount = 20;
        description = "Plano Duckets 200";
        setType("coins_ducket_5");
        break;

      case "coins-ducket-6":
        handleOpenDucketsModal();
        setPaymentDuckets([]);
        setType("");
        transactionAmount = 15;
        description = "Plano Duckets 150";
        setType("coins_ducket_6");
        break;

      case "coins-ducket-7":
        handleOpenDucketsModal();
        setPaymentDuckets([]);
        setType("");
        transactionAmount = 5;
        description = "Plano Duckets 50";
        setType("coins_ducket_7");
        break;

      case "coins-seasonal-1":
        handleOpenSeasonalModal();
        setPaymentSeasonal([]);
        setType("");
        setType("coins_seasonal_1");
        break;

      case "coins-seasonal-2":
        handleOpenSeasonalModal();
        setPaymentSeasonal([]);
        setType("");
        setType("coins_seasonal_2");
        break;

      case "coins-seasonal-3":
        handleOpenSeasonalModal();
        setPaymentSeasonal([]);
        setType("");
        setType("coins_seasonal_3");
        break;

      case "coins-seasonal-4":
        handleOpenSeasonalModal();
        setPaymentSeasonal([]);
        setType("");
        setType("coins_seasonal_4");
        break;

      case "coins-seasonal-5":
        handleOpenSeasonalModal();
        setPaymentSeasonal([]);
        setType("");
        setType("coins_seasonal_5");
        break;

      default:
        break;
    }
  };

  React.useEffect(() => {
    getPlansVIP();
    getPlansStars();
    getPlansDiamonds();
    getPlansDuckets();
  }, []);
  return (
    <>
      <Head />
      <div className="container flex-column margin-bottom-min">
        <div className="content">
          <PaymentModal type={type} open={openPaymentModal} close={handleCloseVipModal} />
          <PaymentModal type={type} open={openPaymentModalDiamonds} close={handleCloseVipModal} />
          <PaymentModal type={type} open={openPaymentModalDuckets} close={handleCloseVipModal} />
          <PaymentModal type={type} open={openPaymentModalSeasonal} close={handleCloseVipModal} />

          <ApprovedModal open={approvedPaymentModal} close={handleClosePaymentModal} />
          <RejectedModal open={rejectedPaymentModal} close={handleClosePaymentModal} />
          <Header visited="shop" />
          <div className="another-header-menu">
            <div className="webcenter">
              <div className="another-header-menu-icon">
                <icon name="fame"></icon>
              </div>
              <div className="flex">
                {page === "vip" ? (
                  <a className="another-header-menu-option visited">
                    <label>{i18n.t("shop.pages.vip")}</label>
                  </a>
                ) : (
                  <Link
                    to="/shop/vip"
                    className="another-header-menu-option"
                    onClick={() => changePage("vip")}
                  >
                    <label>{i18n.t("shop.pages.vip")}</label>
                  </Link>
                )}

                <separator></separator>
                {page === "stars" ? (
                  <a className="another-header-menu-option visited">
                    <label>{i18n.t("shop.pages.stars")}</label>
                  </a>
                ) : (
                  <Link
                    to="/shop/stars"
                    className="another-header-menu-option"
                    onClick={() => changePage("stars")}
                  >
                    <label>{i18n.t("shop.pages.stars")}</label>
                  </Link>
                )}

                <separator></separator>
                {page === "diamonds" ? (
                  <a className="another-header-menu-option visited">
                    <label>{i18n.t("shop.pages.diamonds")}</label>
                  </a>
                ) : (
                  <Link
                    to="/shop/diamonds"
                    className="another-header-menu-option"
                    onClick={() => changePage("diamonds")}
                  >
                    <label>{i18n.t("shop.pages.diamonds")}</label>
                  </Link>
                )}
                <separator></separator>
                {page === "duckets" ? (
                  <a className="another-header-menu-option visited">
                    <label>{i18n.t("shop.pages.duckets")}</label>
                  </a>
                ) : (
                  <Link
                    to="/shop/duckets"
                    className="another-header-menu-option"
                    onClick={() => changePage("duckets")}
                  >
                    <label>{i18n.t("shop.pages.duckets")}</label>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="webcenter flex-column">
            <div className="flex justify-content-around width-content">
              {page === "vip" && (
                <div className="vip-page">
                  <div className="flex-column col-15 margin-left-max">
                    <h4 className="color-4 bold">PLANOS DISPONÍVEIS</h4>
                    <h6 className="color-4 margin-bottom-min">Escolha um plano que cabe no seu bolso.</h6>

                    {plansVip.map((planos, index) => {
                      return (
                        <div key={index}>
                          <div className="flex-column">
                            <div className="general-box-header flex-column">
                              <div
                                className="general-box-header-content flex card-vip"
                                style={{ background: `${planos.hex ? `${planos.hex}` : "#4e4e4e"}` }}
                              >
                                <icon
                                  name="vip-badge-mini"
                                  className="margin-auto-top-bottom margin-right-min"
                                ></icon>
                                <label className="white flex width-content">
                                  <div className="flex-column margin-auto-top-bottom">
                                    <h5>
                                      <b>{planos.product_id}</b>
                                    </h5>
                                    <div className="price">
                                      <h6> Por R$ {planos.precos}</h6>
                                    </div>
                                  </div>
                                </label>
                                <a
                                  onClick={() => getPayment(`${planos.type}`)}
                                  className={`${config.cmsStyles.buttonsClass} margin-left-max buy-package no-link`}
                                  style={{ minWidth: "113px", height: "43px" }}
                                >
                                  <label className="margin-auto white">
                                    <h5>{i18n.t("shop.buttons.buy")}</h5>
                                  </label>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                    <div className="gray margin-top-max" id="general-warning-store">
                      <h5 className="bold uppercase">Você mora em outro país?</h5>
                      <h5 className="margin-top-bottom-min">
                        Caso você seja um jogador português e não tenha como utilizar o MercadoPago como
                        método de compra, a sua única maneira para poder comprar cash é entrando em contato
                        com um membro da equipe pelo{" "}
                        <a
                          href={`${config.hotel.socialmedia.discord}`}
                          className="bold no-link"
                          target="_blank"
                          rel="noreferrer"
                        >
                          DISCORD
                        </a>{" "}
                      </h5>
                    </div>

                    {
                      isMobile ? (
                        <div className="gray margin-top-max" id="general-warning-store">
                        <h5 className="bold uppercase">Está pelo celular?</h5>
                        <h5 className="margin-top-bottom-min">
                          Caso você esteja utilizando a versão mobile, clique no botão abaixo para copiar a chave PIX.<br/><br/>{" "}
                          <a
                            className="bold no-link"
                            target="_blank"
                            rel="noreferrer"
                            onClick={() => copyToClipboard()}
                          >
                            Copiar chave PIX
                          </a>{" "}
                        </h5>
                      </div>
                      ) : (
                        <></>
                      )
                    }

                  </div>
                  <div className="flex-column col-25 margin-left-max">
                    <div className="gray" id="general-warning-store">
                      <h3 className="bold">Porque comprar nosso VIP?</h3>
                      <h5 className="margin-top-bottom-min">
                        Além de uma ajuda financeira e necessária para manter o hotel online, os planos VIP
                        foram seriamente pensados para, especialmente, beneficiar a você com tais regalias.
                      </h5>
                      <h4 className="margin-top-bottom-min">
                        <b>Benefícios gerais</b>
                      </h4>
                      <h5 className="flex">
                        <div className="setinha-direita margin-right-min"></div>Capacidade de entrar em
                        quartos lotados.
                      </h5>
                      <h5 className="flex">
                        <div className="setinha-direita margin-right-min"></div>Menor tempo de mute por flood.
                      </h5>
                      <h5 className="flex">
                        <div className="setinha-direita margin-right-min"></div>Efeito VIP exclusivo sobre a
                        cabeça. (:enable 801)
                      </h5>
                      <h5 className="flex">
                        <div className="setinha-direita margin-right-min"></div>Adicionar até 5.000 de amigos.
                      </h5>
                      <h5 className="flex">
                        <div className="setinha-direita margin-right-min"></div>Emblema exclusivo de
                        identificação VIP.
                      </h5>
                      <h5 className="flex">
                        <div className="setinha-direita margin-right-min"></div>Balões de fala exclusivos.
                      </h5>
                      <h5 className="flex">
                        <div className="setinha-direita margin-right-min"></div>Caixa VIP exclusiva.
                      </h5>
                      <h5 className="flex">
                        <div className="setinha-direita margin-right-min"></div>Loja de raros, emblemas, ads e
                        mobis exclusivos, além de poder personalizar seu nickname com cores e prefixos
                      </h5>
                      <h5 className="flex">
                        <div className="setinha-direita margin-right-min"></div>Câmbios de diamantes e duckets
                        sem impostos.
                      </h5>
                      <h5 className="flex">
                        <div className="setinha-direita margin-right-min"></div>Emblema SuperVIP
                      </h5>
                      <h5 className="flex">
                        <div className="setinha-direita margin-right-min"></div>10.000 conquistas
                      </h5>
                      <h4 className="margin-top-bottom-min">
                        <b>Catálogo VIP</b>
                      </h4>
                      <h5 className="flex">
                        <div className="setinha-direita margin-right-min"></div>Raros LTD exclusivos
                      </h5>
                      <h5 className="flex">
                        <div className="setinha-direita margin-right-min"></div>Com este plano você garante
                        uma Serpa VIP Dragão Diamantado
                      </h5>
                      <h5 className="flex">
                        <div className="setinha-direita margin-right-min"></div>Emblemas exclusivos
                      </h5>
                      <h5 className="flex">
                        <div className="setinha-direita margin-right-min"></div>12.000 diamantes
                      </h5>
                      <h5 className="flex">
                        <div className="setinha-direita margin-right-min"></div>200 duckets.
                      </h5>
                      <h5 className="flex">
                        <div className="setinha-direita margin-right-min"></div>Câmbios de diamantes sem taxas
                      </h5>
                      <h4 className="margin-top-bottom-min">
                        <b>Comandos VIP</b>
                      </h4>
                      <h5 className="flex">
                        <div className="setinha-direita margin-right-min"></div>Comando :slime (Jogue slime na
                        cara de seus colegas);
                      </h5>
                      <h5 className="flex">
                        <div className="setinha-direita margin-right-min"></div>Comando :sexo
                      </h5>
                      <h5 className="flex">
                        <div className="setinha-direita margin-right-min"></div>Comando :poll (Crie votações);
                      </h5>
                      <h5 className="flex">
                        <div className="setinha-direita margin-right-min"></div>Comando :banner número
                        (Personalize o perfil do seu avatar);
                      </h5>
                      <h5 className="flex">
                        <div className="setinha-direita margin-right-min"></div>Comando :tele (Ativa o
                        teletransporte);
                      </h5>
                      <h5 className="flex">
                        <div className="setinha-direita margin-right-min"></div>Comando :fastwalk (Andar
                        rápido);
                      </h5>
                      <h5 className="flex">
                        <div className="setinha-direita margin-right-min"></div>Comando :tp (Teletransporte um
                        usuário);
                      </h5>
                      <h5 className="flex">
                        <div className="setinha-direita margin-right-min"></div>Comando :spull (Puxe um
                        usuário);
                      </h5>
                      <h5 className="flex">
                        <div className="setinha-direita margin-right-min"></div>Comando :flagme (Troque seu
                        nome de usuário);
                      </h5>
                      <h5 className="flex">
                        <div className="setinha-direita margin-right-min"></div>Comando :gotroom (Vá a um
                        quarto digitando o ID);
                      </h5>
                      <h5 className="flex">
                        <div className="setinha-direita margin-right-min"></div>Comando :pay x (Pagar usuários
                        sem comprar câmbios).
                      </h5>
                      <h5 className="flex">
                        <div className="setinha-direita margin-right-min"></div>Comando :copy x (Para copiar o
                        visual de outro user online).
                      </h5>
                      <h4 className="margin-top-bottom-min">
                        <b>Em nosso servidor de economia</b>
                      </h4>
                      <h5 className="flex">
                        <div className="setinha-direita margin-right-min"></div>Cargo destacado dos demais
                        users no servidor de economia e oficial Habbinfo;
                      </h5>
                      <h5 className="flex">
                        <div className="setinha-direita margin-right-min"></div>Canal de enquetes onde você
                        terá a possibilidade de opinar qual coleção lhe agrada mais dentro da loja vip e
                        qualquer outra referente aos benefícios VIP's;
                      </h5>
                      <h5 className="flex">
                        <div className="setinha-direita margin-right-min"></div>Canal de sorteios e vouchers
                        exclusivos;
                      </h5>
                      <h5 className="flex">
                        <div className="setinha-direita margin-right-min"></div>Chat e canal de voz exclusivo
                        para membros vips, onde vocês poderão bater um papo e negociar seus raros.
                      </h5>
                    </div>
                  </div>
                </div>
              )}
              {page === "stars" && (
                <div id="cash-packages-area">
                  {plansStars.length > 0 &&
                    plansStars.map((planos, index) => {
                      return (
                        <div className="margin-bottom-minm" id="cash-package-div" key={index}>
                          <div className="margin-right-min" id="cash-amount">
                            {planos.product_id} <br />
                            <img src={`${config.hotel.shop.starsIcon}`} />
                          </div>
                          <label className="gray flex-column margin-auto-top-bottom text-nowrap">
                            <h5 className="bold" style={{ fontSize: "12px" }}>
                              {i18n.t("shop.pages.stars")} APENAS:
                            </h5>
                            <h4 className="margin-top-minm">
                              <b>R${planos.precos}</b>
                            </h4>
                          </label>
                          <a
                            onClick={() => getPayment(`${planos.type}`)}
                            className={`${config.cmsStyles.buttonsClass} margin-auto-left margin-auto-top-bottom no-link`}
                            style={{ width: "205px", height: "40px", left: "-1px", fontSize: "13px" }}
                          >
                            <label className="margin-auto white">Aquirir este pacote</label>
                          </a>
                        </div>
                      );
                    })}
                </div>
              )}

              {page === "diamonds" && (
                <div id="cash-packages-area">
                  {plansDiamonds.length > 0 &&
                    plansDiamonds.map((planos, index) => {
                      return (
                        <div className="margin-bottom-minm" id="cash-package-div" key={index}>
                          <div className="margin-right-min" id="cash-amount">
                            {planos.product_id} <img src={`${config.hotel.shop.diamondIcon}`} />
                          </div>
                          <label className="gray flex-column margin-auto-top-bottom text-nowrap">
                            <h5 className="bold" style={{ fontSize: "12px" }}>
                            {i18n.t("shop.pages.diamonds")} APENAS:
                            </h5>
                            <h4 className="margin-top-minm">
                              <b>R${planos.precos}</b>
                            </h4>
                          </label>
                          <a
                            onClick={() => getPayment(`${planos.type}`)}
                            className={`${config.cmsStyles.buttonsClass} margin-auto-left margin-auto-top-bottom no-link`}
                            style={{ minWidth: "205px", height: "40px" }}
                          >
                            <label className="margin-auto white">Aquirir este pacote</label>
                          </a>
                        </div>
                      );
                    })}
                </div>
              )}

              {page === "duckets" && (
                <div id="cash-packages-area">
                  {plansDuckets.length > 0 &&
                    plansDuckets.map((planos, index) => {
                      return (
                        <div className="margin-bottom-minm" id="cash-package-div" key={index}>
                          <div className="margin-right-min" id="cash-amount">
                            {planos.product_id} <img src={`${config.hotel.shop.ducketsIcon}`} />
                          </div>
                          <label className="gray flex-column margin-auto-top-bottom text-nowrap">
                            <h5 className="bold" style={{ fontSize: "12px" }}>
                            {i18n.t("shop.pages.duckets")} APENAS:
                            </h5>
                            <h4 className="margin-top-minm">
                              <b>R${planos.precos}</b>
                            </h4>
                          </label>
                          <a
                            onClick={() => getPayment(`${planos.type}`)}
                            className={`${config.cmsStyles.buttonsClass} margin-auto-left margin-auto-top-bottom no-link`}
                            style={{ minWidth: "205px", height: "40px" }}
                          >
                            <label className="margin-auto white">Aquirir este pacote</label>
                          </a>
                        </div>
                      );
                    })}
                </div>
              )}

              {page !== "vip" && (
                <div className="flex-column col-15">
                  <div className="general-box padding-none height-fit overflow-hidden">
                    <div className="gray" id="general-warning-store">
                      <h5 className="bold uppercase">Você mora em Portugal?</h5>
                      <h5 className="margin-top-bottom-min">
                        Caso você seja um jogador português e não tenha como utilizar o MercadoPago como
                        método de compra, a sua única maneira para poder comprar cash é entrando em contato
                        com um membro da equipe pelo{" "}
                        <a
                          href={`${config.hotel.socialmedia.discord}`}
                          className="bold no-link"
                          target="_blank"
                        >
                          DISCORD
                        </a>{" "}
                        ou pela <b>ferramenta de ajuda</b>
                      </h5>
                      <div
                        className={`${config.cmsStyles.buttonsClass}`}
                        style={{ width: "234px", height: "40px", fontSize: "13px", margin: "15px 0 0 0" }}
                      >
                        <label className="margin-auto bold white pn">
                          <icon
                            style={{
                              position: "absolute",
                              width: "18px",
                              height: "18px",
                              top: "-1px",
                              left: "-35px",
                              overflow: "hidden",
                            }}
                          >
                            <img
                              style={{ marginTop: "-595px", marginLeft: "-1440px" }}
                              src="<?php echo $hotel['site']; ?>/general/assets/img/sprite.png?<?php echo time(); ?>"
                            />
                          </icon>
                          {i18n.t("shop.buttons.help")}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="flex-column col-15">
                    <div className="general-box padding-none height-fit overflow-hidden">
                      <div className="gray margin-top-min" id="general-warning-store">
                        <h5 className="bold uppercase margin-bottom-min">LEMBRE-SE SEMPRE!</h5>
                        <h5>
                          Sempre peça autorização do seus pais ou responsáveis. Se não a tiver e o pagamento
                          for cancelado ou recusado, você será banido.
                        </h5>
                        <br />
                        <h5>
                          Caso você queira pagar por outro metodo além do PIX, chame alguém de nossa equipe
                          para lhe ajudar a adquirir ou entre em contato conosco no{" "}
                          <a href={`${config.hotel.socialmedia.instagram}`} target="_blank">
                            Instagram
                          </a>
                          .
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Vip;
