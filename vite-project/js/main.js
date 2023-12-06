import '/style.css'

const DOMSelectors = {
  card: document.querySelector(".card"),
  form1: document.querySelector(".SS"),
  form2: document.querySelector(".App"),
  form3: document.querySelector(".Vegan"),
  form4: document.querySelector(".Entree"),
  form5: document.querySelector(".Sushi"),
  form6: document.querySelector(".Dessert"),
  form7: document.querySelector(".Drink"),
  form: document.querySelector(".Main"),
  h1:document.querySelectorAll("h1"),
  h2: document.querySelectorAll(".name"),
  h3:document.querySelectorAll(".type"),
  h4:document.querySelectorAll(".veganornot"),
  h5:document.querySelectorAll(".price"),
  img: document.querySelectorAll(".card-img"),
  gallery: document.querySelector(".flex-container"),
  button:document.getElementById("#btn"),
  text:document.querySelector("#text"),
  empty:document.querySelector(".nothing"),
  pic:document.querySelector(".img"),
  theme:document.querySelector(".theme")
  /* point:document.querySelectorAll(".point"), //gets all instances of this
  pointTwo:document.getElementById("pointTwo"), */
};
console.log(DOMSelectors)
const URL = ``
// const URL = `https://sv443.net/jokeapi/v2`;
//X-APIKEY
//https://docs.holodex.net/
async function getData(URL){
    try{
      const response = await fetch(URL);
      const data = await response.json();
      console.log(data);
    } catch(error){
      document.querySelector("h1").textContent = `Sorry I cannot find ${response}`
    }
}
getData(URL);

/* const url = `https://sv443.net/jokeapi/v2`;
async function getData(url){
    try{
      const response = await fetch(url);
      if(response.stats != 200){
        throw new Error(response);
      }
      console.log(response);
      const data = await response.json();
      console.log(data);
      document.querySelector("h1").textContent = data.content;
      document.querySelector("h2").textContent = data.author;
    } catch(error){
      document.querySelector("h1").textContent = `Sorry I cannot find ${response}`
    }
} */

/* function greet(name){
  const greetPromise = new Promise(function(resolve,reject){
  resolve(`Hello ${name}`);
  });
  return greetPromise;
}
const Aaron= greet("Aaron");
console.log(Aaron);
Aaron.then((result)=>{
  console.log(result)
}) */