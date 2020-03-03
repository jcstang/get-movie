const axios = require('axios');
function getMovie(searchTerm, apiKey) {
  searchTerm = encodeURIComponent(searchTerm.trim());
  let queryURL = `http://www.omdbapi.com/?t=${searchTerm}&y=&plot=short&apikey=${apiKey}`;

  axios.get(queryURL)
    .then(function (response) {
      console.log(`movie response data:\n ${response.data}`);
      printMovieResults(response.data);
      
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

function printMovieResults(data) {
  //version 2
  let movieData = data;

      if (movieData.Response === 'False') {
        return console.log(`No go!... ${movieData.Error}`);
      } else {
        // found a movie
        console.log("-----------------------------------------------");
        console.log(`Title:\t\t\t ${movieData.Title}`);
        console.log(`Year:\t\t\t ${movieData.Year}`);
        console.log(`IMDB rating:\t\t ${movieData.Ratings[0].Value}`);
        console.log(`Rotten Tomatoes rating:\t ${movieData.Ratings[1].Value}`);
        console.log(`Movie Produced in:\t ${movieData.Country}`);
        console.log(`Language:\t\t ${movieData.Language}`);
        console.log(`Plot:\t ${movieData.Plot}`);
        console.log(`Actors:\t ${movieData.Actors}`);
        console.log("-----------------------------------------------");

      }
}


module.exports = {
  getMovie: getMovie,
  printMovieResults: printMovieResults
}