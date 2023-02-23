import {createHeaders} from './headers';

const apiUrl = process.env.REACT_APP_API_URL;


// make a GET request to our API to check if user with given name exists. If exists, return user. 
// if any error occurs, catch that error
async function doesUserExist(userToCheck) {
    const url = `${apiUrl}?username=${userToCheck}`;
    try{
        const response =  await fetch(url);
        if (!response.ok) {
            throw new Error("couldn't find the user");
        }
        const userData = await response.json();
        return [null, userData];
    } catch (ApiCallError) {
        return [ApiCallError.message, []];
    }
}

// make a POST request to add a new user with given name. After creating the user, return whole created user object.
// if any error occurs, catch that error
async function createUser(usernameToAdd) {
    const url = `${apiUrl}`;
    let dataToPost = {
        "username": usernameToAdd,
        "translations": []
    }
    try {
        const response =  await fetch(url, {method: 'POST', 
            headers: createHeaders(),
            body: JSON.stringify(dataToPost)})
        if (!response.ok) {
            throw new Error("couldn't add the user");
        }
        const userData = await response.json();
        return [null, userData];
    } catch (ApiCallError) {
        return [ApiCallError.message, []];
    }
}

// function to check if user with a given name already exists. if it does not exist yet, create a new user
export async function getUserOrCreateNewUser(usernameInput) {
    let [cannotCheckForUser, existingUser] = await doesUserExist(usernameInput);
    if (!cannotCheckForUser && existingUser.length === 0) {
        return await createUser(usernameInput);
    } else {
        return [cannotCheckForUser, existingUser[0]]
    }
}