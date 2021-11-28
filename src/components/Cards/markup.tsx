import React, { useState } from 'react'
import JsonData from '../../data/imdb.json'
import Card from './Card'

import styles from './index.module.css'

const CardsMarkup: React.FC = () => {
    
    console.log(JsonData.length/25)

    return <div 
    className={styles.container}>
        <div className={styles.card_list}>
            {JsonData.map((el: any, i: any) =>
                <Card
                    key={i}
                    id={el.id}
                    title={el.title}
                    poster={el.poster}
                    genre={el.genre}
                    director={el.director}
                    year={el.year}
                    rating={el.imdbrating}
                />
            )}

        </div>

    </div>
}

export default CardsMarkup