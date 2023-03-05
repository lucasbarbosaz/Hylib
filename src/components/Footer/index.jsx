import React from 'react';
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from 'react-router-dom';
import StoreContext from "../../store/Context";


const Footer = (props) => {
    const { config } = React.useContext(StoreContext);

    return (
        <>
            <div className="footer margin-top-min">
                <label className="gray-clear flex">
                    <h5><b>{config.hotel.name}</b> 2009 - {config.currentYear} © Todos os direitos reservados.</h5>
                    <h5 className="margin-auto-left">Desenvolvido por <OverlayTrigger placement="top" overlay={<Tooltip>Discord: Laxus#0022</Tooltip>}><Link to="/profile/Laxus" className="no-link color-4 text-nowrap">Laxus</Link></OverlayTrigger>.</h5>
                </label>
            </div>
            <div className="publicity flex margin-bottom-min">
                <img src="banner.gif?" width="1" height="1" id="kop"/>
                    <div className="publicity-content"></div>
                    <div className="publicity-label gray">
                        <h4 className="margin-bottom-minm">Publicidade de terceiros</h4>
                        <h6>As publicidades servem como forma de apoio financeiro ao {config.hotel.name}.</h6>
                    </div>
            </div>
        </>
    )
}

export default Footer;