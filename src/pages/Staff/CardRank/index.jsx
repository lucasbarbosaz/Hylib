import { useContext } from 'react';
import { Link } from 'react-router-dom';
import StoreContext from '../../../store/Context';

const CardRank = ({ rankName, rankDescription, players, badge }) => {
    const { config } = useContext(StoreContext);

    return (
        <div className='general-box-3 flex-column padding-none margin-bottom-min overflow-hidden'>
            <div className='general-box-header flex'>
                <div className='general-box-header-icon'>
                    <icon
                        name={`badge-db`}
                        className='flex margin-auto'
                        style={{ background: `url(${config.hotel.url}/swf/c_images/album1584/${badge}.gif)` }}
                    ></icon>
                </div>
                <label className='color-4 flex-column text-nowrap mr-auto-top-bottom'>
                    <h4 className='bold text-nowrap'>{rankName}</h4>
                    <h6 className='text-nowrap'>{rankDescription.replace("%hotelName%", config.hotel.name)}</h6>
                </label>
            </div>
            <div className='general-box-content staff flex-column bg-2'>
                {players.length > 0 ? (
                    players.map((player, item) => {
                        return (
                            <div className='display-staff-box flex' key={item}>
                                <div className='display-staff-box-imager'>
                                    <img
                                        alt='miniatura user'
                                        src={`${config.hotel.avatarImage}?figure=${player.figure}&headonly=0&size=n&gesture=sml&direction=2&head_direction=3&action=wav`}
                                    />
                                </div>
                                <label className='flex-column color-4 margin-auto-top-bottom margin-right-min'>
                                    <h5 className='bold fs-14 flex'>
                                        <Link
                                            to={`/profile/${player.username}`}
                                            className='no-link'
                                        >
                                            {player.username}
                                        </Link>
                                        &nbsp;
                                        <span
                                            className='online-status'
                                            enum={player.online === true ? '1' : '0'}
                                        ></span>
                                    </h5>
                                    <h6>
                                        {!player.motto == ''
                                            ? player.motto
                                            : `Faço parte da equipe do ${config.hotel.name}!`}
                                    </h6>
                                </label>
                            </div>
                        );
                    })
                ) : (
                    <div className='display-staff-box flex pd-4'>
                        <label className='color-4'>
                            <h5 className='bold fs-14'>OH BOBBA?!</h5>
                            <h6 className='fs-12'>
                                Parece que ninguém está ocupando esse cargo! Mas fique atento(a)
                                para novas vagas, quem sabe você não ocupe-a.
                            </h6>
                        </label>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CardRank;
