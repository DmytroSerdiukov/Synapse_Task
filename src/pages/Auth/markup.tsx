
import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { Field, reduxForm } from 'redux-form';

import { RootState } from '../../redux';
import Button from '../../components/Button';
import { checkEmail, length } from '../../helpers/validators';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { CustomField, CustomPasswordField } from '../../components/form/Field';
import { Link } from 'react-router-dom';

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

const AuthMarkup: React.FC = (props: any) => {
    const authStatus = useAppSelector((state: RootState) => state.user.authStatus);
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const submit = (values: any) => {
        dispatch({ type: "user/LOGIN" })
        if (authStatus)
            setTimeout(() => navigate('/home'), 1000)
    }
    return <div className={styles.container}>
        <h1>Sign In</h1>
        <SignInForm onSubmit={submit} />
        <Link
            className={styles.link}
            to='/register'
        >
            Don't have an account?
        </Link>

    </div>
}

const SignInForm = reduxForm({ form: "signin" })(Form)

export default AuthMarkup
