const request = require('request');

const catBreedDescription = function (breed) {
  const domain = " https://api.thecatapi.com/v1/breeds/search?q="+breed
  request(domain, function (error, response, body) {

    console.log(typeof(body));

    const data = JSON.parse(body);
    console.log('data: ', data[0]['description']); 

    if (error) {
      console.error('error:',error);
    }

  });  
}
catBreedDescription ('Siberian')


