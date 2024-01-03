import { useContext, useEffect, useState } from "react";
import Head from "../../components/Head";
import Header from "../../components/Header";
import Requests from "../../services/Requests";
import StaffTab from "./Tabs/Staff";
import Tab from "./Tabs/Tab";
import TabNavigationItem from "./TabNavigationItem";
import { i18n } from "../../translate/i18n";
import { Link } from "@material-ui/core";
import StoreContext from "../../store/Context";
import Footer from "../../components/Footer";

const Staff = ({ pageLink }) => {
    const [page, setPage] = useState(pageLink);

    const [staffs, setStaffs] = useState([]);
    const [gea, setGea] = useState([]);
    const [colab, setColab] = useState([]);
    const [radio, setRadio] = useState([]);
    const [creators, setCreators] = useState([]);
    const { config } = useContext(StoreContext);
    const activePages = config.tabsStaff.filter((page) => page.active === true);

    const getStaffs = async () => {
        const response = await Requests.staff.getStaffs();
        setStaffs(response.data);
    };

    const getRankPages = async () => {
        const response = await Requests.staff.getColab();
        const colabsRank = response.data.filter((rank) => {
            if (rank.page === "colab") {
                return true;
            }
            return false;
        });
        const geaRank = response.data.filter((rank) => {
            if (rank.page === "gea") {
                return true;
            }
            return false;
        });
        const radioRank = response.data.filter((rank) => {
            if (rank.page === "radio") {
                return true;
            }
            return false;
        });
        const creatorsRank = response.data.filter((rank) => {
            if (rank.page === "creators") {
                return true;
            }
            return false;
        });
        setColab(colabsRank);
        setGea(geaRank);
        setRadio(radioRank);
        setCreators(creatorsRank);
    };

    const changePage = (newPage) => {
        setPage(newPage);
    };

    useEffect(() => {
        getStaffs();
        getRankPages();
    }, []);

    return (
        <>
            <Head />
            <div className="container flex-column margin-bottom-min">
                <div className="content">
                    <Header visited="community" />
                    <div className="another-header-menu">
                        <div className="webcenter">
                            <div className="another-header-menu-icon">
                                <icon name="frank-head"></icon>
                            </div>
                            <div className="flex">
                                {page === "staff" ? (
                                    <p className="another-header-menu-option visited">
                                        <label>{i18n.t("staffs.pages.staff")}</label>
                                    </p>
                                ) : (
                                    <Link
                                        className="another-header-menu-option"
                                        onClick={() => changePage("staff")}
                                    >
                                        <label>{i18n.t("staffs.pages.staff")}</label>
                                    </Link>
                                )}

                                <separator></separator>
                                {activePages.map((activePage) => {
                                    return (
                                        <TabNavigationItem
                                            rank={activePage.link}
                                            visited={page === activePage.link}
                                            changePage={changePage}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {page === "staff" && <StaffTab ranks={staffs} />}
            {page === "gea" && <Tab ranks={gea} />}
            {page === "colab" && <Tab ranks={colab} />}
            {page === "radio" && <Tab ranks={radio} />}
            {page === "creators" && <Tab ranks={creators} />}
            <Footer />
        </>
    );
};

export default Staff;
