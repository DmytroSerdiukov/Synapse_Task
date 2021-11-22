
import React from 'react'
import { useNavigate } from 'react-router';
import Button from '../../components/form/Button';
import Field from '../../components/form/Field';

const AuthMarkup: React.FC = () => {

    const navigate = useNavigate()
    
    return <div style={{
        marginTop: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: 'center'
    }}>
        <h1>Sign In</h1>
        <Field placeholder="Email" type="text" />
        <Field placeholder="Password" type="password" />
        <Button title="Sign In" callback={() => navigate('/home')} />
    </div>
}

export default AuthMarkup