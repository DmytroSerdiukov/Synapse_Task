import React, { useState } from 'react'

import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { Field, reduxForm } from 'redux-form';

import Button from '../../components/Button';
import { useAppDispatch } from '../../redux/hooks';
import { checkEmail, checkName, length } from '../../helpers/validators';
import { CustomField, CustomPasswordField } from '../../components/form/Field';

import styles from './styles.module.css'

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
            type={visible ? "text" : "password"}
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

const RegisterMarkup: React.FC = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const submit = (values: any) => {
        dispatch({ type: 'user/SET_USER', payload: values.name })
        dispatch({ type: 'user/LOGIN' })
        setTimeout(() => navigate('/home'), 1500)
    }

    return <div className={styles.container}>
        <h1>Sign Up</h1>
        <SignUpForm onSubmit={submit} />
        <Link
            className={styles.link}
            to='/auth'
        >
            Already have an account?
        </Link>
    </div>
}

const SignUpForm = reduxForm({ form: "signup" })(Form)

export default RegisterMarkup