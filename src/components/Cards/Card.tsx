import React from 'react'
import { useNavigate } from 'react-router'
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

interface ICard {
    id: string,
    year: string,
    genre: string
    title: string,
    poster: string,
    director: string,
    rating: string
}

const Card: React.FC<ICard> = (
    { id, title, poster, genre,
        director, year, rating }
) => {

    const navigate = useNavigate()
    const rate = parseInt(rating)

    return <div
        onClick={() => navigate(`/items/${id}`)}
        style={{
            display: "flex",
            position: "relative",
            flexDirection: "column",
            justifyContent: 'center',
            width: "350px",
            height: "450px",
            backgroundColor: "black",
            margin: "10px",
            color: "#fff",
            zIndex: 0,
        }}>

        <div style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            zIndex: 8
        }}>{rate < 8 ? <ThumbDownIcon sx={{ fontSize: "40px" }} /> : null}</div>
        <div>
            <span style={{
                paddingLeft: "10px",
                textAlign: "center",
                position: "absolute",
                // backgroundColor: "yellow",
                // bottom: "5px",
                fontSize: "28px",
                fontWeight: "500",
                zIndex: 10,
            }}>{title}</span>
            <img style={{
                zIndex: 0
            }} width="350px" height="350px" src={poster} alt="poster" />


        </div>

        <div style={{
            display: "flex",
            flexDirection: "column"
        }}>
            <span>Genre: {genre}</span>
            <span>Year: {year}</span>
            <span>Director: {director}</span>
        </div>

    </div>
}

export default Card