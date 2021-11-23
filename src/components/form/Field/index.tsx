import React, { useState } from 'react'
import { WrappedFieldProps } from 'redux-form'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

interface IInput {
    meta: any,
    input: any,
    type: string,
    placeholder: string
}

type IField = WrappedFieldProps & IInput

export const CustomField: React.FC<IField> = ({ input, type, placeholder, meta: { touched, error, warning } }) => (
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
        <div style={{
            margin: "10px"
        }}>

            {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
)




export const CustomPasswordField: React.FC<IField> = ({ input, type, placeholder, meta: { touched, error, warning } }) => {
    const [visible, setVisible] = useState(false)

    return <div style={{
        display: "flex",
        flexDirection: "column",
        width: "350px"
    }}>
        <div style={{
                position: "relative",
            }}>
            <input
                {...input}
                style={styles}
                placeholder={placeholder}
                type={visible ? "text": "password"}
            />
            <div style={{
                top: "35px",
                right: "10px",
                position: "absolute",
                zIndex: 1

            }}>
            {visible ?
                <i onClick={() => setVisible(!visible)}>
                    <VisibilityOffIcon />
                </i>
                : <i onClick={() => setVisible(!visible)}>
                    <VisibilityIcon />
                </i>
            }
            </div>
        </div>

        <div style={{
            margin: "10px"
        }}>

            {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
}

const styles = {
    zIndex: 0,
    margin: 4,
    width: 350,
    height: 80,
    padding: 0,
    paddingLeft: 10,
    backgroundColor: "#F9F3F3",
    outline: "none",
    color: "#000",
    fontSize: "1.125rem",
    borderRadius: 4,
    border: "0px solid black"
}