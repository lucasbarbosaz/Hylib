import React from 'react';
import { Link } from "react-router-dom";
import useInterval from '../../utils/useInterval';

const SliderNews = ({ news, key }) => {

    const [currentNewsIndex, setCurrentNewsIndex] = React.useState(0);
    const [active, setActive] = React.useState(false);
    const [activeTwo, setActiveTwo] = React.useState(false);
    const [activeThree, setActiveThree] = React.useState(false);


    const handlePreviousNews = () => {
        let newValue = currentNewsIndex > 0 ? currentNewsIndex - 1 : news.length - 1;
        console.log(currentNewsIndex);
        setCurrentNewsIndex(newValue);
    }
    const handleNextNews = () => {
        
        let newValue = currentNewsIndex < news.length - 1 ? currentNewsIndex + 1 : 0;

        if (currentNewsIndex === 0) {
            setActiveThree(false);
            setActive(true);
        } else if (currentNewsIndex === 1) {
            setActive(false);
            setActiveTwo(true);
        } else if (currentNewsIndex === 2) {
            setActiveTwo(false);
            setActiveThree(true);
        }
        setCurrentNewsIndex(newValue);
    }

    


    useInterval(() => {
        handleNextNews();
    }, 8000);

    return (
        <>
            <div className="last-articles-slides-controller flex" key={news[currentNewsIndex]}>
                <a data-slide-eq="0" onClick={handleNextNews} className={active === true ? 'active' : ''}></a>
                <a data-slide-eq="1" onClick={handleNextNews} className={activeTwo === true ? 'active' : ''}></a>
                <a data-slide-eq="2" onClick={handleNextNews} className={activeThree === true ? 'active' : ''}></a>
            </div>
            <Link to={`/news/${news[currentNewsIndex]?.id}`} className="last-articles-slide pd-4 no-link show" style={{ backgroundImage: `url(${news[currentNewsIndex]?.image})` }} key={news[currentNewsIndex]}>
                <label className="color-1 flex-column pointer-none" style={{ maxWidth: "calc(100% - 50px)" }}>
                    <h3 className="bold mr-bottom-1">{news[currentNewsIndex]?.title}</h3>
                    <h6>{news[currentNewsIndex]?.shortstory}</h6>
                </label>
            </Link>
        </>
    )
}

export default SliderNews;