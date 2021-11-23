

import React, { useState } from 'react'

import { Field, reduxForm } from 'redux-form';
import { useNavigate } from 'react-router';

import Button from '../../components/Button';
import { checkEmail, checkName, length } from '../../helpers/validators';
import { CustomField, CustomPasswordField } from '../../components/form/Field';


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
            name={'name'}
            type="text"
            placeholder="Name"
            component={CustomField}
            validate={[checkName]}
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

    </form>
}

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
        <SignUpForm />
    </div>
}

const SignUpForm = reduxForm({form: "signup"})(Form)

export default RegisterMarkup