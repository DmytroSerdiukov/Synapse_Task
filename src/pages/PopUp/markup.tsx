import React from 'react'
import JsonData from '../../data/imdb.json'
import { useNavigate, useParams } from 'react-router'

interface IPopUp {
    animate: any
}

const PopUpMarkup: React.FC<IPopUp> = ({animate}) => {
    let params = useParams()
    const item = JsonData.filter(el => el.id === params.id)
    const navigate = useNavigate()
    return <div style={styles.container}>
        <span onClick={() => navigate(-1)}>{item[0].title}</span>
    </div>
}

export default PopUpMarkup

const styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "80vw",
        height: "80vh",
        backgroundColor: "red",
        margin: "0 auto",
        marginTop: "100px"
    }
}