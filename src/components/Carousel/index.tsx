import React from 'react'
import { useNavigate } from 'react-router'

import JsonData from '../../data/imdb.json'

import styles from './index.module.css'

interface IMovie {
    id: string,
    title: string,
    poster: string
}

const Movie: React.FC<IMovie> = ({ id, title, poster }) => {
    const navigate = useNavigate()
    return <div
        onClick={() => navigate(`/items/${id}`)}
        className={styles.card_container}>
        <div>
            <img
                width="350px"
                height="350px"
                src={poster}
                alt="poster"
            />
        </div>
        <h1 className={styles.card_title}>{title}</h1>
    </div>
}


const Movies: React.FC = () => {
    return <div className={styles.container}>
        {
            JsonData.slice(JsonData.length - 3, JsonData.length).map((el, i) =>
                <Movie
                    id={el.id}
                    key={i}
                    poster={el.poster}
                    title={el.title}
                />
            )
        }
    </div >
}


export default Movies

