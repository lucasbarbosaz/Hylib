import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import AuthService from '../../../services/AuthService';

const CustomRoute = ({ component: Component, onlyUnauthorized = false, publicRoute = false, privateRoute = false, logoutRoute, externalLink, ...rest }) => {

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
                    return (<Component {...rest} />);
                }
                if (onlyUnauthorized) {
                    if (logado) {
                        return (<Redirect to="/home" />);
                    } else {
                        return (<Component {...rest} />);
                    }
                } else if (privateRoute) {
                    if (logado) {
                        if (logoutRoute) {
                            AuthService.logout();
                            return (<Redirect to="/" />);
                        } else {
                            return (<Component {...rest} />);
                        }
                    } else {
                        return (<Redirect to="/" />);
                    }
                }
            }}
        />
    )
}

export default CustomRoute;