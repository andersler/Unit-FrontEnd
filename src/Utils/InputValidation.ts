export const isValid = (input: any): boolean => {
    if (typeof input === 'string') {
        return input.trim().length > 0
    }
    return false
}
