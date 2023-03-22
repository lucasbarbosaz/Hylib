import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Head from '../../components/Head';
import Header from '../../components/Header';
import Requests from '../../services/Requests';
import { i18n } from "../../translate/i18n";
import StaffTab from './Tabs/Staff';
import Tab from './Tabs/Tab';

const Staff = (props) => {
    const [page, setPage] = useState(
        props.staff ? 'staff' : props.gea ? 'gea' : props.colab ? 'colab' : null
    );

    const changePage = (newPage) => {
        setPage(newPage);
    };

    const [staffs, setStaffs] = useState([]);
    const [gea, setGea] = useState([]);
    const [colab, setColab] = useState([]);

    const getStaffs = async () => {
        const response = await Requests.staff.getStaffs();
        setStaffs(response.data);
    };

    const getRankPages = async () => {
        const response = await Requests.staff.getColab();
        const colabsRank = response.data.filter((rank)=>{
            if(rank.page === "colab"){
                return true
            }
            return false
        })
        const geaRank = response.data.filter((rank)=>{
            if(rank.page === "gea"){
                return true
            }
            return false
        })
        setColab(colabsRank);
        setGea(geaRank)
    };

    useEffect(() => {
        getStaffs();
        getRankPages();
    }, []);

    return (
        <>
            <Head />
            <div className='container flex-column margin-bottom-min'>
                <div className='content'>
                    <Header visited='community' />
                    <div className='another-header-menu'>
                        <div className='webcenter'>
                            <div className='another-header-menu-icon'>
                                <icon name='frank-head'></icon>
                            </div>
                            <div className='flex'>
                                {page === 'staff' ? (
                                    <p className='another-header-menu-option visited'>
                                        <label>{i18n.t('staffs.pages.staff')}</label>
                                    </p>
                                ) : (
                                    <Link
                                        to='/community/staff'
                                        className='another-header-menu-option'
                                        onClick={() => changePage('staff')}
                                    >
                                        <label>{i18n.t('staffs.pages.staff')}</label>
                                    </Link>
                                )}

                                <separator></separator>
                                {page === 'gea' ? (
                                    <p className='another-header-menu-option visited'>
                                        <label>{i18n.t('staffs.pages.gea')}</label>
                                    </p>
                                ) : (
                                    <Link
                                        to='/community/staff/gea'
                                        className='another-header-menu-option'
                                        onClick={() => changePage('gea')}
                                    >
                                        <label>{i18n.t('staffs.pages.gea')}</label>
                                    </Link>
                                )}
                                <separator></separator>
                                {page === 'colab' ? (
                                    <p className='another-header-menu-option visited'>
                                        <label>{i18n.t('staffs.pages.colab')}</label>
                                    </p>
                                ) : (
                                    <Link
                                        to='/community/staff/colab'
                                        className='another-header-menu-option'
                                        onClick={() => changePage('colab')}
                                    >
                                        <label>{i18n.t('staffs.pages.colab')}</label>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {page === 'staff' && <StaffTab ranks={staffs} />}
            {page === 'gea' && <Tab ranks={gea} />}
            {page === 'colab' && <Tab ranks={colab} />}
        </>
    );
};

export default Staff;
