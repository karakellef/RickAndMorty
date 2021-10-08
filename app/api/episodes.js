import client from './client';

const getEpisodes = () => client.get('https://rickandmortyapi.com/api/episode')

export default {
    getEpisodes,
};