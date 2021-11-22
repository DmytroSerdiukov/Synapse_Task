import React, { useEffect, useState } from 'react'
import Button from '../../components/Button'

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
                width={100}
                height={50}
                backgroundColor={"#5897FC"}
                title={"Sign In"}
                callback={() => navigate("/auth")}

            />
{/* 
            <Button
                title="Sign In"
                callback={() => navigate("/auth")}
            /> or
            <Button
                title="Sign Up"
                callback={() => navigate("/register")}
            /> */}
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