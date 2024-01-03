import React from "react";

import '../../../assets/css/client.css';

import StoreContext from '../../../store/Context';
import Footer from "../../../components/Footer";

const ChooseClient = () => {

    const { config } = React.useContext(StoreContext);

    return (
        <>
            <div className="client-version-container flex" style={{zIndex: "99999 !important;"}}>
                <div className="client-version-content flex margin-auto">
                    <div className="frank margin-right-md"></div>
                    <div className="margin-auto-top-bottom flex-column">
                        <label className="gray flex-column">
                            <h2 className="bold uppercase">Escolha sua versão!</h2>
                            <h5 className="margin-bottom-min">Você pode escolher a versão do jogo de acordo com o seu gosto!</h5>
                            <h5>Você pode escolher a <b>Jogar agora</b> caso queira animações mais rápidas e fluídas, ou escolher a <b>versão flash</b> onde funcionará apenas em navegadores antigos.</h5>
                            <h5 className="margin-top-md">Você alterar a versão sempre que quiser nas configurações da sua client!</h5>
                            <h5 className="bold margin-top-min uppercase">Escolha abaixo a versão desejada:</h5>
                        </label>
                        <div className="set-client-version flex margin-top-min">
                            <a href="/client/betav2" className={`${config.cmsStyles.buttonsClass} p-3 no-link`} style={{width: "100%;", height: "48px;"}}>
                                <label className="margin-auto white">
                                    <h5>Jogar agora! (novo)</h5>
                                </label>
                            </a>
                            <a href="/client/60" className={`${config.cmsStyles.buttonsClass} p-3 no-link`} style={{width: "100%;", height: "48px;"}}>
                                <label className="margin-auto white">
                                    <h5>Versão Flash (antigo)</h5>
                                </label>
                            </a>
                        </div>
                        <label className="gray flex-column">
                            <h5 className="margin-top-md">Ao prosseguir você deve respeitar à <a href="/habbo-way" target="_blank">{config.hotel.name} Etiqueta</a> para não sofrer punições!</h5>
                        </label>
                       
                    </div>
                </div>

            </div>
            
            
        </>
    )
}

export default ChooseClient;