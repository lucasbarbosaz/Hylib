import React from "react";
import { Link } from "react-router-dom";
import StoreContext from "../../../store/Context";

const Logo = () => {
  const { config } = React.useContext(StoreContext);

  return (
    <Link to="/" className="margin-auto flex">
      <icon
        name="logo-hybbe-big"
        style={{
          background: `url(${config.cmsStyles.logoStyles.logoUrl})`,
          width: `${config.cmsStyles.logoStyles.logoWidth}`,
          height: `${config.cmsStyles.logoStyles.logoHeight}`,
        }}
      />
    </Link>
  );
};

export default Logo;
