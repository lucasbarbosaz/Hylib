import { Link } from "react-router-dom";
import { i18n } from "../../../translate/i18n";

const TabNavigationItem = ({ rank, visited, changePage }) => {
    
    return (
        <>
        {visited ? (
            <p className="another-header-menu-option visited">
                <label>{i18n.t(`staffs.pages.${rank}`)}</label>
            </p>
        ) : (
            <Link
                className="another-header-menu-option"
                onClick={() => changePage(rank)}
            >
                <label>{i18n.t(`staffs.pages.${rank}`)}</label>
            </Link>
        )}
        <separator></separator>
        </>
    );
};

export default TabNavigationItem;
