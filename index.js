//homework: chain functions to generate the phrase Fluffykins is a Dalmatian with spots!

var api = require('./api');

function requestName () {
  return new Promise(function(resolve, reject) {
    api.getName(function(err, name){
      if(err) {
        reject(err);
      }
      resolve(name);
    });
  });
}

//remember the (arg, func())
function requestBreed (name) {
  return new Promise(function(resolve, reject) {
    api.getBreed(name, function(err, breed){
      if(err) {
        reject(err);
      }
      resolve(breed);
    });
  });
}

function requestColor (breed) {
  return new Promise(function(resolve, reject) {
    api.getCoatColor(breed, function(err, color){
      if(err) {
        reject(err);
      }
      resolve(color);
    });
  });
}

//now chain
requestName().then(function(nameStr) {
  return requestBreed(nameStr);
}).then(function(breed){
  return requestColor(breed);
}).then(function(color){
  console.log(color); //color is defined
}).catch(function(err){
  console.log(err);
});
