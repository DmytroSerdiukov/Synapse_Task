
import React from 'react'
import Button from '../../components/form/Button';
import Field from '../../components/form/Field';

const AuthMarkup: React.FC = () => {
    return <div style={{
        display: "flex",
        flexDirection: "column"
    }}>
        <Field placeholder="Email" type="text" />
        <Field placeholder="Password" type="password" />
        <Button title="Sign In" />
    </div>
}

export default AuthMarkup