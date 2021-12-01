import React from 'react'

import { useNavigate, useParams } from 'react-router'

import JsonData from '../../data/imdb.json'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import styles from './styles.module.css'


const PopUpMarkup: React.FC = () => {
    const params = useParams()
    const navigate = useNavigate()

    const { title, poster, writer, actors, imdbrating, plot } = JsonData.filter(el => el.id === params.id)[0]

    return <div className={styles.container}>
        <div>
            <img
                className={styles.image}
                // width="450px"
                // height="600px"
                src={poster}
                alt="poster"
            />
        </div>
        <div className={styles.details}>
            <h1>{title}</h1>
            <h6 className={styles.plot}>{plot}</h6>
            <span className={styles.detailsRaiting}>Rating: {imdbrating}</span>
            <span className={styles.detailsWriter}>Writer: {writer}</span>
            <span className={styles.detailsActors}>Actors: {actors}</span>
        </div>
        <div onClick={() => navigate(-1)}
            className={styles.iconWrapper}
        >
            <i className={styles.getBackArrow}>
                <ArrowBackIcon />
            </i>
        </div>

    </div>
}

export default PopUpMarkup
