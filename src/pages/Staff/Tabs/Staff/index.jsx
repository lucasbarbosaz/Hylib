import CardRank from '../../CardRank';

const StaffTab = ({ ranks }) => {
    return (
        <div className='webcenter flex-column'>
            <div className='flex'>
                <div className='col-13 flex-column margin-right-min'>
                    {ranks.map((rank) => {
                        if (rank.name === 'Desenvolvedor' || rank.name === 'CEO') return '';
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
                <div className='col-14 flex-column height-fit'>
                    {ranks
                        .map((rank) => {
                            if (rank.name === 'Desenvolvedor' || rank.name === 'CEO') {
                                return (
                                    <CardRank
                                        rankName={rank.name}
                                        rankDescription={rank.function}
                                        players={rank.players}
                                        badge={rank.badge}
                                    />
                                );
                            } else {
                                return '';
                            }
                        })
                        .reverse()}
                </div>
            </div>
        </div>
    );
};

export default StaffTab;
