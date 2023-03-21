import { useContext } from 'react';
import StoreContext from '../../../store/Context';
import { i18n } from '../../../translate/i18n';

const CardRecover = ({ isLoggingIn, setCurrentTab }) => {
    const { config } = useContext(StoreContext);

    const submitRecover = (e) => {
        //implements here
    };

    const changeTab = (e) => {
        e.preventDefault();
        setCurrentTab('login');
    };

    return (
        <form
            onSubmit={(e) => submitRecover(e)}
            className='lgn-area general-box flex-column margin-top-md'
        >
            <div
                className='general-header-box flex'
                style={{ background: `${config.cmsStyles.cardLoginHex}` }}
            >
                <div className='flex margin-auto-top-bottom margin-right-min'>
                    <icon name='pad'></icon>
                </div>
                <label className='white flex-column'>
                    <h4 className='bold'>{i18n.t('index.recover.title')}</h4>
                    <h5>{i18n.t('index.recover.smallText')}</h5>
                </label>
            </div>
            <div className='width-content flex inputs-login margin-bottom-min'>
                <icon name='lock-big'></icon>
                <input
                    type='text'
                    name='identification'
                    placeholder={i18n.t('index.recover.placeholders.recoverInput')}
                    className='border-none'
                />
            </div>
            <div className='width-content flex inputs-login flex'>
                <div
                    className='flex'
                    style={{
                        alignItems: 'flex-end',
                        width: '100%',
                    }}
                >
                    <a href='/' onClick={changeTab}>
                        {i18n.t('index.recover.buttonBack')}
                    </a>
                </div>
                <button
                    type='submit'
                    className={`lgn-button ${config.cmsStyles.buttonsClass} transition-disabled margin-left-min`}
                    style={{ minWidth: '120px', height: '45px' }}
                    disabled={isLoggingIn}
                >
                    <label className='margin-auto white'>
                        {isLoggingIn === false ? (
                            <h5 className='bold fs-14 uppercase'>
                                {i18n.t('index.recover.recoverButton')}
                            </h5>
                        ) : (
                            <>
                                <h5 className='bold fs-14 uppercase'> </h5>
                                <div className='loader-ellipsis pointer-none'>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </>
                        )}
                    </label>
                </button>
            </div>
        </form>
    );
};

export default CardRecover;
