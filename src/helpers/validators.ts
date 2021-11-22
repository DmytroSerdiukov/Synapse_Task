

export const length = (value: string) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{6,15}$/
    if (value.length < 6)
        return "Password is short"
    else if (!regex.test(value))
        return "Password have to consist at least one big, one number, one special symbol"
}

export const checkEmail = (value: string) => {
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(value))
        return "Email is wrong"
}