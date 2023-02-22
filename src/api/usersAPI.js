import {createHeaders} from './headers';

const apiUrl = process.env.REACT_APP_API_URL;


async function doesUserExist(userToCheck) {
    const url = `${apiUrl}?username=${userToCheck}`;
    console.log("called api url: " + url);
    try{
        const response =  await fetch(url);
        if (!response.ok) {
            throw new Error("couldn't find the user");
        }
        const userData = await response.json();
        // if (userData.length === 0){
        //     createUser(userToCheck);
        // }  
        // console.log(userData);
        return [null, userData];
    } catch (ApiCallError) {
        return [ApiCallError.message, []];
    }
}

async function createUser(usernameToAdd) {
    const url = `${apiUrl}`;
    let dataToPost = {
        "username": usernameToAdd,
        "translations": []
    }
    // console.log("created post request at url: " + url);
    try {
        const response =  await fetch(url, {method: 'POST', 
            headers: createHeaders(),
            body: JSON.stringify(dataToPost)})

        if (!response.ok) {
            throw new Error("couldn't add the user");
        }

        const userData = await response.json();
        // console.log(userData);
        return [null, userData];

    } catch (ApiCallError) {
        return [ApiCallError.message, []];
    }
}


export async function getUserOrCreateNewUser(usernameInput) {

    let [cannotCheckForUser, existingUser] = await doesUserExist(usernameInput);


    if (!cannotCheckForUser && existingUser.length === 0) {
        return await createUser(usernameInput);
    } else {
        return [cannotCheckForUser, existingUser]
    }
}