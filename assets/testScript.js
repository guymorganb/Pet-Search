// function toggleImageHighlight() {
//     const checkbox = document.getElementById("category");
//     checkbox.checked = !checkbox.checked;
//   }
  const image = document.getElementById("img");

  image.addEventListener("click", () => {
    console.log("Image is clicked.");
    // You can also check the checkbox state here if needed
    const checkbox = document.getElementById("category");
    console.log("Checkbox is checked:", checkbox.checked);
  });


// let petsUrl = 'https://api.petfinder.com/v2/animals?type=dog&page=2'
// let optionsData = {
//     headers:{
//         Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJFb2hoMkRUOXRmdlZKSGhxY0lMTXV0Q3A2NWRqT1RpbjNqZ1A5eU96bkZTVE5SNU5yOCIsImp0aSI6IjIwNWVjMzk5ZmQ3NzNjMzllNjU4MjQ1NWJjMzE2MzQ1MDI1ZWQzYWYyM2MzZThhYWE4MzZmNWM4NTIyMzUxZGQzN2MwOWM4MjAxZWY5M2I4IiwiaWF0IjoxNjg0MzgxMDk3LCJuYmYiOjE2ODQzODEwOTcsImV4cCI6MTY4NDM4NDY5Nywic3ViIjoiIiwic2NvcGVzIjpbXX0.WxTxSoDWe0oGrIUA4zvrNWARjFuKr3XdR-IHkRSp6jLVRoZ9ClM2VzrN9O7myiO1jzLXKrMmhMw45FJUNuIBIxegtloOWOPAROVmUum9yj7XwzuwhtjIhkMbDX16VDDStmqVPOg4tpc3VnFh8pwWLERrvjepwloOeKqLYHnM9gPvpEV1ai0stGrJL30jGMJiCgfyGYSBD7SGBr5S8ZMmgEZHX3Aop3QRRIaaSfGIspvUZIhCcMDH2Yo9Lgab_RhanzrlmLGXMuFN5aT779mz_noFkdA_5cH9BMh36Nowr4bDde0HSd2-GwnoAyhfZlnv9jY0WBSHf17llLnU4xMChw'
//       }
// }



// async function getApi(url, options) {

//     try{
//         let response = await fetch(url,options)
//         if(response.ok){
//             let jsonData = await response.json();
//             return jsonData;
//         }else{
//             throw new Error('network response not ok')
//         }
//     }catch(error){
//         console.log('Error: ', error)
//     }
// //         .then(function (response) {
// //       if (response.status == 200) {
// //         console.log(response.status)
// //       }
// //       return response.json();
// //   }).then(function(data){
// //     console.log(data);
// //   })
// }

// function getPetData(){getApi().then(function(){

// })}

// getPetsApi();

// let personalityUrl = 'https://big-five-personality-insights.p.rapidapi.com/api/big5'

// function personalityApi() {

//     fetch(personalityUrl,{
//         method: 'POST',
//         headers: {
//             'content-type': 'application/json',
//             'X-RapidAPI-Key': '0d00143dfemshcfa11c25093ca9bp1442f9jsnf5e008afc921',
//             'X-RapidAPI-Host': 'big-five-personality-insights.p.rapidapi.com'
//         },
//         body: [
//             {
//                 id: '1',
//                 language: 'en',
//                 text: 'I love this service'
//             }
//         ]
//     })
//       .then(function (response) {
//         if (response.status == 200) {
//           console.log(response.status)
//         }
//         return response.json();
//     }).then(function(data){
//       console.log(data);
//     })
  
//   }
  
//   personalityApi();