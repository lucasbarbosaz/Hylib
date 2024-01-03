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
                        backgroundColor: "#10ac84"
                    }}>
                        <IconButton aria-label="close" size="small" onClick={close} style={{
                            color: "#FFF",
                            left: "335px"
                        }}>
                            <IoMdClose />
                        </IconButton>
                        <ModalBody>
                            <img className="anim-approved" src={`https://i.imgur.com/0F2Bb6k.png`} style={{ width: "100px", margin: "auto", display: "block" }} />

                            <h3 style={{ textAlign: 'center', color: "#FFF", top: '10px' }}>Sucesso!</h3>
                            <p style={{ textAlign: 'center', color: "#FFF", top: '10px' }}>Seu pagamento foi concluído e suas recompensas foram entregues.</p>
                        </ModalBody>
                    </ModalContent>
                </ModalDialog>
            </Modal>
        </>
    )
}

export default ApprovedModal;
