import '/style.css'
import { DOMSelectors } from './Dom';
console.log(DOMSelectors);

/* function theme(){
  DOMSelectors.theme.addEventListener("click", function(event){
  event.preventDefault
  if (document.body.classList.contains("cool")) {
    document.body.classList.add("warm");
    document.body.classList.remove("cool")
    document.body.classList.add("main");
    document.h1.classList.add("second");
    DOMSelectors.card.classList.toggle("second");
  } else {
    document.body.classList.add("cool");
    document.body.classList.remove("warm")
    document.body.classList.add("main");
    document.h1.classList.add("second");
    DOMSelectors.card.classList.toggle("second");
  }
})

}

theme();
   */
const URL = "https://pokeapi.co/api/v2/pokemon/"
//const URL = "https://pokeapi.co/api/v2/{endpoint}/"
//use ? for querue parameters, & is adding additional auerues.
async function getData(URL){
  try{
    const response = await fetch(URL)
    if(!response.ok){
      throw new Error(response);
    }
    const data = await response.json();
    console.log(data);
    data.results.forEach((pokemon)=> console.log(pokemon))

  } catch(error){
    console.log("nope")    }
}
getData(URL);  
/* 
const filter = { 
}

function all(btn,filter){
btn.addEventListener("click", function(event){
  event.preventDefault();
  clear()

  function main(){
    filter.forEach((item)=>  {
    DOMSelectors.gallery.insertAdjacentHTML("afterbegin", `
     <div class="card">
     <img src = "${item.img}" alt="" class="card-img"><img>
     <div class = "name"> ${item.name} </div>
     <div class = "veganornot">${string}</div>
     <div class="type">${item.meal}</div>
     <div class="price">${item.price}</div>
     </div>`)})
    }
  main();
})
} */

//Pokemon name, suggest what they meant if spelled wrong for error
//Different regional forms, "change theme"

