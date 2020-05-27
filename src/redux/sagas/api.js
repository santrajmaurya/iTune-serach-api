import axios from "axios";

export const getSongs = (search) => {
  return axios.get(`https://itunes.apple.com/search?term=${search}`);
};
