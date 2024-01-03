import React from "react";
import Head from "../../components/Head";
import Header from "../../components/Header";
import { i18n } from "../../translate/i18n";

import TabNavigationPhotos from "./TabNavigationItem/TabNavigationPhotos";
import CommunityPhotos from "./CommunityPhotos";
import YourPhotos from "./YourPhotos";
import StoreContext from "../../store/Context";

const Photos = (props) => {
  const [page, setPage] = React.useState("communityPhotos");
  const { config } = React.useContext(StoreContext);

  const activePages = [
    {
      name: "communityPhotos",
      link: "communityPhotos",
    },
    {
      name: "yourPhotos",
      link: "yourPhotos",
    },
  ];

  const changePage = (page) => {
    setPage(page);
  };

  const renderAlert = () => {
    return (
      <div id="general-alert" style={{ justifyContent: "center", alignItems: "center", padding: "24px" }}>
        <icon
          name="camera"
          style={{
            backgroundColor: `${config.cmsStyles.cardLoginHex}`,
          }}
        ></icon>
        <div id="general-alert-label" style={{ marginLeft: "20px" }}>
          <div id="general-alert-label-title" style={{ fontSize: "18px" }}>
            {i18n.t(`photos.pages.${page}.title`)}
          </div>
          <div id="general-alert-label-description" style={{ fontSize: "14px" }}>
            {i18n.t(`photos.pages.${page}.smallText`)}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Head />
      <Header visited="community" />
      <div className="container flex-column margin-bottom-min">
        <div className="content">
          <div className="another-header-menu">
            <div className="webcenter">
              <div className="another-header-menu-icon">
                <icon name="camera"></icon>
              </div>
              <div className="flex">
                <separator></separator>
                {activePages.map((activePage) => {
                  return (
                    <TabNavigationPhotos
                      name={activePage.name}
                      visited={page === activePage.link}
                      changePage={changePage}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {renderAlert()}

      {page === "communityPhotos" && <CommunityPhotos />}
      {page === "yourPhotos" && <YourPhotos />}
    </>
  );
};

export default Photos;
