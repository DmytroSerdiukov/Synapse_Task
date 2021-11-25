import React from 'react'
import { useNavigate } from 'react-router'

interface ICard {
    id: string,
    title: string,
    poster: string
}

const Card: React.FC<ICard> = ({ id, title, poster }) => {
    const navigate = useNavigate()
    return <div
        onClick={() => navigate(`/items/${id}`)}
        style={{
            display: "flex",
            position: "relative",
            flexDirection: "column",
            justifyContent: 'center',
            width: "350px",
            height: "350px",
            backgroundColor: "red",
            margin: "10px",
            color: "#fff",

        }}>
        <img style={{
            zIndex: 0
        }} width="350px" height="350px" src={poster} alt="poster" />

        <span style={{
            position: "absolute",
            bottom: "5px",
            fontSize: "28px",
            fontWeight: "500",
            zIndex: 10,
        }}>{title}</span>

    </div>
}

export default Card