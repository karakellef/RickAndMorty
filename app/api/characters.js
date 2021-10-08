import client from './client';

const getCharacter = async (url) => {
    return await client.get(url).then(result => result.data);
}

const getAllCharacters = async (chars) => {
    return await Promise.all(
        chars.map(getCharacter));
};
export default {
    getCharacters: getAllCharacters,
};