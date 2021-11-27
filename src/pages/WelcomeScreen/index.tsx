import React from 'react';
import { useNavigate } from 'react-router';
import Button from '../../components/Button'

const WelcomeScreen: React.FC = () => {
    const navigate = useNavigate()
    return (
        <div style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        }}>
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
                title="Sign In"
                callback={() => navigate('/register')}
            />
        </div>
    );
};

export default WelcomeScreen;