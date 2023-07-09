import axios from "axios";

const apiUrl = 'https://rickandmortyapi.com/api/character'

export const getCharactersPage = async (page) => {
    try {
        return await axios.get(apiUrl + `?page=${page}`);
    } catch (e) {
        return e;
    }
}

export const getCharacter = async (id) => {
    try {
        return await axios.get(apiUrl + `/${id}`);
    } catch (e) {
        return e;
    }
}
