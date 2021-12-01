

export const checkName = (value: string) => {
    if (!value)
        return "Name is required"
}

export const length = (value: string) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{6,15}$/
    if (!value)
        return "Password is required"
    else if (value && value.length < 6)
        return "Password length have to be more or equal to 6 symbols"
    else if (value && value.length > 15)
        return "Password length have to be less than 15 symbols"
    else if (!regex.test(value))
        return "Password have to consist at least one big, one number, one special symbol and length from 6 to 15"
}

export const checkEmail = (value: string) => {
    const emailRegex = /\S+@\S+\.\S+/;
    if(!value)
        return "Email is required"
    else if (!emailRegex.test(value))
        return "Email is wrong"
}