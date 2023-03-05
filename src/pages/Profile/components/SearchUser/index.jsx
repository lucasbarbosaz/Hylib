/* eslint-disable no-unused-expressions */
import React from "react";
import Header from '../../../../components/Header';
import StoreContext from "../../../../store/Context";

const SearchUser = ({ equalsToLoggedUser, onChange, onClickSearchUser }) => {
    const { config } = React.useContext(StoreContext);

    return (
        <div className='container flex-column margin-bottom-min'>
            <div className='content'>
                <Header visited={equalsToLoggedUser ? 'home' : null} />
                <div className='another-header-menu'>
                    <div className='webcenter' style={{justifyContent: 'center'}}>
                        <div className='another-header-menu-icon profile-page-search-icon'>
                            <icon name='search'></icon>
                        </div>
                        <div className='flex' style={{ alignItems: 'center' }}>
                            <input
                                type='text'
                                placeholder='Pesquisar perfil de usuário'
                                onChange={onChange}
                                className='profile-page-search-input'
                            ></input>
                            <button
                                className={`${config.cmsStyles.buttonsClass} margin-left-min profile-page-search-btn`}
                                onClick={onClickSearchUser}
                            >
                                <label class='margin-auto white'>Procurar</label>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchUser;
