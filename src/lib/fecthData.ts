export const fecthData = async (URL: string) => {
    const data = await fetch(URL);

    if (!data.ok) {
        return 
    }

    return await data.json()
}