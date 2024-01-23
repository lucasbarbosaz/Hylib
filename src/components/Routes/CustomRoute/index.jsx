import React from "react";
import { Redirect, Route } from "react-router-dom";
import AuthService from "../../../services/AuthService";
import StoreContext from "../../../store/Context";

const CustomRoute = ({
  component: Component,
  onlyUnauthorized = false,
  publicRoute = false,
  privateRoute = false,
  logoutRoute,
  externalLink,
  ...rest
}) => {
  const { setToken, setUser } = React.useContext(StoreContext);

  return (
    <Route
      {...rest}
      render={() => {
        let logado = AuthService.isUserLoggedIn();

        if (externalLink) {
          window.location.replace(externalLink);
          return;
        }
        if (publicRoute) {
          return <Component {...rest} />;
        }
        if (onlyUnauthorized) {
          if (logado) {
            return <Redirect to="/home" />;
          } else {
            return <Component {...rest} />;
          }
        } else if (privateRoute) {
          if (logado) {
            if (logoutRoute) {
              AuthService.logout();

              var users = JSON.parse(localStorage.getItem("users")) || [];

              if (users.length > 0) {
                let user = users[0];
                AuthService.setupAxiosHeaders(user.token);
                localStorage.setItem("user", JSON.stringify(user.user));
                localStorage.setItem("token", user.token);
                setToken(user.token);
                setUser(user.user);

                return <Redirect to="/home" />;
              }

              return <Redirect to="/" />;
            } else {
              return <Component {...rest} />;
            }
          } else {
            return <Redirect to="/" />;
          }
        }
      }}
    />
  );
};

export default CustomRoute;
