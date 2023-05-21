/**
 * PetFinder
 * JavaScript
 * Search for animals that need homes
 */
// making an object to hold the authKey variables to run authorization

function setStorage(key, value){
    localStorage.setItem(key, value)
}
// saves auth key to local storage and checks its age
function authKeyExpired(){
    let currTimeStamp = Math.floor(Date.now() / 1000);
    let timeDiff = currTimeStamp - localStorage.exp
    const expiryTime = 3600;
    if(timeDiff >= expiryTime){
        localStorage.removeItem('token')
        localStorage.removeItem('exp')
    }
    return (timeDiff >= expiryTime || localStorage.token === undefined);
};
async function getToken() {
    // confirmes authKey is valid, will call API for new key when needed
    if(authKeyExpired()){
    const clientId = 'Eohh2DT9tfvVJHhqcILMutCp65djOTin3jgP9yOznFSTNR5Nr8';
    const clientSecret = '77mOBQIaScP5uUxJw66mkNdWTBJ5wwQvrz5QXgdK';
    const tokenEndpoint = 'https://api.petfinder.com/v2/oauth2/token';
// "grant_type=client_credentials&client_id={CLIENT-ID}&client_secret={CLIENT-SECRET}" https://api.petfinder.com/v2/oauth2/token
    const body = new URLSearchParams();
    body.append('grant_type', 'client_credentials');
    body.append('client_id', clientId);
    body.append('client_secret', clientSecret);
// the URLSearchParams object, which allows you to create a URL-encoded string by appending key-value pairs. 
// The Content-Type header is set to 'application/x-www-form-urlencoded' which denotes the format of the data being sent in the request body, 
// then the request body is passed as a string using body.toString().
// When sending data in this format, JavaScript's 
// URLSearchParams() object is commonly used to construct the request body
// it provides an easy way to create and manipulate URL-encoded data.
    try {
      const response = await fetch(tokenEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: body.toString(),
      });
// Content-Type header is used to specify the MIME type (media type) of the data in the request or response body. 
// In the case of 'application/x-www-form-urlencoded', it indicates that the data is encoded as key-value pairs in a URL-encoded format.
// The Content-Type header of 'application/x-www-form-urlencoded' 
// is set to inform the server that the request body contains URL-encoded data, and the URLSearchParams() object is used to construct that data.
      if (response.ok) {
        const data = await response.json();
        let token = data.access_token
        setStorage('token', token)
        let expiration = Math.floor(Date.now() / 1000)
        setStorage('exp', expiration)
        console.log('Everything OK ' + "BeginTimeStamp: " + expiration)
        //return token;
      } else {
        throw new Error('Network response not OK');
      }
    } catch (error) {
      console.log('Error:', error);
    }
    }else {
        return
    }
}
// `https://api.petfinder.com/v2/animals?type=dog&page=2`
// `https://api.petfinder.com/v2/types/dog/breeds` <--works
// async function to get pet data (this should be integrated with getToken() because they are dependencies) but not reliant upon other functions
async function getAnimals(type, location, breed) {      // this function will need to be modified later to accomodate search results
    const url = `https://api.petfinder.com/v2/types/dog/breeds`
    try{
    // since token must be check against time, we need to call getToken() here (we are using persistant data for the key)
    await getToken();
    let response = await fetch(url,{
      headers:{
        Authorization: `Bearer ${localStorage.token}`, 
        }
    })
    if(response.ok) {
        let data = await response.json();
        //console.log(data)
        return data
    }else{
        throw new Error('Network not OK in getAnimals')
    }
    }catch(error){
    console.log('Error: in Type data ', error)
    }
}
async function getData(type, location, breed){
// do not want getToken() to be here or it will mess up the flexibility of the code
    try{
        let adoptionData = await getAnimals(type, location, breed);
        console.log(adoptionData)
        return adoptionData
    }catch(error){
        console.log('Error', error)
    }
}

function getAdoptionData(type, location, breed){
    getData(location, type, breed).then(function (adoptionData){
        console.log(adoptionData)
})
}
//getData()

//getAdoptionData()

/////////////////////////////gets wikapedia api for dog breeds////////////////////////////////////////



async function getWikipediaApi(breed) {
    // encodeURIComponent will ensure the string is properly formated to go into the URL.
    let encodeBreed = encodeURIComponent(breed)
    let url = `https://dog-breeds2.p.rapidapi.com/dog_breeds/breed/${encodeBreed}`;
    let options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0d00143dfemshcfa11c25093ca9bp1442f9jsnf5e008afc921',
            'X-RapidAPI-Host': 'dog-breeds2.p.rapidapi.com'
        }
    };
    try{
        let response = await fetch(url, options);
        if(response.ok){
            let data = await response.json();
            return data;
        }else{
            throw new Error('network response not ok')
        }
    }catch(error){
        console.log('Error:inside WikiApi', error)
    }

}

function getBreedInfo(breed){
    getWikipediaApi(breed).then(function(data){
        console.log(data)
})} 

//getBreedInfo('bichon')
/////////////////////////////gets wikapedia api for dog breeds////////////////////////////////////////