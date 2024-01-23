import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import ghostAvatar from "../../../assets/img/ghost.png";
import Alert from "../../../components/Alert";
import AuthService from "../../../services/AuthService";
import Requests from "../../../services/Requests";
import StoreContext from "../../../store/Context";
import { i18n } from "../../../translate/i18n";

const CardLogin = ({ setLoggingIn, isLoggingIn, timeout, setCurrentTab, setAlert, isReduced }) => {
  const [figure, setFigure] = useState("");
  const [password, setPassword] = useState("");
  const [identification, setIdentification] = useState("");
  const history = useHistory();

  const { config, setToken, setUser } = useContext(StoreContext);

  const clearForms = () => {
    setIdentification("");
    setPassword("");
  };

  const sendAlert = (severity, message) => {
    setAlert(severity === null || message === null ? null : <Alert message={message} />);
  };

  const authenticate = (token, user) => {
    AuthService.setupAxiosHeaders(token);
    setToken(token);
    setUser(user);
    var users = JSON.parse(localStorage.getItem("users")) || [];

    var currentUser = {
      user: user,
      token: token,
    };

    let userIndex = users.findIndex((item) => item.user.id === user.id);

    if (userIndex === -1) {
      users.push(currentUser);
    } else {
      users[userIndex] = currentUser;
    }

    localStorage.setItem("users", JSON.stringify(users));

    if (isReduced) {
      window.location.reload();
    }

    history.push("/home");
  };

  const submitLogin = (e) => {
    if (e !== undefined) e.preventDefault();

    setLoggingIn(true);
    setTimeout(() => {
      Requests.index
        .submitLogin(identification, password)
        .then((response) => {
          let statusCode = response.data.status_code;
          let message = response.data.message;

          if (statusCode === 200) {
            clearForms();
            authenticate(response.data.token, response.data.user);
          } else if (statusCode === 204) {
            clearForms();
            setCurrentTab("login-pin"); //pin security staff
            return;
          } else {
            sendAlert("error", message);
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoggingIn(false);
        });
    }, 500);
  };

  const onKeyUpValue = (identification) => {
    if (identification.length < 1 || identification.trim() === "") {
      setFigure("");
      return;
    }

    setTimeout(() => {
      Requests.index
        .getFigureUsername(identification)
        .then((response) => {
          let statusCode = response.data.status_code;

          if (statusCode === 200) {
            setFigure(response.data.look);
          } else {
            setFigure("");
          }
        })
        .catch((error) => {
          setFigure("");
          console.log(error);
        })
        .finally(() => {});
    }, timeout);
  };

  return (
    <form onSubmit={(e) => submitLogin(e)} className="lgn-area general-box flex-column margin-top-md">
      <div
        className="general-header-box flex bg-green-500"
        style={{ background: `${config.cmsStyles.cardLoginHex}` }}
      >
        <div className="flex margin-auto-top-bottom margin-right-min">
          <icon name="pad"></icon>
        </div>
        <label className="white flex-column">
          <h4 className="bold">{i18n.t("index.login.title")}</h4>
          <h5>{isReduced ? i18n.t("index.login.smallTextReduced") : i18n.t("index.login.smallText")}</h5>
        </label>
      </div>
      <div className="width-content flex inputs-login margin-bottom-min">
        <div
          className="identification-look"
          style={{
            background: `url(${figure ? figure : ghostAvatar}) -3px -17px / auto no-repeat scroll`,
          }}
        ></div>
        <input
          type="text"
          name="identification"
          placeholder={i18n.t("index.login.placeholders.loginInput")}
          className="border-none"
          onChange={(e) => setIdentification(e.target.value)}
          onKeyUp={(e) => onKeyUpValue(e.target.value)}
        />
      </div>
      <div className="width-content flex inputs-login flex">
        <div className="flex width-content">
          <icon name="lock-big"></icon>
          <input
            type="password"
            name="password"
            placeholder={i18n.t("index.login.placeholders.passwordInput")}
            className="border-none"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className={`lgn-button ${config.cmsStyles.buttonsClass} transition-disabled margin-left-min`}
          style={{ minWidth: "120px", height: "45px" }}
          disabled={isLoggingIn}
        >
          <label className="margin-auto white">
            {isLoggingIn === false ? (
              <h5 className="bold fs-14 uppercase">{i18n.t("index.buttons.login")}</h5>
            ) : (
              <>
                <h5 className="bold fs-14 uppercase"> </h5>
                <div className="loader-ellipsis pointer-none">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </>
            )}
          </label>
        </button>
      </div>
      <a
        href="/"
        onClick={(event) => {
          event.preventDefault();
          setCurrentTab("recover-pw");
        }}
        style={{ margin: "15px 0 5px" }}
      >
        {i18n.t("index.login.forgetPassword")}
      </a>
    </form>
  );
};

export default CardLogin;
