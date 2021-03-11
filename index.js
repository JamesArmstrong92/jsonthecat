const { breedFetch } = require('./breedFetcher');
const breedToSearch = process.argv.slice(2);

breedFetch(breedToSearch, (error, description) => {

  if (error) {
    console.log("Error", error);
  } else {
    console.log(description);
  }
});