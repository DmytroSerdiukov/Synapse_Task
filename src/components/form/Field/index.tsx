import React from 'react'
import { WrappedFieldProps } from 'redux-form'

interface IInput {
    meta: any,
    input: any,
    type: string,
    placeholder: string
}

// const Input: React.FC<IInput> = ({ type, placeholder }) => {
//     return <input
//         style={styles}
//         placeholder={placeholder}
//         type={type}
//     />
// }

type IField = WrappedFieldProps & IInput

const CustomField: React.FC<IField> = ({ input, type, placeholder, meta: { touched, error, warning } }) => (
    <div style={{
        display: "flex",
        flexDirection: "column",
        width: "350px"
    }}>
        <input
            {...input}
            style={styles}
            placeholder={placeholder}
            type={type}
        />
        <div style ={{
            margin: "10px"
        }}>

            {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
)



export default CustomField

const styles = {
    margin: 4,
    width: 350,
    height: 80,
    padding: 0,
    backgroundColor: "#F9F3F3",
    outline: "none",
    color: "#000",
    fontSize: "1.125rem",
    borderRadius: 4,
    border: "0px solid black"
}