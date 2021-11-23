
import React from 'react'
import { useNavigate } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import Button from '../../components/Button';
import CustomField from '../../components/form/Field';
import { checkEmail, length } from '../../helpers/validators';
// import Field from '../../components/form/Field';


const Form = (props: any) => {
    
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
            name={'password'}
            type="password"
            placeholder="Password"
            component={CustomField}
            validate={[length]}
        />
        <Button
            margin={"0px 5px"}
            width={100}
            height={50}
            backgroundColor={"#5897FC"}
            title="Sign In"
            // callback={() => navigate('/home')}
        />
        {/* <Button type='submit' title="Sign In" callback={() => navigate('/home')} /> */}
    </form>
}

const AuthMarkup: React.FC = () => {
    const navigate = useNavigate()
    // const navigate = useNavigate()
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
        {/* <Field placeholder="Email" type="text" />
        <Field placeholder="Password" type="password" /> */}
        {/* <Button title="Sign In" callback={() => navigate('/home')} /> */}
    </div>
}

const SignInForm = reduxForm({ form: "signin" })(Form)

export default AuthMarkup