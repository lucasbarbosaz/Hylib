import Skeleton from '@material-ui/lab/Skeleton';
import React from 'react';
import { Link } from "react-router-dom";


const NewsMiniCard = (props, { key }) => {

    const { id, title, shortstory, image, loading } = props;

    return (
        <>
            {
                !loading ? (
                    <Link to={`/news/${id}`} place="" className="article-card flex no-link" style={{ backgroundImage: `url(${image})` }} key={key}>
                        <label className="white padding-min margin-auto-top text-nowrap pointer-none flex-column">
                            <h5 className="bold fs-14 text-nowrap margin-auto-top">{title}</h5>
                            <h6 className="fs-12 text-nowrap" >{shortstory}</h6>
                        </label>
                    </Link>
                ) : (
                    <>
                        <Link to="" className="article-card-skeleton flex no-link">
                            <Skeleton animation="wave" variant="rect" width={192} height={79} />
                        </Link>
                    </>
                )
            }

        </>

    )
}

export default NewsMiniCard;