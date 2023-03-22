import axios from "axios";
import moment from 'moment';
import { Fragment, useContext, useEffect, useState } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Link, useHistory, useParams } from 'react-router-dom';
import Bottom from '../../components/Bottom';
import Footer from '../../components/Footer';
import Head from '../../components/Head';
import Header from '../../components/Header';
import { i18n } from "../../translate/i18n";
import { scrollToTop } from '../../utils/utils';

import StoreContext from '../../store/Context';

const Articles = (props) => {
    const { config, user } = useContext(StoreContext);
    const history = useHistory();

    const { id } = useParams();

    const [isLoadingCurrentNews, setLoadingCurrentNews] = useState(true);
    const [isLoadingGetComments, setLoadingGetComments] = useState(false);
    const [isLoadingCommentWrite, setLoadingCommentWrite] = useState(false);

    const [isLoadingLikes, setLoadingLikes] = useState(false);

    const [currentNews, setCurrentNews] = useState(null);
    const [newsIndex, setNewsIndex] = useState([]);
    const [like, setLikes] = useState([]);
    const [comments, setComments] = useState([]);
    const [value, setValue] = useState('');
    const [alert, setAlert] = useState(null);

    const sendAlert = (severity, message) => {
        setAlert(
            severity === null || message === null ? null : (
                <div class='general-warn-time-2'>
                    <label>{ReactHtmlParser(message)}</label>
                </div>
            )
        );
    };

    const getNewsIndex = () => {
        setTimeout(() => {
            axios.get(`${config.apiUrl}/article-index`)
                .then(response => {
                    setNewsIndex(response.data);
                })
                .catch(error => {
                    console.log(error)
                })
                .finally(() => {
                })
        }, config.dev.timeout);
    }

    const getNews = (id) => {
        scrollToTop();

        let validId = id == parseInt(id);
        if (!validId) {
            history.push('/');
        }

        setLoadingCurrentNews(true)
        setTimeout(() => {
            axios.get(`${config.apiUrl}/${validId ? 'news' : 'news_lastest'}`, { params: validId ? { id } : {} })
                .then(response => {
                    if (response.data.status_code === 400 || response.data.status_code === 404) {
                        setCurrentNews(null);
                        history.push('/');
                    } else {
                        setCurrentNews(response.data);
                    }
                })
                .catch(error => {
                    console.log(error)
                })
                .finally(() => {
                    setLoadingCurrentNews(false)
                })
        }, config.dev.timeout);
    }

    const getLikes = (id) => {
        let validId = id == parseInt(id);
        if (!validId) {
            history.push('/');
        }

        setLoadingLikes(true);

        setTimeout(() => {
            axios.get(`${config.apiUrl}/get-like-news`, { params: validId ? { id } : {} })
                .then(response => {
                    setLikes(response.data);
                })
                .catch(error => {
                    console.log(error)
                })
                .finally(() => {
                    setLoadingLikes(false);
                })

        }, config.dev.timeout);
    }

    const getComments = (id) => {
        let validId = id == parseInt(id);
        if (!validId) {
            history.push('/');
        }

        setLoadingGetComments(true);

        setTimeout(() => {
            axios.get(`${config.apiUrl}/get-comments-from-news`, { params: validId ? { id } : {} })
                .then(response => {
                    setComments(response.data);
                })
                .catch(error => {
                    console.log(error)
                })
                .finally(() => {
                    setLoadingGetComments(false);
                })

        }, config.dev.timeout);
    }

    const sendLike = (e) => {
        if (e !== undefined) e.preventDefault();

        setLoadingLikes(true);
        setTimeout(() => {
            axios.post(`${config.apiUrl}/send-like`, { id })
                .then(response => {
                    if (response.data.status_code || response.data.status_code === 400 || response.data.status_code === 404) {
                        sendAlert('error', response.data.message)
                    } else {
                        getLikes(id);
                    }
                }).finally(() => {
                    setLoadingLikes(false);
                })
        }, 500)
    }

    const sendComment = (e) => {
        if (e !== undefined) e.preventDefault();

        setLoadingCommentWrite(true);
        setTimeout(() => {
            axios.post(`${config.apiUrl}/send-comment`, { id, value })
                .then(response => {
                    if (response.data.status_code || response.data.status_code === 400 || response.data.status_code === 404) {
                        sendAlert('error', response.data.message)
                    } else {
                        setValue("");
                        setAlert(null);
                        getComments(id);
                    }
                }).finally(() => {
                    setLoadingCommentWrite(false);
                })
        }, 500)
    }


    useEffect(() => {
        getNews(id);
        getComments(id);
        getLikes(id);
    }, [id]);

    useEffect(() => {
        scrollToTop();
        getNewsIndex();
    }, []);

    return (
        <>
            <Head />
            <Header visited='articles' />
            <div className='webcenter flex'>
                <div className='col-12 mr-right-3 mr-auto-left'>
                    <div className='general-box-3 height-auto overflow-hidden pd-none'>
                        <div className='general-box-header flex'>
                            <div className='general-box-header-icon'>
                                <icon name='plus-magic' className='flex mr-auto'></icon>
                            </div>
                            <label className='color-4 flex-column'>
                                <h4 className='bold'>{i18n.t('articles.othersArticles.title')}</h4>
                                <h6>{i18n.t('articles.othersArticles.smallText')}</h6>
                            </label>
                        </div>
                        <div className='general-box-content flex-column'>
                            {newsIndex.length > 0 &&
                                newsIndex.map((item, index) => {
                                    return (
                                        <>
                                            <Fragment key={index}>
                                                <div className='others-articles-separator'>
                                                    {item.section}
                                                </div>
                                                <div className='others-articles-boxes'>
                                                    {item.news.map((news) => {
                                                        return (
                                                            <Link
                                                                to={`/news/${news.id}`}
                                                                place="<?= $result_others_articles['title'] . ' - ' . HOTELNAME; ?>"
                                                                className='other-aticle-box no-link'
                                                                style={{
                                                                    backgroundImage: `url(${news?.image})`,
                                                                    backgroundColor:
                                                                        'rgb(114 73 173)',
                                                                }}
                                                                key={news.id}
                                                            >
                                                                <div
                                                                    className={`other-article-indicator pointer-none ${currentNews?.id === news?.id
                                                                            ? 'visited'
                                                                            : ''
                                                                        }`}
                                                                ></div>
                                                                <label className='width-content mr-auto-top-bottom text-nowrap color-1 pointer-none'>
                                                                    <h5 className='bold text-nowrap'>
                                                                        {news?.rascunho === true ? (
                                                                            <span
                                                                                style={{
                                                                                    color: 'red',
                                                                                }}
                                                                            >
                                                                                {news?.title}
                                                                            </span>
                                                                        ) : (
                                                                            news.title
                                                                        )}
                                                                    </h5>
                                                                    <h6 className='text-nowrap fs-11'>
                                                                        {news?.shortstory}
                                                                    </h6>
                                                                </label>
                                                            </Link>
                                                        );
                                                    })}
                                                </div>
                                            </Fragment>
                                        </>
                                    );
                                })}
                        </div>
                    </div>
                </div>
                <div className='col-11 flex-column mr-auto-right'>
                    <div className='news-article general-box pd-none overflow-hidden'>
                        <div
                            className='news-article-head flex'
                            style={{
                                background: `linear-gradient(to right, ${!isLoadingCurrentNews && currentNews !== null
                                        ? currentNews?.hex
                                        : '#B1D4EB'
                                    } 70%, #00000000), url(${!isLoadingCurrentNews && currentNews !== null
                                        ? currentNews?.image
                                        : ''
                                    }) right center no-repeat`,
                            }}
                        >
                            <label className='color-1 flex-column mr-auto-top-bottom'>
                                {isLoadingCurrentNews ? (
                                    <>
                                        <h4 className='bold'>...</h4>
                                        <h5>...................</h5>
                                    </>
                                ) : (
                                    <>
                                        <h4 className='bold'>
                                            {currentNews !== null ? currentNews?.title : ''}
                                        </h4>
                                        <h5>
                                            {currentNews !== null ? currentNews?.shortstory : ''}{' '}
                                        </h5>
                                    </>
                                )}
                            </label>
                        </div>
                        <div className='news-article-body'>
                            {currentNews !== null ? ReactHtmlParser(currentNews?.longstory) : ''}
                        </div>
                        <div className='article-body-author flex'>
                            <div className='article-body-author-imager'>
                                {isLoadingCurrentNews ? (
                                    <img
                                        alt='avatar img'
                                        src={`${config.hotel.avatarImage}?figure=ghost&action=wav&direction=2&head_direction=3&gesture=sml&size=n&img_format=png&frame=0&headonly=0`}
                                    />
                                ) : currentNews !== null ? (
                                    <img
                                        alt='avatar img'
                                        src={`${config.hotel.avatarImage}?figure=${currentNews?.figure}&action=wav&direction=2&head_direction=3&gesture=sml&size=n&img_format=png&frame=0&headonly=0`}
                                    />
                                ) : (
                                    ''
                                )}
                            </div>
                            <label className='color-5 flex- mr-auto-top-bottom flex-column'>
                                {isLoadingCurrentNews ? (
                                    <>
                                        <h5>{i18n.t('articles.footerArticle.author')} ...</h5>
                                        <h6 className='mr-top-1'>
                                            {i18n.t('articles.footerArticle.date')} <b>...</b>
                                        </h6>
                                    </>
                                ) : (
                                    <>
                                        <h5>
                                            Publicada por:{' '}
                                            <Link
                                                to={`/profile/${currentNews?.username}`}
                                                className='no-link bold'
                                            >
                                                {currentNews?.username}
                                            </Link>
                                        </h5>
                                        <h6 className='mr-top-1'>
                                            Em{' '}
                                            <b>
                                                {moment
                                                    .unix(currentNews?.date)
                                                    .format('DD/MM/YYYY HH:mm:ss')}
                                            </b>
                                        </h6>
                                    </>
                                )}
                            </label>
                        </div>
                        <div className='news-article-footer flex pd-2'>
                            <div className='news-article-like flex-column mr-auto-left mr-right-1'>
                                {isLoadingLikes && user !== null ? (
                                    <>
                                        <button
                                            className='reset-button flex mr-auto'
                                            disabled={true}
                                        >
                                            <icon name='heart-big-noborder'></icon>
                                        </button>
                                        <h5 className='mr-auto-top mr-auto-left-right text-center'>
                                            ... like
                                        </h5>
                                    </>
                                ) : !isLoadingLikes && user !== null ? (
                                    <>
                                        <button
                                            className='reset-button flex mr-auto'
                                            disabled={isLoadingLikes}
                                            onClick={sendLike}
                                        >
                                            <icon
                                                name={
                                                    like.like > 0
                                                        ? 'heart-big'
                                                        : 'heart-big-noborder'
                                                }
                                            ></icon>
                                        </button>
                                        <h5 className='mr-auto-top mr-auto-left-right text-center'>
                                            {like.like <= 1
                                                ? like.like + ' like'
                                                : like.like + ' likes'}
                                        </h5>
                                    </>
                                ) : user === null ? (
                                    <>
                                        <div className='flex mr-auto'>
                                            <icon name='heart-big-noborder'></icon>
                                        </div>
                                        <h5 className='mr-auto-top mr-auto-left-right text-center'>
                                            {like.like <= 1
                                                ? like.like + ' like'
                                                : like.like + ' likes'}
                                        </h5>
                                    </>
                                ) : (
                                    <></>
                                )}
                            </div>
                        </div>
                    </div>
                    {!isLoadingCurrentNews &&
                        currentNews?.commentsEnabled === true &&
                        user !== null ? (
                        <>
                            <form method='POST' onSubmit={sendComment}>
                                <div className='article-comments flex-column mr-top-1'>
                                    <div className='article-send-comment general-box flex-column pd-none overflow-hidden'>
                                        <div className='flex pd-1'>
                                            <div className='article-send-comment-habbo'>
                                                <img
                                                    alt='avatar img'
                                                    src={`${config.hotel.avatarImage}?figure=${user?.figure}&action=wlk,crr=667direction=2&head_direction=3&gesture=sml&size=n&img_format=png&frame=0&headonly=0`}
                                                />
                                            </div>
                                            <div className='general-contenteditable flex'>
                                                <textarea
                                                    contenteditable='true'
                                                    placeholder={i18n.t('articles.comments.placeholders.writeComment')}
                                                    value={value}
                                                    onChange={(e) => setValue(e.target.value)}
                                                ></textarea>
                                            </div>
                                            <div className='article-send-comment-button'>
                                                <button
                                                    type='submit'
                                                    disabled={isLoadingCommentWrite}
                                                >
                                                    {i18n.t('articles.comments.button')}
                                                </button>
                                            </div>
                                        </div>
                                        <div class='send-comment-warn'>{alert}</div>
                                    </div>
                                </div>
                            </form>
                        </>
                    ) : !isLoadingCurrentNews &&
                        user !== null &&
                        currentNews?.commentsEnabled === false ? (
                        <>
                            <div className='article-comments flex-column mr-top-1'>
                                <div className='general-box article-comments-disabled flex height-auto mr-top-1'>
                                    <label className='color-1'>
                                        <h3 className='bold'>
                                            {i18n.t('articles.comments.disabledComments.title')}
                                        </h3>
                                        <h5>
                                            {i18n.t('articles.comments.disabledComments.smallText')}
                                        </h5>
                                    </label>
                                </div>
                            </div>
                        </>
                    ) : (
                        <></>
                    )}

                    {isLoadingGetComments &&
                        currentNews?.commentsEnabled === true &&
                        comments.length > 0 ? (
                        <>
                            <div className='article-comments-area flex-column'>
                                <div className='article-comment-box flex general-box mr-top-1'>
                                    <div className='article-comment-author-habbo mr-right-2'>
                                        <img
                                            alt='avatar img'
                                            width='33px'
                                            height='56px'
                                            src={`${config.hotel.avatarImage}?figure=ghost&aaction=wlk,crr=667direction=2&head_direction=3&gesture=sml&size=n&img_format=png&frame=0&headonly=0`}
                                            className='mr-auto-left-right'
                                        />
                                    </div>
                                    <label className='color-4 mr-auto-top-bottom'>
                                        <h5>...</h5>
                                        <h6 className='fs-10 mr-top-1'>{i18n.t('articles.comments.commentOwner')} ...</h6>
                                    </label>
                                </div>
                            </div>
                        </>
                    ) : !isLoadingGetComments &&
                        currentNews?.commentsEnabled === true &&
                        comments.length > 0 ? (
                        <>
                            <div className='article-comments-area flex-column'>
                                {comments.map((player, index) => {
                                    return (
                                        <>
                                            <div
                                                className='article-comment-box flex general-box mr-top-1'
                                                key={index}
                                            >
                                                <div className='article-comment-author-habbo mr-right-2'>
                                                    <img
                                                        alt='avatar img'
                                                        width='33px'
                                                        height='56px'
                                                        src={`${config.hotel.avatarImage}?figure=${player.figure}&aaction=wlk,crr=667direction=2&head_direction=3&gesture=sml&size=n&img_format=png&frame=0&headonly=0`}
                                                        className='mr-auto-left-right'
                                                    />
                                                </div>
                                                <label className='color-4 mr-auto-top-bottom'>
                                                    <h5>{player.value}</h5>
                                                    <h6 className='fs-10 mr-top-1'>
                                                        {i18n.t('articles.comments.commentOwner')}{' '}
                                                        <Link
                                                            to={`/profile/${player.username}`}
                                                            className='no-link bold'
                                                        >
                                                            {player.username}
                                                        </Link>{' '}
                                                        {i18n.t('articles.comments.date')}{' '}
                                                        <b>
                                                            {moment
                                                                .unix(player?.timestamp)
                                                                .format('HH:mm:ss DD/MM/YYYY ')}
                                                        </b>
                                                    </h6>
                                                </label>
                                            </div>
                                        </>
                                    );
                                })}
                            </div>
                        </>
                    ) : (
                        <></>
                    )}
                    <Footer />
                </div>
            </div>
            <Bottom />
        </>
    );
};

export default Articles;
