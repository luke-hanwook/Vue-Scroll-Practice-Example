import axios from "axios";

export const INITIAL_DOMAIN = "https://pokeapi.co/api/v2/pokemon";

export const common = {
  fetchList(url) {
    return axios
      .get(url)
      .then(result => {
        const { data } = result;
        return {
          prev: data.previous,
          next: data.next,
          list: data.results
        };
      })
      .catch(error => {
        console.log(error);
      });
  },
  fetchData(url) {
    return axios
      .get(url)
      .then(result => {
        const { data } = result;
        return {
          name: data.species.name,
          sprite: data.sprites.front_default
        };
      })
      .catch(error => {
        console.log(error);
      });
  }
};
