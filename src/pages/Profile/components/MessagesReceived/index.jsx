import React from "react";
import { Fragment, useContext, useEffect, useState } from "react";
import axios from "axios";
import { i18n } from "../../../../translate/i18n";
import HtmlParser from "react-html-parser";
import moment from "moment";
import Requests from "../../../../services/Requests";

const MessagesReceived = ({
    isLoadingUserData,
    userData,
    myUser,
    config,
    getErrands,
    errands
}) => {

    const [isLoadingErrandWrite, setLoadingErrandWrite] = useState(false);

    const [value, setValue] = useState("");
    const [alert, setAlert] = useState(null);

    const sendAlert = (severity, message) => {
        setAlert(
            severity === null || message === null ? null : (
                <div className="general-warn-time-2">
                    <label>{HtmlParser(message)}</label>
                </div>
            )
        );
    };

    const handleContentChange = (e) => {
        const content = e.currentTarget.innerHTML;
        setValue(content);
    };

    const sendErrand = (e) => {
        if (e !== undefined) e.preventDefault();

        setLoadingErrandWrite(true);
        setTimeout(() => {
            Requests.profile.sendErrand(userData.username, value)
                .then((response) => {
                    console.log(response);
                    if (
                        response.data.status_code ||
                        response.data.status_code === 400 ||
                        response.data.status_code === 404
                    ) {
                        sendAlert("error", response.data.message);
                    } else {
                        setValue("");
                        setAlert("");
                        getErrands(userData.username);
                    }
                })
                .finally(() => {
                    setLoadingErrandWrite(false);
                });
        }, 500);
    };


    const execCommand = (value) => {
        document.execCommand(value);
    }
    return (
        <div className="general-box errands padding-none overflow-hidden margin-top-min height-fit">
            <div className="general-box-header-3 padding-md">
                <label className="gray">
                    {isLoadingUserData && (
                        <>
                            <h5 className="bold">{i18n.t('profile.errands.title', { username: '...' })}</h5>
                            <h6>
                                {i18n.t('profile.errands.smallText', { username: '...' })}
                            </h6>
                        </>
                    )}
                    {!isLoadingUserData && (
                        <>
                            <h5 className="bold">
                                {i18n.t('profile.errands.title', { username: userData.username })}
                            </h5>
                            <h6>
                                {i18n.t('profile.errands.smallText', { username: userData.username })}
                            </h6>
                        </>
                    )}
                </label>
            </div>
            <div className="general-box-content bg-2 padding-md">
                <div className="errands-area flex-column">
                    {
                        !isLoadingUserData && errands.length > 0 ? (
                            <>
                                {
                                    errands.map((errands, index) => {
                                        return (
                                            <>
                                                <div className="errands-area-box margin-bottom-minm flex">
                                                    <div className="errands-area-box-author-imager">
                                                        <img src={`${config.hotel.avatarImage}?figure=${errands.figure}&direction=2&head_direction=3&gesture=spk&size=s`} style={{ marginTop: '-7px' }} />
                                                    </div>
                                                    <label className="errands-area-box-label flex-column gray">
                                                        <h6 className="fs-12"><a href={`/profile/${errands.username}`} className="no-link bold">{errands.username}</a>&nbsp;|&nbsp;Em {moment.unix(errands.timestamp).format("DD/MM/YYYY HH:mm:ss")}</h6>
                                                        <h5 className="margin-top-minm">{HtmlParser(errands.value)}</h5>
                                                    </label>
                                                    <div className="errands-area-box-actions"></div>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </>
                        ) : (
                            <>
                                {
                                    !isLoadingUserData && userData.isFriends ? (
                                        <>
                                            <div className="errands-area-box-nothing margin-bottom-minm flex padding-min">
                                                <label className="gray margin-auto-left-right">
                                                    {
                                                        myUser.username && userData.username == myUser.username ? (
                                                            <>
                                                                {i18n.t('profile.errands.iNotHaveErrands')}
                                                            </>
                                                        ) : (
                                                            <>
                                                                {i18n.t('profile.errands.notHaveErrands', { username: userData.username })}
                                                            </>
                                                        )
                                                    }
                                                </label>
                                            </div>
                                        </>
                                    ) : (
                                        <></>
                                    )
                                }
                            </>
                        )
                    }
                </div>
                {
                    myUser.username && userData.username == myUser.username ? (
                        <>
                            <div className="flex margin-top-min">
                                <label className="gray flex-column">
                                    <h6 className="fs-12 margin-bottom-minm">
                                        {i18n.t('profile.errands.sendErrandMyself')}
                                    </h6>
                                    <h6 dangerouslySetInnerHTML={{ __html: i18n.t('profile.errands.errandsBox.habboway') }}></h6>
                                </label>
                            </div>
                        </>
                    ) : (
                        <>
                            {
                                userData.isFriends ? (
                                    <>
                                        <div className="send-errand-area flex-column margin-top-md">
                                            <div className="general-contenteditable flex">
                                                <div
                                                    contenteditable="true"
                                                    placeholder={HtmlParser(i18n.t('profile.errands.placeholder', { username: userData.username }))}
                                                    onInput={handleContentChange}
                                                ></div>
                                                <div className="contenteditable-editor flex-column">
                                                    <button className="reset-button bold" onClick={() => execCommand('bold')}>B</button>
                                                    <button className="reset-button italic" onClick={() => execCommand('italic')}>I</button>
                                                    <button className="reset-button underline" onClick={() => execCommand('underline')}>U</button>
                                                </div>
                                            </div>
                                            <button onClick={sendErrand} className={`${config.cmsStyles.buttonsClass} send-errand-button`} style={{ width: "100%", height: "40px" }}>
                                                <label className="white margin-auto">
                                                    <h5>{HtmlParser(i18n.t('profile.errands.sendErrand', { username: userData.username }))}</h5>
                                                </label>
                                            </button>
                                            <div class="send-errand-area-warn">{alert}</div>
                                            <br />
                                            <h6 dangerouslySetInnerHTML={{ __html: i18n.t('profile.errands.errandsBox.habboway') }}></h6>
                                        </div>

                                    </>
                                ) : (
                                    <>
                                        <div className="send-errand-area-nofriends">
                                            <label className="gray">
                                                {HtmlParser(i18n.t('profile.errands.sendErrandAreaNotFriends', { username: userData.username }))}
                                            </label>
                                        </div>
                                    </>
                                )
                            }
                        </>
                    )
                }
            </div>
        </div>

    )
}

export default MessagesReceived;
