const request = require('request');

const breedFetch = function(breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    
    if (!error === 200) {
      callback(error);
    } else {
      const data = JSON.parse(body);
      
      if (data[0] === undefined) {
        return callback(error);
      }
      callback(error, data[0].description);
    }
  });
};





module.exports = { breedFetch };

