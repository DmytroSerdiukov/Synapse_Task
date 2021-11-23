
import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { Field, reduxForm } from 'redux-form';

import Button from '../../components/Button';
import { checkEmail, length } from '../../helpers/validators';
import {CustomField, CustomPasswordField } from '../../components/form/Field';

const Form = (props: any) => {
    const [visible, setVisible] = useState(false)
    const { handleSubmit } = props
    return <form onSubmit={handleSubmit}>
        <Field
            name={'email'}
            type="text"
            placeholder="Email"
            component={CustomField}
            validate={[checkEmail]}
        />
        <Field
            visible={visible}
            setVisible={setVisible}
            name={'password'}
            type={visible ? "text":"password"}
            placeholder="Password"
            component={CustomPasswordField}
            validate={[length]}
        />
        <Button
            margin={"0px 5px"}
            width={350}
            height={80}
            backgroundColor={"#5897FC"}
            title="Sign In"
        />
    </form>
}

const AuthMarkup: React.FC = () => {
    const navigate = useNavigate()
    const submit = (values: any) => {
        console.log(values)
        setTimeout( () => navigate('/home'), 2500)
    }
    return <div style={{
        marginTop: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: 'center'
    }}>
        <h1>Sign In</h1>
        <SignInForm onSubmit={submit} />
    </div>
}

const SignInForm = reduxForm({ form: "signin" })(Form)

export default AuthMarkup
