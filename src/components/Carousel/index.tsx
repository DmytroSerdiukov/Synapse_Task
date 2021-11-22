import JsonData from '../../data/imdb.json'
import React from 'react'
import { useNavigate } from 'react-router'


interface IMovie {
    id: string
}

const Movie: React.FC<IMovie> = ({ id }) => {
    const navigate = useNavigate()
    return <div
        onClick={() => navigate(`/items/${id}`)}
        style={{
            width: "350px",
            height: "350px",
            background: "red",
            margin: "10px"


        }}>
        {id}
    </div>
}


const Movies: React.FC = () => {
    return < div style={{
        display: "flex",
        marginTop: "150px",
        justifyContent: "center",
        flexDirection: "row",
    }}>
        {
            JsonData.slice(0, 3).map((el, i) =>
                <Movie
                    id={el.id}
                    key={i} />
            )
        }
    </div >
}


export default Movies

