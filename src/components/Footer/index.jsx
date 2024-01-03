import { useContext, useState } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import StoreContext from "../../store/Context";
import { i18n } from "../../translate/i18n";

const FooterLink = (props) => {
  if (props.samePage === true) {
    return (
      <Link
        to={`/${props.to}`}
        className="no-link color-4 text-nowrap"
        onClick={props.onClick}
        target="_blank"
      >
        {props.children}
      </Link>
    );
  } else {
    return (
      <Link to={props.to} className="no-link color-4 text-nowrap" onClick={props.onClick}>
        {props.children}
      </Link>
    );
  }
};

const Footer = (props) => {
  const { config } = useContext(StoreContext);
  const [showLanguages, setShowLanguages] = useState(false);
  const isMobile = window.screen.width <= 480;

  const showChangeLanguage = isMobile ? false : !props.notShowChangeLanguage;

  const showLanguageOptions = () => {
    setShowLanguages(!showLanguages);
  };

  const changeLanguage = (language) => {
    localStorage.setItem("i18nextLng", language);
    window.location.reload();
  };

  return (
    <>
      <div className="footer gray-clear flex margin-top-min margin-bottom-min">
        <h5
          dangerouslySetInnerHTML={{
            __html: i18n.t("footer.text", {
              hotelName: config.hotel.name,
              currentDate: config.currentYear,
            }),
          }}
        ></h5>
        <div className="footer-links">
          {config.linksFooter.map((link, index) => {
            return (
              <>
                <FooterLink
                  to={link.samePage === true ? `/${link.link}` : link.link}
                  samePage={link.samePage}
                >
                  {i18n.t(`footer.${link.name}`, {
                    hotelName: config.hotel.name,
                  })}
                </FooterLink>
                {index !== config.linksFooter.length - 1 && "|"}
              </>
            );
          })}
        </div>
        <h5>
          {i18n.t("footer.text2")}{" "}
          {config.dev.map((dev, i) => {
            return (
              <>
                <OverlayTrigger placement="top" overlay={<Tooltip>Discord: {dev.contact}</Tooltip>}>
                  <Link to={`/profile/${dev.name}`} className="no-link color-4 text-nowrap">
                    {dev.name}
                  </Link>
                </OverlayTrigger>
                {i !== config.dev.length - 1 && " e "}
              </>
            );
          })}
        </h5>
      </div>
      {showChangeLanguage && (
        <div className="language-change-div">
          <button className="language-change" onClick={showLanguageOptions}>
            <h4>{i18n.t("footer.changeLanguage")}</h4>
          </button>
          {showLanguages && (
            <div className="language-change-options">
              <ul>
                <li>
                  <div
                    onClick={(e) => {
                      changeLanguage("pt-BR");
                    }}
                    className="language-change-li icon icon-right-open"
                  >
                    {i18n.t("footer.languages.pt")}
                  </div>
                </li>
                <li>
                  <div
                    onClick={(e) => {
                      changeLanguage("en-US");
                    }}
                    className="language-change-li icon icon-right-open"
                  >
                    {i18n.t("footer.languages.en")}
                  </div>
                </li>
                <li>
                  <div
                    onClick={(e) => {
                      changeLanguage("es");
                    }}
                    className="language-change-li icon-right-open"
                  >
                    {i18n.t("footer.languages.es")}
                  </div>
                </li>
              </ul>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Footer;
