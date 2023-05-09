export const dateFormatter = (date: Date | undefined) => {
    if (!date) return ``
    const minutes = date.getMinutes()
    const day = date.getDay()
    const month = date.toLocaleString('en-us', { month: "long" })
    const year = date.getFullYear()

    return `${month}, ${day} ${year}` as const
}