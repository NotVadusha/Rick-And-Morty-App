import axios from "axios";

const apiUrl = 'https://rickandmortyapi.com/api/character'

const getData = (requestUrl) =>{
    return new Promise((resolve, reject) => {
        resolve(axios.get(apiUrl + requestUrl));
    })
}

export const getCharactersPage = async (page) => {
    try {
        return await getData(`?page=${page}`)
    } catch (e) {
        return e;
    }
}

export const getCharacter = async (id) => {
    try {
        return await getData(`/${id}`)
    } catch (e) {
        return e;
    }
}
