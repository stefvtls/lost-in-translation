// add data to the browser local storage
export  const localStorageSave = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}


// get data from the browser local storage with and convert it to json format.
export const localStorageRead = (key) => {
    const data = localStorage.getItem(key)
    const jsonData = data ? JSON.parse(data) : null;
    return jsonData;
}

// remove data from the browser local storage
export const localStorageDelete = (key) => {
    localStorage.removeItem(key);
}