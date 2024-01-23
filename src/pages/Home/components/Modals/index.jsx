import { IconButton, Modal, Slide } from "@material-ui/core";
import { IoMdClose } from "react-icons/io";
import React, { useEffect, useState } from "react";
import StoreContext from "../../../../store/Context";
import {
  ModalBody,
  ModalContent,
  ModalDialog,
  ModalFooter,
  ModalHeader,
} from "../../../../components/Modal/styles";
import CardLogin from "../../../Index/components/CardLogin";
import CardRecover from "../../../Index/components/CardRecover";
import CardPin from "../../../Index/components/CardPin";
import AuthService from "../../../../services/AuthService";

const AccountsModal = (props) => {
  const { config, user, setUser, setToken } = React.useContext(StoreContext);
  const [users, setUsers] = React.useState([]);

  const [currentTab, setCurrentTab] = useState("login");
  const [alert, setAlert] = useState(null);

  const [isLoggingIn, setLoggingIn] = useState(false);

  const timeout = config.dev[0] ? (config.dev[0].timeout ? config.dev[0].timeout : 0) : 0;

  const { open, close } = props;

  useEffect(() => {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(users);
  }, [user?.id]);

  const handleSelectUser = (user, token) => {
    authenticate(token, user);
  };

  const authenticate = (token, user) => {
    AuthService.setupAxiosHeaders(token);
    setToken(token);
    setUser(user);

    window.location.reload();
  };

  const renderAccounts = () => {
    return users.map((item, index) => {
      const isCurrentAccount = item.user.id === user.id;
      return (
        <div key={index} className="account-card">
          <div className="account-card-infos">
            <img
              alt={`${item.user.username} - ${config.hotel.name}`}
              src={`${config.hotel.avatarImage}?figure=${item.user.figure}&gesture=sml`}
            />
            <div className="flex">
              <icon name="display-identity" className="margin-right-minm"></icon>
              {item.user.username}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            {isCurrentAccount ? (
              <div
                className={`${config.cmsStyles.buttonsClass} margin-auto-left margin-auto-top-bottom no-link btn-select-user-disabled`}
              >
                <label className="margin-auto white">Conta atual</label>
              </div>
            ) : (
              <div
                className={`${config.cmsStyles.buttonsClass} margin-auto-left margin-auto-top-bottom no-link btn-select-user`}
                onClick={() => handleSelectUser(item.user, item.token)}
              >
                <label className="margin-auto white">Entrar como {item.user.username}</label>
              </div>
            )}
          </div>
        </div>
      );
    });
  };

  const renderLoginCard = () => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "10px 0",
        }}
      >
        {renderTab()}
      </div>
    );
  };

  function renderTab() {
    if (currentTab === "login") {
      return (
        <CardLogin
          isLoggingIn={isLoggingIn}
          timeout={timeout}
          config={config}
          setCurrentTab={setCurrentTab}
          setLoggingIn={setLoggingIn}
          setAlert={setAlert}
          isReduced={true}
        />
      );
    }
    if (currentTab === "recover-pw") {
      return (
        <CardRecover
          isLoggingIn={isLoggingIn}
          config={config}
          setCurrentTab={setCurrentTab}
          setAlert={setAlert}
        />
      );
    }
    return <CardPin isLoggingIn={isLoggingIn} setLoggingIn={setLoggingIn} setAlert={setAlert} />;
  }

  return (
    <>
      <Modal
        open={open}
        timeout={300}
        transition={Slide}
        transitionProps={{ direction: "down" }}
        onClose={close}
      >
        <ModalDialog maxWidth={1300}>
          <ModalContent
            style={{
              margin: "0 auto",
              width: "70%",
            }}
          >
            <ModalHeader
              style={{
                justifyContent: "center",
                alignItems: "center",
                fontSize: "16px",
                textTransform: "uppercase",
                fontWeight: "bold",
              }}
            >
              Alternar contas
              <IconButton
                aria-label="close"
                size="small"
                onClick={close}
                style={{
                  position: "absolute",
                  top: "12px",
                  right: "10px",
                }}
              >
                <IoMdClose />
              </IconButton>
            </ModalHeader>

            <ModalBody>
              <div className="accounts-body-modal">
                <h3>
                  Gerencie facilmente suas múltiplas contas em um só lugar! Conecte e alterne entre contas com
                  praticidade para uma experiência personalizada. Navegue sem esforço entre as suas contas com
                  a nossa nova funcionalidade. <b>Experimente agora!</b>
                </h3>
                {renderAccounts()}
                {renderLoginCard()}
                {alert && (
                  <div className="alert-login-ingame" role="alert">
                    {alert}
                  </div>
                )}
              </div>
            </ModalBody>

            <ModalFooter>
              <div
                className={`${config.cmsStyles.buttonsClass} margin-auto-left margin-auto-top-bottom no-link`}
                onClick={close}
                style={{ width: "205px", height: "40px", left: "-1px", fontSize: "13px" }}
              >
                <label className="margin-auto white">Deixar pra lá</label>
              </div>
            </ModalFooter>
          </ModalContent>
        </ModalDialog>
      </Modal>
    </>
  );
};

export default AccountsModal;
