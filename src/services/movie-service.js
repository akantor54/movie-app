import axios from "axios";

const urlBase = "https://api.themoviedb.org/3/movie/";
const key = process.env.REACT_APP_KEY;
const langDefault = "fr_FR";

export default class MovieService {
  static async getMovie(type, lang = langDefault, page = 2) {
    const url = `${urlBase}${type}?api_key=${key}&language=${lang}&page=${page}`;
    return await axios.get(url).then((m) => m.data.results);
  }
}
