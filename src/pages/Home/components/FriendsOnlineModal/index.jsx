import React from "react";
import Modal from "../../../../components/Modal";
import { ModalBody, ModalContent, ModalDialog, ModalFooter, ModalHeader } from "../../../../components/Modal/styles";
import { IconButton, Slide } from "@material-ui/core";
import { IoMdClose } from "react-icons/io";
import StoreContext from "../../../../store/Context";
import { Link } from "react-router-dom";

const FriendsOnlineModal = ({
    onlineFriends,
    open,
    close,
}) => {
    const { config } = React.useContext(StoreContext);

    return (
        <>
            <Modal open={open} timeout={300} transition={Slide} transitionProps={{ direction: "down" }} onClose={close}>
                <ModalDialog maxWidth={300}>
                    <ModalContent height="80%">
                        <ModalHeader>
                            Amigos online
                            <IconButton aria-label="close" size="small" onClick={close}>
                                <IoMdClose />
                            </IconButton>
                        </ModalHeader>


                        <ModalBody>

                            {
                                onlineFriends.map((friend) => {
                                    return (
                                        <div className="p-2" key={friend.username}>
                                            <Link to={`/profile/${friend.username}`} style={{ color: "#7267d3", fontWeight: "500" }}>
                                                {friend.username}
                                            </Link>
                                        </div>
                                    )
                                })
                            }

                        </ModalBody>

                        <ModalFooter>
                            <a className={`${config.cmsStyles.buttonsClass} margin-auto-left margin-auto-top-bottom no-link`} onClick={close} style={{ width: "205px", height: "40px", left: "-10px", fontSize: "13px", marginLeft: "auto", marginRight: "auto" }}>
                                <label className="margin-auto white">Fechar</label>
                            </a>
                        </ModalFooter>


                    </ModalContent>
                </ModalDialog>
            </Modal >
        </>
    )
}

export default FriendsOnlineModal;