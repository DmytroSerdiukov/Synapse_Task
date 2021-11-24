import React from 'react'
import { useNavigate } from 'react-router'

interface ICard {
    id: string,
    genre: string,
    title: string,
    director: string
}

const Card: React.FC<ICard> = ({ id, title, genre, director }) => {
    const navigate = useNavigate()
    return <div
        onClick={() => navigate(`/items/${id}`)}
        style={{
            display: "flex",
            flexDirection: "column",
            width: "350px",
            height: "350px",
            backgroundColor: "red",
            margin: "10px",
            color: "#fff"
        }}>
        <span>{title}</span>
        <span>{genre}</span>
        <span>{director}</span>
    </div>
}

export default Card