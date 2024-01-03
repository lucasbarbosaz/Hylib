import { Link } from "react-router-dom";
import { i18n } from "../../../translate/i18n";

const TabNavigationPhotos = ({ name, visited, changePage }) => {
    
    return (
        <>
        {visited ? (
            <p className="another-header-menu-option visited">
                <label>{i18n.t(`photos.pages.${name}.title`)}</label>
            </p>
        ) : (
            <Link
                className="another-header-menu-option"
                onClick={() => changePage(name)}
            >
                <label>{i18n.t(`photos.pages.${name}.title`)}</label>
            </Link>
        )}
        <separator></separator>
        </>
    );
};

export default TabNavigationPhotos;
