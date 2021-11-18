


import React from 'react'
import Button from '../../components/form/Button';
import Field from '../../components/form/Field';

const RegisterMarkup: React.FC = () => {
    return <div style={{
        marginTop: 100,
        display: "flex",
        flexDirection: "column"
    }}>
        <h1>Sign Up</h1>
        <Field placeholder="Email" type="text" />
        <Field placeholder="Name" type="text" />
        <Field placeholder="Password" type="password" />
        <Button title="Sign Up" />
    </div>
}

export default RegisterMarkup