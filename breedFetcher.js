const request = require('request');

const breedToSearch = process.argv.slice(2);



const breedFetch = function() {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedToSearch}`, (error, response, body) => {
    
    const data = JSON.parse(body);
    
    if (!error === 200) {
      console.log('error:', error);
    } else {
      console.log(data[0].description);
    }
  
  });
};



breedFetch();