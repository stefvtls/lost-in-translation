import {createHeaders} from './headers';

const apiUrl = process.env.REACT_APP_API_URL;

// PATCH request to update translations with a new translation
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

// PATCH request to clear translations for the user
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