import React from 'react';
import { useNavigate } from 'react-router';

import Button from '../../components/Button'

import styles from './styles.module.css'

const WelcomeScreen: React.FC = () => {
    const navigate = useNavigate()
    return (
        <div className={styles.container}>
            <Button
                margin={"20px 5px"}
                width={350}
                height={80}
                backgroundColor={"#5897FC"}
                title="Browse"
                callback={() => navigate('/home')}
            />
            <Button
                margin={"20px 5px"}
                width={350}
                height={80}
                backgroundColor={"#5897FC"}
                title="Sign In"
                callback={() => navigate('/auth')}
            />
            <Button
                margin={"20px 5px"}
                width={350}
                height={80}
                backgroundColor={"#5897FC"}
                title="Sign Up"
                callback={() => navigate('/register')}
            />
        </div>
    );
};

export default WelcomeScreen;