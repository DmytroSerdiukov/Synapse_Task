import React, { useEffect, useState } from 'react'
import Button from '../../components/Button'

import { useNavigate } from 'react-router'
import JsonData from '../../data/imdb.json'


const Movies = () => {
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
                    // onClick={() => navigate(`/items/${el.id}`)}
                    key={i} />
            )
        }
    </div >
}


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

const HomeMarkup: React.FC = () => {
    const navigate = useNavigate()
    const loggedIn = true
    return <div>
        {
            loggedIn ? <div style={{
                padding: "15px",
                backgroundColor: "black",
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
                paddingRight: "50px",
                color: "white",
                fontSize: "1.125rem"
            }}>
                Hello, user
            </div> :
                <>
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
                    {/* // HomePage */}

                </>
        }
        <Movies />
    </div>
}
export default HomeMarkup