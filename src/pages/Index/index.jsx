import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Bottom from "../../components/Bottom";
import Footer from "../../components/Footer";
import Head from "../../components/Head";
import Header from "../../components/Header";
import NewsMiniCard from "../../components/NewsMiniCard";
import Requests from "../../services/Requests";

import StoreContext from "../../store/Context";
import { loop, scrollToTop } from "../../utils/utils";

import { i18n } from "../../translate/i18n";
import CardLogin from "./components/CardLogin";
import CardPin from "./components/CardPin";
import CardRecover from "./components/CardRecover";

const Index = () => {
  const { config } = useContext(StoreContext);

  const [lastNews, setLastNews] = useState([]);
  const [isLoadingLastNews, setLoadingLastNews] = useState(true);
  const [currentTab, setCurrentTab] = useState("login");
  const [alert, setAlert] = useState(null);

  const [isLoggingIn, setLoggingIn] = useState(false);

  const timeout = config.dev[0] ? (config.dev[0].timeout ? config.dev[0].timeout : 0) : 0;

  const isMobile = window.screen.width <= 480;

  function renderTab() {
    if (currentTab === "login") {
      return (
        <CardLogin
          isLoggingIn={isLoggingIn}
          timeout={timeout}
          config={config}
          setCurrentTab={setCurrentTab}
          setLoggingIn={setLoggingIn}
          setAlert={setAlert}
        />
      );
    }
    if (currentTab === "recover-pw") {
      return (
        <CardRecover
          isLoggingIn={isLoggingIn}
          config={config}
          setCurrentTab={setCurrentTab}
          setAlert={setAlert}
        />
      );
    }
    return <CardPin isLoggingIn={isLoggingIn} setLoggingIn={setLoggingIn} setAlert={setAlert} />;
  }

  useEffect(() => {
    scrollToTop();
    setTimeout(() => {
      Requests.index
        .getNewsIndex()
        .then((response) => {
          setLastNews(response.data);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoadingLastNews(false);
        });
    }, timeout);
  }, [timeout]);

  return (
    <>
      <Head alert={alert} use={false} />
      <Header />

      <div className="webcenter flex-column">
        <div className="flex col-c-1">
          <div className="flex-column col-1" style={isMobile ? { maxWidth: "100%" } : {}}>
            {renderTab()}
            {isMobile && (
              <div className="flex-column margin-top-min">
                <div
                  className="general-box register-announcement flex padding-md"
                  style={{
                    background: `url(${config.cmsStyles.backgroundIndex}) right 0 / auto no-repeat scroll #5b217f`,
                  }}
                >
                  <label className="flex-column white">
                    <div className="flex-column padding-minm padding-top-none">
                      <h2 className="bold uppercase">{i18n.t("index.registerAnnouncement.title")}</h2>
                      <h5 className="margin-top-min">
                        <b>{config.hotel.name}</b> {i18n.t("index.registerAnnouncement.subtitle")}
                      </h5>
                    </div>
                    <div className="flex margin-auto-top">
                      <h6 className="margin-auto margin-right-min">
                        {i18n.t("index.registerAnnouncement.smallText")} <b>{config.hotel.name}</b>
                      </h6>
                      <Link
                        to="/register"
                        className={`${config.cmsStyles.buttonsClass} transition-disabled margin-auto-top-bottom no-link`}
                        style={{ minWidth: "150px", height: "50px" }}
                      >
                        <label className="margin-auto white">
                          <h5 className="bold fs-14 uppercase">{i18n.t("index.buttons.createAccount")}</h5>
                        </label>
                      </Link>
                    </div>
                  </label>
                </div>
              </div>
            )}
            <div className="margin-top-min">
              <div className="general-box padding-minm width-content">
                <div className="featured-user flex">
                  <div className="featured-user-avatarimage flex">
                    <icon name="medal"></icon>
                    <img
                      className="habbo-imager"
                      alt="avatar img"
                      src={`${config.hotel.avatarImage}?figure=hr-115-42.hd-195-19.ch-3030-82.lg-275-1408.fa-1201.ca-1804-64&action=std&direction=2&head_direction=3&gesture=std&size=n&img_format=png&frame=0&headonly=0`}
                    />
                  </div>
                  <label className="margin-auto-top-bottom padding-right-min">
                    <h5 className="bold fs-14">{i18n.t("index.featuredUser.title")}</h5>
                    <h6>{i18n.t("index.featuredUser.smallText")}</h6>
                  </label>
                </div>
              </div>
            </div>
          </div>
          {!isMobile && (
            <div className="margin-left-min flex col-2">
              <div
                className="general-box register-announcement flex padding-md"
                style={{
                  background: `url(${config.cmsStyles.backgroundIndex}) right 0 / auto no-repeat scroll #5b217f`,
                }}
              >
                <label className="flex-column white">
                  <div className="flex-column padding-minm padding-top-none">
                    <h2 className="bold uppercase">{i18n.t("index.registerAnnouncement.title")}</h2>
                    <h5 className="margin-top-min">
                      <b>{config.hotel.name}</b> {i18n.t("index.registerAnnouncement.subtitle")}
                    </h5>
                  </div>
                  <div className="flex margin-auto-top">
                    <h6 className="margin-auto margin-right-min">
                      {i18n.t("index.registerAnnouncement.smallText")} <b>{config.hotel.name}</b>
                    </h6>
                    <Link
                      to="/register"
                      className={`${config.cmsStyles.buttonsClass} transition-disabled margin-auto-top-bottom no-link`}
                      style={{ minWidth: "150px", height: "50px" }}
                    >
                      <label className="margin-auto white">
                        <h5 className="bold fs-14 uppercase">{i18n.t("index.buttons.createAccount")}</h5>
                      </label>
                    </Link>
                  </div>
                </label>
              </div>
            </div>
          )}
        </div>
        <div className="info-news">
          <hr style={{ marginTop: "30px", marginBottom: "30px" }} />
          <h2 style={{ fontWeight: "bold" }}> Últimas Notícias </h2>
          <h5> Veja as últimas novidades do {config.hotel.name}...</h5>
        </div>
        <br></br>
        <div className="news-index flex-wrap">
          {!isLoadingLastNews
            ? lastNews.map((news, i) => {
                return (
                  <NewsMiniCard
                    id={news.id}
                    title={news.title}
                    shortstory={news.shortstory}
                    image={news.image}
                    key={i}
                  />
                );
              })
            : loop(<NewsMiniCard loading />, 3).map((c) => c)}
        </div>
        <Footer />
      </div>
      <Bottom />
    </>
  );
};

export default Index;
