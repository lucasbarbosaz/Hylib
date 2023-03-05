import { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Alert from '../../components/Alert';
import Bottom from '../../components/Bottom';
import Footer from '../../components/Footer';
import Head from '../../components/Head';
import AuthService from '../../services/AuthService';
import Requests from '../../services/Requests';

import StoreContext from '../../store/Context';
import CardAllBadges from './components/CardAllBadges';
import CardAllGroups from './components/CardAllGroups';
import CardProfile from './components/CardProfile';
import MessagesReceived from './components/MessagesReceived';
import Rooms from './components/Rooms';
import SearchUser from './components/SearchUser';

const Profile = () => {
    const { config, user } = useContext(StoreContext);
    const history = useHistory();

    const { username } = useParams();

    const equalsToLoggedUser = () => {
        return (
            AuthService.isUserLoggedIn() &&
            user?.username?.toLowerCase() === username?.toLowerCase()
        );
    };

    const [countFriends, setCountFriends] = useState([]);
    const [countBadges, setCountBadges] = useState([]);
    const [countRooms, setCountRooms] = useState([]);
    const [countGroups, setCountGroups] = useState([]);

    const [isLoadingCount, setIsLoadingCount] = useState(true);

    const [userData, setUserData] = useState([]);
    const [badgesUsed, setBadgesUsed] = useState([]);
    const [myBadges, setAllBadges] = useState([]);
    const [rooms, setRooms] = useState([]);
    const [groups, setGroups] = useState([]);

    const [isLoadingUserData, setIsLoadingUserData] = useState(true);
    const [isLoadingBadgesUsed, setIsLoadingBadgesUsed] = useState(true);
    const [isLoadingMyBadges, setIsLoadingMyBadges] = useState(true);
    const [isLoadingRooms, setIsLoadingRooms] = useState(true);
    const [isLoadingGroups, setIsLoadingGroups] = useState(true);
    const [usernameSearch, setUsernameSearch] = useState('');
    const [showMsgError, setShowMsgError] = useState(false);

    const getPlayerData = (users) => {
        Requests.profile
            .getPlayerData(users)
            .then((response) => {
                console.log(response);
                if (response.data.status_code) {
                    let statusCode = response.data.status_code;

                    if (statusCode === 401) {
                        user !== null ? history.push('/') : history.push('/');
                        return;
                    } else {
                        setUserData(response.data);
                    }
                } else {
                    setUserData(response.data);
                }
            })
            .finally(() => {
                setIsLoadingUserData(false);
            });
    };

    const getDataCount = (user) => {
        Requests.profile
            .getDataCount(user)
            .then((response) => {
                if (response.data.status_code) {
                    let statusCode = response.data.status_code;

                    if (statusCode === 401) {
                        return;
                    }
                } else {
                    setCountFriends(response.data.profile[0].friends.count);
                    setCountBadges(response.data.profile[1].badges.count);
                    setCountRooms(response.data.profile[2].rooms.count);
                    setCountGroups(response.data.profile[3].groups.count);
                }
            })
            .finally(() => {
                setIsLoadingCount(false);
            });
    };

    const getBadgesUsed = (user) => {
        Requests.profile
            .getBadgesUsed(user)
            .then((response) => {
                if (response.data.status_code) {
                    let statusCode = response.data.status_code;

                    if (statusCode === 401) {
                        return;
                    }
                } else {
                    setBadgesUsed(response?.data);
                }
            })
            .finally(() => {
                setIsLoadingBadgesUsed(false);
            });
    };

    const getAllBadges = (user) => {
        Requests.profile
            .getAllBadges(user)
            .then((response) => {
                if (response.data.status_code) {
                    let statusCode = response.data.status_code;

                    if (statusCode === 401) {
                        return;
                    }
                } else {
                    setAllBadges(response?.data);
                }
            })
            .finally(() => {
                setIsLoadingMyBadges(false);
            });
    };

    const getRooms = (user) => {
        Requests.profile
            .getRooms(user)
            .then((response) => {
                if (response.data.status_code) {
                    let statusCode = response.data.status_code;

                    if (statusCode === 401) {
                        return;
                    }
                } else {
                    setRooms(response.data);
                }
            })
            .finally(() => {
                setIsLoadingRooms(false);
            });
    };

    const getGroups = (user) => {
        Requests.profile
            .getGroups(user)
            .then((response) => {
                if (response.data.status_code) {
                    let statusCode = response.data.status_code;

                    if (statusCode === 401) {
                        return;
                    }
                } else {
                    setGroups(response?.data);
                }
            })
            .finally(() => {
                setIsLoadingGroups(false);
            });
    };

    useEffect(() => {
        setTimeout(() => {
            getPlayerData(username);
        }, config.dev.timeout);

        setTimeout(() => {
            getDataCount(username);
        }, config.dev.timeout);

        setTimeout(() => {
            getBadgesUsed(username);
        }, config.dev.timeout);

        setTimeout(() => {
            getAllBadges(username);
        }, config.dev.timeout);

        setTimeout(() => {
            getRooms(username);
        }, config.dev.timeout);

        setTimeout(() => {
            getGroups(username);
        }, config.dev.timeout);
    }, []);

    const checkUsernameExist = async (username) => {
        setIsLoadingUserData(true)

        if (username === "") return;
        const response = await Requests.profile.getPlayerData(username);
        const statusCode = response.data.status_code;
        if (statusCode) {
            if (statusCode === 401) {
                setIsLoadingUserData(true);
                return false;
            } else {
                setIsLoadingUserData(false);
                return true;
            }
        } else {
            setIsLoadingUserData(true);
            return true;
        }
    };

    const onClickSearchUser = async () => {
        const userExist = await checkUsernameExist(usernameSearch);
        if (userExist) {
            history.push(`/profile/${usernameSearch}`);
            history.go();
        } else {
            setShowMsgError(true);
        }
    };

    return (
        <>
            {showMsgError && <Alert message='Usuário não existe.' />}
            <Head />
            <SearchUser
                equalsToLoggedUser={equalsToLoggedUser()}
                onChange={(e) => setUsernameSearch(e.target.value)}
                onClickSearchUser={onClickSearchUser}
            />
            <div className='webcenter flex-column'>
                <div className='flex-column'>
                    <CardProfile
                        isLoadingUserData={isLoadingUserData}
                        userData={userData}
                        isLoadingCount={isLoadingCount}
                        countFriends={countFriends}
                        config={config}
                        badgesUsed={badgesUsed}
                    />

                    <div className='flex margin-top-min'>
                        <div className='flex-column margin-right-min'>
                            <CardAllBadges
                                userData={userData}
                                isLoadingUserData={isLoadingUserData}
                                isLoadingCount={isLoadingCount}
                                countBadges={countBadges}
                                myBadges={myBadges}
                                config={config}
                            />

                            {/* not finished yet */}
                            <MessagesReceived
                                isLoadingUserData={isLoadingUserData}
                                userData={userData}
                            />
                        </div>
                        <div className='flex-column'>
                            <Rooms
                                isLoadingUserData={isLoadingUserData}
                                userData={userData}
                                rooms={rooms}
                                isLoadingCount={isLoadingCount}
                                countRooms={countRooms}
                                config={config}
                            />

                            <CardAllGroups
                                isLoadingUserData={isLoadingUserData}
                                userData={userData}
                                isLoadingCount={isLoadingCount}
                                countGroups={countGroups}
                                groups={groups}
                                config={config}
                            />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
            <Bottom />
        </>
    );
};

export default Profile;
