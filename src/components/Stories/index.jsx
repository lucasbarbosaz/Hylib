import React from 'react';
import { i18n } from "../../translate/i18n";

const Stories = (props) => {


    return (
        <div id="general-alert" style={{ marginTop: "-15px" }}>

            <div id="general-camera-box">
                <div id="general-stories-camera-icon"></div>
            </div>
            <div id="hr">
            </div>
            <div id="general-mystories-box">
                <div id="general-mystorie-circle">
                    <div id="general-mystorie-circle-icon"></div></div>
                <div id="general-mystorie-text">Meu Storie </div>
            </div>

        {/*}
            <div id="general-all-stories-box">
                <div id="general-all-stories-circle">
                    <div id="general-all-stories-circle-icon" >
                        <img alt="Brytch " src={`https://www.habbo.com.br/habbo-imaging/avatarimage?img_format=png&user=.Jone&direction=3&head_direction=3&size=s&action=std`} />
                    </div>

                </div>
                <div id="general-all-stories-text">Brytch</div>
            </div>
    {*/}

            <div id="general-see-all-box">
                <div id="general-see-all-icon"> </div>
                <div id="general-see-all-text">(em breve)</div>
            </div>

        </div>
    )
}

export default Stories;