/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { Link } from "react-router-dom";
import SliderNews from '../../../../components/SliderNews';

const Articles = ({
    isLoadingNews,
    news,
    isLoadingNewsSlider,
    newsSlider,
}) => {
    return (
        <>
            <div className="last-articles-slides">

                {
                    isLoadingNews &&
                    <>
                        <div className="last-articles-slides-controller flex">
                            <a data-slide-eq="0"></a>
                            <a data-slide-eq="1"></a>
                            <a data-slide-eq="2"></a>
                        </div>
                        <Link to={`/news/`} className="last-articles-slide pd-4 no-link show" style={{ backgroundImage: `url()` }}>
                            <label className="color-1 flex-column pointer-none" style={{ maxWidth: "calc(100% - 50px)" }}>
                                <h3 className="bold mr-bottom-1">...</h3>
                                <h6>...</h6>
                            </label>
                        </Link>
                    </>
                }
                {
                    !isLoadingNews && news.length > 0 &&
                    <SliderNews news={news} key={news.map((news, index) => index)} />
                }

            </div>
            <div className="last-articles-slider-list flex-column">
                {
                    isLoadingNewsSlider &&
                    <>
                        <li className="list-none flex">
                            <div className="mr-auto-top-bottom flex-column text-nowrap">
                                <Link to={`/news/`} className="no-link color-4 text-nowrap">
                                    <h5 className="text-nowrap">...</h5>
                                </Link>
                            </div>
                        </li>
                    </>
                }
                {
                    !isLoadingNewsSlider && newsSlider.length > 0 &&
                    newsSlider.map((slider, i) => {
                        return (
                            <li className="list-none flex" key={i}>
                                <div className="mr-auto-top-bottom flex-column text-nowrap">
                                    <Link to={`/news/${slider.id}`} className="no-link color-4 text-nowrap">
                                        <h5 className="text-nowrap">{slider.title}</h5>
                                    </Link>
                                </div>
                            </li>
                        )

                    })
                }


            </div>
        </>
    )
}

export default Articles;