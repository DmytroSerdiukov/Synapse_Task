import React from 'react'
import { submit } from 'redux-form'



interface IButton {
    type: string,
    title: string,
    callback?(): void
}

const Button: React.FC<IButton> = ({ type, title, callback }) => {
    return <button
        type={"submit"}
        onClick={callback}
        style={styles.container}
    >
        {title}
    </button>
}

export default Button


const styles = {
    container: {
        width: 350,
        height: 80,
        backgroundColor: "#5897FC",
        padding: "25 140 25 140",
        color: "#fff",
        fontSize: "1.125rem",
        borderRadius: "4px",
        border: 0
    }
}