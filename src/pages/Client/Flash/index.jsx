/* eslint-disable no-extend-native */
import React from 'react';
import Iframe from 'react-iframe';
import { useHistory } from 'react-router-dom';
import APIService from "../../../services/APIService";
import Requests from '../../../services/Requests';
import StoreContext from '../../../store/Context';

const Flash = () => {
    const { config, token } = React.useContext(StoreContext);
    const history = useHistory();
    const [userId, setUserId] = React.useState(null);
    const [sso, setSSO] = React.useState("");

    if (typeof String.prototype.replaceAll == "undefined") {
        String.prototype.replaceAll = function (match, replace) {
            return this.replace(new RegExp(match, 'g'), () => replace);
        }
    }

    const sendToken = () => {
        Requests.client.flash.sendToken(token, sso)
            .then(response => {
                if (APIService.isResponseAuthorized(response)) {
                    if (response.data.authorized === true) {
                        setUserId(response.data.id);
                    } else {
                        history.push('/');
                    }

                }
            })
            .catch(error => {
                console.log(error)
            })
            .finally();
    }

    React.useEffect(() => {
        setSSO("SSO-" + parseInt(Math.floor(Math.random() * 391239132) + 1) + "");
    }, [])

    React.useEffect(() => {
        setTimeout(() => {
            sendToken();
        }, config.dev[0].timeout);
    })

    const enable60fps = window.location.pathname.endsWith('60') || window.location.pathname.endsWith('60/');
    const url = (config.hotel.clients.flashUrl + '?token=' + userId) + (enable60fps ? '&enable60fps=true' : '') + "&sso=" + sso;

    return (
        <Iframe
            url={url}
            className="client-iframe"
        />
    )
}

export default Flash;