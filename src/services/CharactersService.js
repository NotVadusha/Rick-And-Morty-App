import HttpService from "./HTTPService";

class CharactersService {
    constructor() {
        this.api = new HttpService('https://rickandmortyapi.com/api/character');
    }

    getCharactersPage = async (page) => {
        return await this.api.get(`?page=${page}`);
    }

    getCharacter = async (id) => {
        return await this.api.get(`/${id}`);
    }

    filterCharacterName = async (name) => {
        return await this.api.get(`/?name=${name}`)
    }
}

export const service = new CharactersService();
