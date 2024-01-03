import Modal from '../../../Modal';
import { ModalBody, ModalContent, ModalDialog, ModalFooter, ModalHeader } from "../../../Modal/styles";
import { IconButton, Slide } from "@material-ui/core";
import { IoMdClose } from "react-icons/io";

const ApprovedModal = (props) => {
    const { open, close } = props;

    return (

        <>
            <Modal open={open} timeout={300} transition={Slide} transitionProps={{ direction: "down" }} onClose={close}>
                <ModalDialog maxWidth={1000}>
                    <ModalContent style={{
                        margin: "0 auto",
                        width: "70%",
                        borderRadius: "10px",
                        top: "100px",
                    }}>
                        <IconButton aria-label="close" size="small" onClick={close} style={{
                            color: "#636e72",
                            left: "335px"
                        }}>
                            <IoMdClose />
                        </IconButton>
                        <ModalBody>
                            <img className="anim-approved" src={`https://i.imgur.com/zRPw1zH.png`} style={{ width: "150px", margin: "auto", display: "block" }} />

                            <h3 style={{ textAlign: 'center', color: "#636e72", top: '10px' }}>OH BOBBA!?!</h3>
                            <p style={{ textAlign: 'center', color: "#636e72", top: '10px' }}>Houve um problema no seu pagamento.</p>
                        </ModalBody>
                    </ModalContent>
                </ModalDialog>
            </Modal>
        </>
    )
}

export default ApprovedModal;
