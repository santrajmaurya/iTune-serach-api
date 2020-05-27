import axios from 'axios';

export const getSongs = (search) => {
         console.log("getSongs api call.");
         console.log(axios.defaults);
         return axios.get(
           `https://itunes.apple.com/search?term=${search}`
         );
       };