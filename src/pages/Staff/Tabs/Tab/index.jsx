import CardRank from '../../CardRank';

const Tab = ({ ranks }) => {
    return (
        <div className='webcenter flex-column'>
            <div className='flex'>
                <div className='col-13 flex-column margin-right-min'>
                    {ranks.map((rank) => {
                        return (
                            <CardRank
                                rankName={rank.name}
                                rankDescription={rank.function}
                                players={rank.players}
                                badge={rank.badge}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Tab;
