import React from 'react';
import '../components/styles/Result.css';
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";

function Result({
    img,
    location,
    title,
    description,
    star,
    price,
    total,
}) {
    return (
        <div className='Result'>
            <img src={img} alt="" />
            <FavoriteBorderIcon className="Result__heart" />

            <div className='Result__info'>
                <div className="Result__infoTop">
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>____</p>
                    <p>{description}</p>
                </div>

                <div className="Result__infoBottom">
                    <div className="Result__stars">
                        <StarIcon className="Result__star" />
                        <p>
                            <strong>{star}</strong>
                        </p>
                    </div>
                    <div className='Results__price'>
                        <h2>{price}</h2>
                        <p>{total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Result