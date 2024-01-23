import React from "react";
import AccountsModal from "../Modals";
import IconSwap from "./IconSwap";
import { i18n } from "../../../../translate/i18n";

const UserHome = ({ isUserDataLoading, user, config, ghostAvatar, getClientButtons }) => {
  const [openPaymentModal, setOpenPaymentModal] = React.useState(false);

  const handleClosePaymentModal = () => {
    setOpenPaymentModal(false);
  };

  const handleOpenPaymentModal = () => {
    setOpenPaymentModal(true);
  };

  const isMobile = window.screen.width <= 480;
  return (
    <>
      <AccountsModal open={openPaymentModal} close={handleClosePaymentModal} />
      {isUserDataLoading && (
        <>
          <div className="display-myhabbo-imager">
            <img alt={`... - ${config.hotel.name}`} src={`${ghostAvatar}`} />
          </div>
          <label className="white margin-auto-top-bottom margin-left-min">
            <h3 className="bold">...</h3>
            <h6>...</h6>
          </label>
          <div className="margin-auto-left margin-right-md">{getClientButtons()}</div>
        </>
      )}
      {!isUserDataLoading && (
        <>
          <div className="display-myhabbo-imager">
            <img
              alt={`${user.username} - ${config.hotel.name}`}
              src={`${config.hotel.avatarImage}?figure=${user.figure}&gesture=sml`}
            />
          </div>
          <div className="display-myhabbo-texts">
            <h3 className="bold">{user.username}</h3>
            <h6>{user.motto}</h6>
          </div>
          <div className="margin-auto-left margin-right-md flex-column justify-content-around">
            <div className="quick-actions">
              <div className="btn-change-accounts" onClick={handleOpenPaymentModal}>
                <IconSwap />
                {isMobile ? null : <div>{i18n.t('home.multipleAccounts.button')}</div>}
              </div>
            </div>
            {getClientButtons()}
          </div>
        </>
      )}
    </>
  );
};

export default UserHome;
