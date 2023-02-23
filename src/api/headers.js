const apiKey = process.env.REACT_APP_API_KEY
// create headers object for our POST and PATCH requests
export const createHeaders = () => {
    return {
        "Content-Type": "application/json",
        "x-api-key": apiKey
    }
}
