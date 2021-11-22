import React, { useEffect, useState } from 'react'
import Button from '../../components/Button'

import { useNavigate } from 'react-router'
import JsonData from '../../data/imdb.json'


const HomeMarkup: React.FC = () => {
    const navigate = useNavigate()

    return <div>
        <div style={{
            padding: "15px",
            backgroundColor: "black",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            paddingRight: "50px"
        }}>
            <Button
                margin={"0px 5px"}
                width={100}
                height={50}
                backgroundColor={"#5897FC"}
                title={"Sign In"}
                callback={() => navigate("/auth")}

            />
            <Button
                margin={"0px 20px"}
                width={100}
                height={50}
                backgroundColor={"#9CE37D"}
                title={"Sign Up"}
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