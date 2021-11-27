import JsonData from '../../data/imdb.json'
import React from 'react'
import { useNavigate } from 'react-router'


interface IMovie {
    id: string,
    title: string,
    poster: string
}

const Movie: React.FC<IMovie> = ({ id, title, poster }) => {
    const navigate = useNavigate()
    return <div
        onClick={() => navigate(`/items/${id}`)}
        style={{
            position: "relative",
            width: "350px",
            height: "350px",
            background: "red",
            margin: "10px"
        }}>
            <div>
                <img
                    width="350px"
                    height="350px"
                    src={poster}
                    alt="poster"
                />
            </div>
            <h1 style={{
                position: "absolute",
                bottom: "10px",
                color: "white",
                textAlign: "center"
            }}>{title}</h1>
    </div>
}


const Movies: React.FC = () => {
    return < div style={{
        display: "flex",
        marginTop: "50px",
        justifyContent: "center",
        flexDirection: "row",
    }}>
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

