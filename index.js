const axios = require('axios');

`http://www.omdbapi.com/?t=${searchTerm}&y=&plot=short&apikey=trilogy`

function getMovie(searchTerm, apiKey) {
  searchTerm = encodeURIComponent(searchTerm.trim());
  let queryURL = `http://www.omdbapi.com/?t=${searchTerm}&y=&plot=short&apikey=${apiKey}`;

  axios.get(queryURL)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    })
    .finally(function() {
      console.log(
        `\nBye!`
      );
      
    });
}

function printMovieResults() {
  //version 2
}


module.exports = {
  getMovie: getMovie,
  printMovieResults: printMovieResults
}