import React from 'react'

interface IInput {
    type: string,
    placeholder: string
}

const Field: React.FC<IInput> = ({ type, placeholder }) => {
    return <input
        style={styles}
        placeholder={placeholder}
        type={type}
    />
}

export default Field

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