
// GET https://api.petfinder.com/v2/types/{type}/breeds Returns possible breed values for a given animal type

//'./Pet-Search/assets/petSearchResults.html?type=${}'
//GET https://api.petfinder.com/v2/organizations

// base call single animal type GET https://api.petfinder.com/v2/types/{type}
// search by distance and type and sort by distance
// https://api.petfinder.com/v2/animals?type=dog&location=78582&distance=75&sort=-distance
let zipCode = $("#navbarSupportedContent")
let appendModal = $('.fa-search')
const animalDataFromIndex = {
    type : "",
    breed : ""
}
const userData = {
    zip : "",
    distance : "",
    fromTypeButton : "",
}
function modalAlert() {
    let divEl = $(`
    <div id="dialog" title="Input error" class="ui-widget rounded-1">
    <p>This dialoge will show you some information, then explode.</p>
    </div>`)
    divEl.insertAfter(appendModal)
    $("#dialog").dialog({
        modal: true,
        height: 200,
        draggable: true,
        autoOpen: false,
    show: {
        effect: "blind",
        duration: 500
      },
    hide: {
        effect: "explode",
        duration: 750
      },
    buttons: [{
        text: "Ok",
        click: function() {
        $( this ).dialog( "close" );
        },
          // Uncommenting the following line would hide the text,
          // resulting in the label being used as a tooltip
          // showText: true,
        }],
    });
    $( "#dialog" ).dialog( "open" );
};

/////////////////////code resused from index.js////////////////////////
// sets items in local storage
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
// gets a access token
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
// async function to get pet data (this should be integrated with getToken() because they are dependencies) but not reliant upon other functions
async function getAnimals(type) {      // this function will need to be modified later to accomodate search results
    const url = `https://api.petfinder.com/v2/types/${type}/breeds`
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
async function getData(type){
    // do not want getToken() to be here or it will mess up the flexibility of the code *CLEAN CODE* is the goal
        try{
            let adoptionData = await getAnimals(type);
            return {adoptionData, type}
        }catch(error){
            console.log('Error', error)
        }
}
// get data from search bar
function parseSearchBar(){
    // gets url data
    let windowData = document.location.href.split('?')[1]
    // splits for testing
    windowData = windowData.split('=')
    if(windowData.length == 2){
        // joins for parsing
        windowData = windowData.join('=')
        // sets animal object data
        animalDataFromIndex.type = windowData
    }else if(windowData.length == 4){
        // joins for parsing
        windowData = windowData.join('=')
        // matches all occurrences of "%20" in the string. The g flag indicates a global search, it will replace all instances of "%20" instead of just the first occurrence.
        windowData = windowData.replace(/%20/g, " ")
        windowData = windowData.replace(/breed=/g, "")
        windowData = windowData.split('&')
        // sets animal object data
        animalDataFromIndex.type = windowData[0]
        animalDataFromIndex.breed = windowData[1]
        // sets user object data
        userData.zip = windowData[windowData.length-1]
    }
}
function searchByDistance(){
    $('.distance').click(function(event){
        userData.distance = event.target.innerText
        if(/miles/.test(userData.distance)){
        userData.distance = userData.distance.replace(/miles/g, "").trim();
        }
        if (userData.distance == 'Any'){
            userData.distance = '500'
        }
        console.log(userData.distance)
    }) 
}
function searchByType(){
    $('.types').click(function(event){
        //pass a callback function to then().
        let type = event.target.innerText
        if (type){
            // set object data from type dropdown button
            userData.fromTypeButton = type.slice(0, type.length-1)
        }
        }
    )
}

function getZipCode(){
    $("#zip").on('click', function(event){
        event.preventDefault()
        if(isNaN(zipCode.val()) || zipCode.val().length != 5 || searchBarDropMenu.val() == null){
            modalAlert()
        }else{
            userData.zip = zipCode.val()
            handleSearchResults()
            console.log(userData.zip)
        }
    }) 
}
function generateContent(){

}
function init(){

    parseSearchBar()
    searchByDistance()
    searchByType()
    getZipCode()

    
}

document.addEventListener('DOMContentLoaded', init())