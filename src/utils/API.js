import axios from "axios";

// const APIKEY = "&api_key=dc6zaTOxFJmzC&limit=20";
const APIKEY= "&api_key="+process.env.REACT_APP_GIPHY_APIKEY;
const BASEURL = "https://api.giphy.com/v1/gifs/search?q=";

// Export an object with a "search" method that searches the Giphy API for the passed query
console.log(APIKEY)
export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};