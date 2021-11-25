import React from 'react'
import JsonData from '../../data/imdb.json'

import Card from './Card'


const CardsMarkup: React.FC = () => {
    return <div style={{
        display: "flex",
        justifyContent: "center",
    }}>
        <div style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            width: "1000px",
            flexWrap: "wrap",
        }}>
            {JsonData.map((el: any, i: any) =>
                <Card
                    key={i}
                    id={el.id}
                    title={el.title}
                    poster={el.poster}
                />
            )}
        </div>

    </div>
}

export default CardsMarkup