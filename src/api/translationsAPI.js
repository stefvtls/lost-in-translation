import {createHeaders} from './headers';
const apiUrl = process.env.REACT_APP_API_URL;

export const updateTranslations = async(user, translation) => {
    try {
        const response = await fetch(`${apiUrl}/${user.id}`, {
            method:"PATCH",
            headers: createHeaders(),
            body: JSON.stringify({
                translations: [...user.translations,translation ]
            })
        })
        if(!response.ok){
            throw new Error("Could not update the translations.")
        }
        const result = await response.json()
        return [null, result]
    } catch (error) {
        return [error.message, null]
    }
}

export const clearTranslations = async(user) => {
    try {
        const response = await fetch(`${apiUrl}/${user.id}`, {
            method:"PATCH",
            headers: createHeaders(),
            body: JSON.stringify({
                translations: []
            })
        })
        if(!response.ok){
            throw new Error("Could not update the translations.")
        }
        const result = await response.json()
        return [null, result]
    } catch (error) {
        return [error.message, null]
    }
}