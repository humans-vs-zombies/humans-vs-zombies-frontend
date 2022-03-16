export const createHeaders = () => {
    return {
        'Content-Type': 'application/json',
    }
}

export const handleFirstResponse = async response => {
    if (!response.ok) {
        const { error = 'An unknown api error' } = await response.json()
        throw new Error(error)
    }
    return await response.json()
}
