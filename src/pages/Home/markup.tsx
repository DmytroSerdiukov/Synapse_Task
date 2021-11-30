import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

import { RootState } from '../../redux'
import Button from '../../components/Button'
import Movies from '../../components/Carousel'
import { useAppSelector } from '../../redux/hooks'
import CardsContainer from '../../components/Cards/container'

import styles from './styles.module.css'

const LoggedInBar = () => {
    const user = useAppSelector( (state: RootState) => state.user.user);

    return <div className={styles.container}>
        Hello, {user === "" ? 'guest' : user}
    </div>
}

const UnloggedInBar = () => {
    const navigate = useNavigate()

    return <div className={styles.container}>
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
        <CardsContainer />
    </div>
}
export default HomeMarkup