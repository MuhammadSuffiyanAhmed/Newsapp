
let showDiv = document.getElementById("newsDiv")
let serach2 = document.getElementById("news")
let dated = new Date();
let data = dated.toDateString();
let year = dated.getFullYear();
let month = dated.getMonth()
let date = dated.getDate();
let fourmula = year+"-"+month+"-"+date
console.log(fourmula)

let serach =() =>{
    fetch(`https://newsapi.org/v2/everything?q=${serach2.value}&from=${fourmula}&sortBy=publishedAt&apiKey=df0b9aa1af5e4a6a9561d41a255e00b4`)
.then(data => data.json())
.then(data => {
    for(let i=0; i<data.articles.length; i++){
        showDiv.innerHTML += `
        <div class="card m-2" style="width: 18rem;">
            <img src="${data.articles[i].urlToImage}" id="image" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${data.articles[i].title}</h5>
              <p id="para" class="card-text">${data.articles[i].description}</p>
            </div>
          </div>
        `;
        
    }
})
}
// 2023-09-12

// fetch("https://newsapi.org/v2/everything?q=tesla&from=2023-09-14&sortBy=publishedAt&apiKey=df0b9aa1af5e4a6a9561d41a255e00b4")
// .then(data => data.json())
// .then(data => {
//     for(let i=0; i<data.articles.length; i++){
//         showDiv.innerHTML += `
//         <div class="card m-2" style="width: 18rem;">
//             <img src="${data.articles[i].urlToImage}" id="image" class="card-img-top" alt="...">
//             <div class="card-body">
//               <h5 class="card-title">${data.articles[i].title}</h5>
//               <p id="para" class="card-text">${data.articles[i].description}</p>
//             </div>
//           </div>
    
//         `
//     }
//   })
// console.log(data.articles[0].urlToImage)

// Some quick example text to build on the card title and make up the bulk of the card's content.

// <a href="#" class="btn btn-primary">Go somewhere</a>

// {
//   for(let i=0; i<data.articles.length; i++){
//       showDiv.innerHTML += `
//       <div class="card m-2" style="width: 18rem;">
//           <img src="${data.articles[i].urlToImage}" id="image" class="card-img-top" alt="...">
//           <div class="card-body">
//             <h5 class="card-title">${data.articles[i].title}</h5>
//             <p id="para" class="card-text">${data.articles[i].description}</p>
//           </div>
//         </div>
  
//       `
//   }
// }





