export const toPrettyDate = (isoString: string): string => {
    if (!isoString) return 'Not Available'

    const date = new Date(isoString)
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
}
