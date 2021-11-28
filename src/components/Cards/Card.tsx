import React from 'react'
import { useNavigate } from 'react-router'
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

import styles from './card.module.css'

interface ICard {
    id: string,
    year: string,
    genre: string
    title: string,
    poster: string,
    rating: string,
    director: string,
}

const Card: React.FC<ICard> = (
    { id, title, poster, genre,
        director, year, rating }
) => {

    const navigate = useNavigate()
    const rate = parseInt(rating)

    return <div
        onClick={() => navigate(`/items/${id}`)}
        className={styles.container}
    >
        <div className={styles.rate}>
            {rate < 8 ? <ThumbDownIcon sx={{ fontSize: "40px", backgroundColor: "red" }} /> : null}
        </div>
        <div>
            <span className={styles.card_title}>{title}</span>
            <img width="350px" height="350px" src={poster} alt="poster" />
        </div>

        <div className={styles.card_details}>
            <span>Genre: {genre}</span>
            <span>Year: {year}</span>
            <span>Director: {director}</span>
        </div>
    </div>
}

export default Card