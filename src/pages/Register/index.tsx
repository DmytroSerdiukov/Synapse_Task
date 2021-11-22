


import React from 'react'
import { useNavigate } from 'react-router';
import Button from '../../components/form/Button';
import Field from '../../components/form/Field';

const RegisterMarkup: React.FC = () => {
    const navigate = useNavigate()
    return <div style={{
        marginTop: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: 'center'
    }}>
        <h1>Sign Up</h1>
        <Field placeholder="Email" type="text" />
        <Field placeholder="Name" type="text" />
        <Field placeholder="Password" type="password" />
        <Button title="Sign Up" callback={() => navigate('/home')} />
    </div>
}

export default RegisterMarkup