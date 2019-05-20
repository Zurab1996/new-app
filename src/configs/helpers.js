const Capitalize = text => {
    return text.charAt(0).toUpperCase() + text.slice(1)
}
const ShowAmountCharacters = (string, amount) => {
    if (string.length > amount) {
        return `${string.substring(0, amount)}...`
    }
    return string
}

export { Capitalize, ShowAmountCharacters }
