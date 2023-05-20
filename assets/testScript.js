

const clientId = 'Eohh2DT9tfvVJHhqcILMutCp65djOTin3jgP9yOznFSTNR5Nr8';
const clientSecret = '77mOBQIaScP5uUxJw66mkNdWTBJ5wwQvrz5QXgdK';
const tokenEndpoint = 'https://api.petfinder.com/v2/oauth2/token';



async function getToken(){  
    let resonse = await fetch(tokenEndpoint,{
      headers:{
        Authorization: 
      }
})
    .then(function (response) {
      if (response.status == 200) {
        console.log(response.status)
      }
      return response.json();
  }).then(function(data){
    console.log(data);
  })

}


// curl -d "grant_type=client_credentials&client_id={CLIENT-ID}&client_secret={CLIENT-SECRET}" https://api.petfinder.com/v2/oauth2/token

// // "Authorization: Bearer {YOUR_ACCESS_TOKEN}" GET https://api.petfinder.com/v2/animals?type=dog&page=2

// "grant_type=client_credentials&client_id={CLIENT-ID}&client_secret={CLIENT-SECRET}" https://api.petfinder.com/v2/oauth2/token

// function getApiToken(){
//     fetch ('https://api.petfinder.com/v2/oauth2/token',{
//         headers:{
//             Authorization: ''
//         }
//     })
// }





///////////////////////////////////get final the petfinder api/////////////////////////////////////////

// example let requestUrl = 'Authorization: GET https://api.petfinder.com/v2/animals?type=dog&page=2'

// function getApi() {

//   fetch('https://api.petfinder.com/v2/animals?type=dog&page=2',{
//     headers:{
//       Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJFb2hoMkRUOXRmdlZKSGhxY0lMTXV0Q3A2NWRqT1RpbjNqZ1A5eU96bkZTVE5SNU5yOCIsImp0aSI6IjIwNWVjMzk5ZmQ3NzNjMzllNjU4MjQ1NWJjMzE2MzQ1MDI1ZWQzYWYyM2MzZThhYWE4MzZmNWM4NTIyMzUxZGQzN2MwOWM4MjAxZWY5M2I4IiwiaWF0IjoxNjg0MzgxMDk3LCJuYmYiOjE2ODQzODEwOTcsImV4cCI6MTY4NDM4NDY5Nywic3ViIjoiIiwic2NvcGVzIjpbXX0.WxTxSoDWe0oGrIUA4zvrNWARjFuKr3XdR-IHkRSp6jLVRoZ9ClM2VzrN9O7myiO1jzLXKrMmhMw45FJUNuIBIxegtloOWOPAROVmUum9yj7XwzuwhtjIhkMbDX16VDDStmqVPOg4tpc3VnFh8pwWLERrvjepwloOeKqLYHnM9gPvpEV1ai0stGrJL30jGMJiCgfyGYSBD7SGBr5S8ZMmgEZHX3Aop3QRRIaaSfGIspvUZIhCcMDH2Yo9Lgab_RhanzrlmLGXMuFN5aT779mz_noFkdA_5cH9BMh36Nowr4bDde0HSd2-GwnoAyhfZlnv9jY0WBSHf17llLnU4xMChw'
//     }
//   })
//     .then(function (response) {
//       if (response.status == 200) {
//         console.log(response.status)
//       }
//       return response.json();
//   }).then(function(data){
//     console.log(data);
//   })

// }

// getApi();
///////////////////////////////////get final the petfinder api/////////////////////////////////////////


// let petsUrl = 'https://api.petfinder.com/v2/animals?type=dog&page=2'
// let optionsData = {
//     headers:{
//         Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJFb2hoMkRUOXRmdlZKSGhxY0lMTXV0Q3A2NWRqT1RpbjNqZ1A5eU96bkZTVE5SNU5yOCIsImp0aSI6IjIwNWVjMzk5ZmQ3NzNjMzllNjU4MjQ1NWJjMzE2MzQ1MDI1ZWQzYWYyM2MzZThhYWE4MzZmNWM4NTIyMzUxZGQzN2MwOWM4MjAxZWY5M2I4IiwiaWF0IjoxNjg0MzgxMDk3LCJuYmYiOjE2ODQzODEwOTcsImV4cCI6MTY4NDM4NDY5Nywic3ViIjoiIiwic2NvcGVzIjpbXX0.WxTxSoDWe0oGrIUA4zvrNWARjFuKr3XdR-IHkRSp6jLVRoZ9ClM2VzrN9O7myiO1jzLXKrMmhMw45FJUNuIBIxegtloOWOPAROVmUum9yj7XwzuwhtjIhkMbDX16VDDStmqVPOg4tpc3VnFh8pwWLERrvjepwloOeKqLYHnM9gPvpEV1ai0stGrJL30jGMJiCgfyGYSBD7SGBr5S8ZMmgEZHX3Aop3QRRIaaSfGIspvUZIhCcMDH2Yo9Lgab_RhanzrlmLGXMuFN5aT779mz_noFkdA_5cH9BMh36Nowr4bDde0HSd2-GwnoAyhfZlnv9jY0WBSHf17llLnU4xMChw'
//         }
// }
/////////////////////////////gets wikapedia api for dog breeds////////////////////////////////////////
// const url = 'https://dog-breeds2.p.rapidapi.com/dog_breeds';;
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '0d00143dfemshcfa11c25093ca9bp1442f9jsnf5e008afc921',
// 		'X-RapidAPI-Host': 'dog-breeds2.p.rapidapi.com'
// 	}
// };



// async function getApi(url, options) {

//     try{
//         let response = await fetch(url, options);
//         if(response.ok){
//             let data = await response.json();
//             console.log(data)
//             return data;
//         }else{
//             throw new Error('network response not ok')
//         }
//     }catch(error){
//         console.log('Error: ', error)
//     }

// }
// getApi(url, options)
/////////////////////////////gets wikapedia api for dog breeds////////////////////////////////////////
