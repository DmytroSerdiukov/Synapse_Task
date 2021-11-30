import React, { useState } from 'react'
import { WrappedFieldProps } from 'redux-form'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import styles from './styles.module.css'

interface IInput {
    meta: any,
    input: any,
    type: string,
    placeholder: string
}

type IField = WrappedFieldProps & IInput

export const CustomField: React.FC<IField> = ({ input, type, placeholder, meta: { touched, error, warning } }) => (
    <div
        className={styles.container}>
        <input
            {...input}
            className={styles.input}
            placeholder={placeholder}
            type={type}
        />
        <div
            className={styles.field_error_info}>
            {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
)

export const CustomPasswordField: React.FC<IField> = ({ input, type, placeholder, meta: { touched, error, warning } }) => {
    const [visible, setVisible] = useState(false)

    return <div className={styles.container}>
        <div className={styles.field_wrapper}>
            <input
                {...input}
                className={styles.input}
                placeholder={placeholder}
                type={visible ? "text" : "password"}
            />
            <div className={styles.password_status_icon}>
                {visible ?
                    <i onClick={() => setVisible(!visible)}>
                        <VisibilityIcon />
                    </i>
                    :
                    <i onClick={() => setVisible(!visible)}>
                        <VisibilityOffIcon />
                    </i>
                }
            </div>
        </div>
        <div
            className={styles.field_error_info}>
            {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
}

