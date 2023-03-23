import { useContext, useState } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import StoreContext from '../../store/Context';
import { i18n } from "../../translate/i18n";

const Footer = (props) => {
    const { config } = useContext(StoreContext);
    const [showLanguages, setShowLanguages] = useState(false);

    const showLanguageOptions = () => {
        setShowLanguages(!showLanguages);
    };

    const changeLanguage = (language) => {
        localStorage.setItem('i18nextLng', language);
        window.location.reload();
    };

    return (
        <>
            <div className='footer margin-top-min'>
                <label className='gray-clear flex'>
                    <h5 dangerouslySetInnerHTML={{ __html: i18n.t('footer.text', { hotelName: config.hotel.name, currentDate: config.currentYear }) }}></h5>
                    <h5 className='margin-auto-left'>
                        {i18n.t('footer.text2')}{' '}
                        <OverlayTrigger
                            placement='top'
                            overlay={<Tooltip>Discord: Laxus#0022</Tooltip>}
                        >
                            <Link to={`/profile/${config.dev.name}`} className='no-link color-4 text-nowrap'>
                                { config.dev.name }
                            </Link>
                        </OverlayTrigger>
                        .
                    </h5>
                </label>
            </div>
            <div className='publicity flex margin-bottom-min'>
                <img alt='banner' src='banner.gif?' width='1' height='1' id='kop' />
                <div className='publicity-content'></div>
                <div className='publicity-label gray'>
                    <h4 className='margin-bottom-minm'>{i18n.t('footer.publicity.title')}</h4>
                    <h6>
                        {i18n.t('footer.publicity.smallText', { hotelName: config.hotel.name })}
                    </h6>
                </div>
                <div className='language-change-div'>
                    <button
                        className='language-change-icon gray-button-1 language-change-btn'
                        onClick={showLanguageOptions}
                    >
                        <img
                            src='https://4.bp.blogspot.com/-LfIyOMLjPJQ/XZVaFtgE9eI/AAAAAAABWaU/5qN67muLbe0l0bvYjYdjsB0DWwv2pBnKQCKgBGAsYHg/s1600/Icon24.png'
                            alt='language'
                        />
                        <h4>{i18n.t('footer.changeLanguage')}</h4>
                    </button>
                    {showLanguages && (
                        <div className='language-change-options'>
                            <ul>
                                <li>
                                    <div
                                        onClick={(e) => {
                                            changeLanguage('pt-BR');
                                        }}
                                        className='language-change-li icon icon-right-open icon'
                                    >
                                        {i18n.t('footer.languages.pt')}
                                    </div>
                                </li>
                                <li>
                                    <div
                                        onClick={(e) => {
                                            changeLanguage('en-US');
                                        }}
                                        className='language-change-li icon icon-right-open icon'
                                    >
                                        {i18n.t('footer.languages.en')}
                                    </div>
                                </li>
                                <li>
                                    <div
                                        onClick={(e) => {
                                            changeLanguage('es');
                                        }}
                                        className='language-change-li icon icon-right-open icon'
                                    >
                                        {i18n.t('footer.languages.es')}
                                    </div>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Footer;
