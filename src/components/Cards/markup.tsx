import React, { useEffect, useState } from 'react'

import JsonData from '../../data/imdb.json'
import Card from './Card'

import styles from './index.module.css'

let data = require('../../data/imdb.json')

const CardsMarkup: React.FC = () => {

    const [listItems, setListItems] = useState<any>(null);
    const [isFetching, setIsFetching] = useState(false);


    function handleScroll() {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
        setIsFetching(true);
    }

    const fetchData = async () => {
        if (listItems === null)
            setListItems(data.slice(0, 20))
        return
    }

    function fetchMoreListItems() {
        setTimeout(() => {
            setListItems((prevState: any) => ([...prevState, ...data.slice(prevState.length, prevState.length + 20)]));
            setIsFetching(false);
        }, 700)

    }

    useEffect(() => {
        fetchData()
        window.addEventListener('scroll', handleScroll);
        if (!isFetching) return;
        fetchMoreListItems();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isFetching]);


    return <div
        className={styles.container}>
        <div className={styles.card_list}>
            {listItems && listItems.map((el: any, i: any) =>
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