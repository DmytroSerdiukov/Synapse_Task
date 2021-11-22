import classNames from 'classnames'
import React from 'react'
import "./index.css"

interface IButton {
    width: number,
    height: number,
    backgroundColor: string,
    title: string,
    callback?(): void
}

const Button: React.FC<IButton> =
    (
        { width, height, backgroundColor, title, callback }
    ) => {
        return <button
            type="submit"
            onClick={callback}
            style={{ ...styles.container, ...{ width: width, height: height, backgroundColor: backgroundColor }}}
        >
    { title }
        </button >
    }

export default Button

const styles = {
    container: {
        padding: "25 140 25 140",
        color: "white",
        fontSize: "1.125rem",
        border: 0,
        borderRadius: 4,
    }
}