import React, { useEffect, useState } from 'react'
import Button from '../../components/Button'

import { useNavigate } from 'react-router'
import Movies from '../../components/Carousel'
import { useAppSelector } from '../../redux/hooks'
import { RootState } from '../../redux'


const LoggedInBar = () => {
    const user = useAppSelector( (state: RootState) => state.user.user);

    return <div style={{
        padding: "15px",
        backgroundColor: "black",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        paddingRight: "50px",
        color: "white",
        fontSize: "1.125rem"
    }}>
        Hello, {user}
    </div>
}

const UnloggedInBar = () => {
    const navigate = useNavigate()

    return <div style={{
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
}


const HomeMarkup: React.FC = () => {
    const authStatus = useAppSelector( (state: RootState) => state.user.authStatus);
    return <div>
        {
            authStatus ? <LoggedInBar /> : <UnloggedInBar />
        }
        <Movies />
    </div>
}
export default HomeMarkup