import React from 'react'
import JsonData from '../../data/imdb.json'
import { useNavigate, useParams } from 'react-router'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface IPopUp {
    animate: any
}

const PopUpMarkup: React.FC<IPopUp> = ({ animate }) => {
    const params = useParams()
    const navigate = useNavigate()

    const { title, poster, writer, actors, imdbrating } = JsonData.filter(el => el.id === params.id)[0]

    return <div style={styles.container}>
        <div>
            <img
                width="450px"
                height="600px"
                src={poster}
                alt="poster"
            />
        </div>
        <div style={styles.details}>
            <h1>{title}</h1>
            <span>Writer: {writer}</span>
            <span>Actors: {actors}</span>
            <span>Rating: {imdbrating}</span>
        </div>
        <div style={styles.iconWrapper}>
            <i style={styles.getBackArrow}
                onClick={() => navigate(-1)}
            >
                <ArrowBackIcon />
            </i>
        </div>

    </div>
}

export default PopUpMarkup

const styles = {
    container: {
        display: "flex",
        position: "relative" as "relative",
        width: "1000px",
        height: "600px",
        backgroundColor: "red",
        margin: "0 auto",
        marginTop: "100px",
        color: "white"
    },
    details: {
        paddingTop: "30px",
        paddingLeft: "30px",
        display: "flex",
        justifyContent: 'flex-start',
        alignItems: "flex-start",
        flexDirection: "column" as "column"
    },
    getBackArrow: {

        // position: "absolute" as "absolute",
        // top: "30px",
        // left: "30px",
        opacity: 1,
        color: "white",
    },
    iconWrapper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute" as "absolute",
        top: "30px",
        left: "40px",
        width: "40px",
        height: "30px",
        backgroundColor: "gray",
        // opacity: 0.5,
        borderRadius: 4
    }
}