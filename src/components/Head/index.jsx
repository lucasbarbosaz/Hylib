import React from "react";
import StoreContext from "../../store/Context";
import Loading from "../Loading";
import Logo from "./Logo/Logo";

const Head = ({ alert, use = true }) => {
  const { config } = React.useContext(StoreContext);

  const [loading, setLoading] = React.useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 800);

  return (
    <>
      {loading && <Loading />}
      {alert !== null ? alert : ""}

      <div className="container">
        <div className="content flex-column"></div>
        {use !== false ? (
          <div
            className="header__1 flex"
            style={{
              background: `url(${config.cmsStyles.backgroundUrl}) 0 center / auto repeat-x scroll ${config.cmsStyles.backgroundHex}`,
            }}
          >
            <Logo />
          </div>
        ) : (
          <div className="header__1 flex">
            <Logo />
          </div>
        )}
      </div>
    </>
  );
};

export default Head;
