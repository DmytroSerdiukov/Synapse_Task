import React from 'react'
import { useNavigate } from 'react-router'

const PopUpMarkup: React.FC = () => {
    const navigate = useNavigate()
    return <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "80vw",
        height: "80vh",
        backgroundColor: "red",
        margin: "0 auto",
        marginTop: "100px"
    }}>
        <span onClick={() => navigate(-1)}>GO BACK!</span>
    </div>
}

export default PopUpMarkup