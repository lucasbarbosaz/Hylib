import Modal from '../../Modal';
import { ModalBody, ModalContent, ModalDialog, ModalFooter, ModalHeader } from "../../Modal/styles";
import { IconButton, Slide } from "@material-ui/core";
import { IoMdClose } from "react-icons/io";
import copy from "copy-to-clipboard";
import StoreContext from "../../../store/Context";
import React from 'react';

//vips QRCODE
import supervip from "../../../assets/img/pagamentos/vip/15reais.png";

//diamantes QRCODE
import coins_diamond_new1 from "../../../assets/img/pagamentos/diamante/160reais.png";
import coins_diamond_new2 from "../../../assets/img/pagamentos/diamante/210reais.png";

import coins_diamond_1 from "../../../assets/img/pagamentos/diamante/sessentamil.png";
import coins_diamond_2 from "../../../assets/img/pagamentos/diamante/quarentacincomil.png";
import coins_diamond_3 from "../../../assets/img/pagamentos/diamante/trintacincomil.png";
import coins_diamond_4 from "../../../assets/img/pagamentos/diamante/vintecincomil.png";
import coins_diamond_5 from "../../../assets/img/pagamentos/diamante/quinzemil.png";
import coins_diamond_6 from "../../../assets/img/pagamentos/diamante/oitomil.png";

//duckets QRCODE
import coins_ducket_1 from "../../../assets/img/pagamentos/duckets/sessentareais.png";
import coins_ducket_2 from "../../../assets/img/pagamentos/duckets/quarentareais.png";
import coins_ducket_3 from "../../../assets/img/pagamentos/duckets/trintareais.png";
import coins_ducket_4 from "../../../assets/img/pagamentos/duckets/vintecincoreais.png";
import coins_ducket_5 from "../../../assets/img/pagamentos/duckets/vintereais.png";
import coins_ducket_6 from "../../../assets/img/pagamentos/duckets/quinzereais.png";
import coins_ducket_7 from "../../../assets/img/pagamentos/duckets/oitoreais.png";

//seasonal QRCODE
import coins_seasonal_1 from "../../../assets/img/pagamentos/seasonal/20reais.png";
import coins_seasonal_2 from "../../../assets/img/pagamentos/seasonal/35reais.png";
import coins_seasonal_3 from "../../../assets/img/pagamentos/seasonal/50reais.png";
import coins_seasonal_4 from "../../../assets/img/pagamentos/seasonal/70reais.png";
import coins_seasonal_5 from "../../../assets/img/pagamentos/seasonal/90reais.png";

const PaymentModal = (props) => {
    const { config } = React.useContext(StoreContext);

    const { type, open, close } = props;

    const typeToImage = {
        supervip: supervip,
        coins_diamond_1: coins_diamond_1,
        coins_diamond_2: coins_diamond_2,
        coins_diamond_3: coins_diamond_3,
        coins_diamond_4: coins_diamond_4,
        coins_diamond_5: coins_diamond_5,
        coins_diamond_6: coins_diamond_6,
        coins_diamond_new1: coins_diamond_new1,
        coins_diamond_new2: coins_diamond_new2,
        coins_ducket_1: coins_ducket_1,
        coins_ducket_2: coins_ducket_2,
        coins_ducket_3: coins_ducket_3,
        coins_ducket_4: coins_ducket_4,
        coins_ducket_5: coins_ducket_5,
        coins_ducket_6: coins_ducket_6,
        coins_ducket_7: coins_ducket_7,
        coins_seasonal_1: coins_seasonal_1,
        coins_seasonal_2: coins_seasonal_2,
        coins_seasonal_3: coins_seasonal_3,
        coins_seasonal_4: coins_seasonal_4,
        coins_seasonal_5: coins_seasonal_5,
    };

    const image = typeToImage[type];

    return (
        <>
            <Modal open={open} timeout={300} transition={Slide} transitionProps={{ direction: "down" }} onClose={close}>
                <ModalDialog maxWidth={1300}>
                    <ModalContent style={{
                        margin: "0 auto",
                        width: "70%"
                    }}>

                        <ModalHeader style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontSize: '16px',
                            textTransform: 'uppercase',
                            fontWeight: 'bold',
                        }}>
                            Confirme sua compra
                            <IconButton aria-label="close" size="small" onClick={close} style={{
                                position: 'absolute',
                                top: '12px',
                                right: '10px',
                            }}>
                                <IoMdClose />
                            </IconButton>
                        </ModalHeader>


                        <ModalBody>

                            <>
                                <div style={{ margin: "0 40px", display: "flex", justifyContent: "space-between" }}>
                                    <img className='border-pix' src={`${image}`} style={{ width: "270px", display: "block" }} />

                                    <div style={{
                                        maxWidth: "500px",
                                        left: "30px",
                                        margin: "0 35px",
                                        fontSize: "16px"
                                    }}>
                                        <b>Siga as instruções abaixo:</b><br /><br />
                                        1° - Abra o app do seu banco;<br /><br />
                                        2° - Escolha pagar via PIX;<br /><br />
                                        3° - Escaneie o QR Code do pagamento.<br />

                                        <p>Após o pagamento ser efetuado você deverá enviar comprovante para algum membro da staff <strong>Gerente, CEO</strong> ou envie pelo nosso instagram</p>

                                    </div>
                                </div>
                            </>

                        </ModalBody>

                        <ModalFooter>
                            <a className={`${config.cmsStyles.buttonsClass} margin-auto-left margin-auto-top-bottom no-link`} onClick={close} style={{ width: "205px", height: "40px", left: "-1px", fontSize: "13px" }}>
                                <label className="margin-auto white">Deixar pra lá</label>
                            </a>
                        </ModalFooter>

                    </ModalContent>
                </ModalDialog>
            </Modal >
        </>
    )
}

export default PaymentModal;