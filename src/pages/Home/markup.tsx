import React, { useEffect, useState } from 'react'
import Button from '../../components/form/Button'
import { useNavigate } from 'react-router'
import JsonData from '../../data/imdb.json'


const HomeMarkup: React.FC = () => {
    const navigate = useNavigate()

    return <div>
        <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            marginRight: 35
        }}>
            <Button
                title="Sign In"
                callback={() => navigate("/auth")}
            /> or
            <Button
                title="Sign Up"
                callback={() => navigate("/register")}
            />
        </div>
        HomePage
        <div>
            {JsonData.map((el, i) =>
                <p
                    onClick={() => navigate(`/items/${el.id}`)}
                    key={i}>
                    {el.id}
                </p>
            )}
        </div>
    </div>
}

export default HomeMarkup