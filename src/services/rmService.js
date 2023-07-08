import axios from "axios";

const apiUrl = 'https://rickandmortyapi.com/api/character'

export function getCharacters(page) {
    let characters = [];
    axios.get(apiUrl + `/?page=${page}`).then(pageResult => {
        characters = pageResult.data.results;
    }).catch((e) => {
        throw new Error(e);
    }).finally(() => {
            return characters;
        }
    )
}
