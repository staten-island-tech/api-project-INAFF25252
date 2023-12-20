import '/style.css'
import { DOMSelectors } from './Dom';
console.log(DOMSelectors);

const URL = "https://pokeapi.co/api/v2/"
console.log(fetch(URL));
//const URL = "https://pokeapi.co/api/v2/{endpoint}/"
//use ? for querue parameters, & is adding additional auerues.
async function getData(URL){
  try{
    const response = await fetch(URL)
    const data = await response.json();
    console.log(data);
    return data

  } catch(error){
    console.log(error)    
  }
}
getData(URL);  


function clear() {  
  DOMSelectors.gallery.innerHTML=''
}

function all(btn, endpoint){
  btn.addEventListener("click", function(event){
    event.preventDefault();
    clear();
    async function pokemon(){
      for(let i=1; i<=20; i++){
        try{
        const get = await fetch(`${URL}${endpoint}${i}`);
        const poke = await get.json();
        console.log(poke);
        const pokemonList = [poke];
        const pokeCard = pokemonList.map;
        console.log(pokeCard)
        function main(){
          
        pokeCard.forEach((item)=>  {
          DOMSelectors.gallery.insertAdjacentHTML("afterbegin", `
          <div class="card">
          <h2>${item.name}</h2>
          <img src="${item.sprites.front_default}">

          </div>`)})
        }
        main();
  

        }catch(error){
          console.error(error);}

      }
    }
  pokemon();
})}


all(DOMSelectors.form, "pokemon/",)
all(DOMSelectors.form1, "type/")
all(DOMSelectors.form2, "berry/")
all(DOMSelectors.form3, "pokemon-species/")

/* function id(btn, endpoint){
  btn.addEventListener("click", function(event){
    event.preventDefault();
 
async function pokemon(){
  for(let i=1; i<=20; i++){
  try{
    const get = await fetch(`${URL}${endpoint}${i}`);
    const poke = await get.json();
    console.log(poke);

    function main(){
      poke.forEach((item)=>  {
      DOMSelectors.gallery.insertAdjacentHTML("afterbegin", `
       <div class="card">
       <img src = "${item.name}" 
       </div>`)})
      }
    main();
  

  }catch(error)
  {console.error(error);}

}
}
pokemon();
})}

id(DOMSelectors.form, "pokemon/",)
id(DOMSelectors.form1, "type")
id(DOMSelectors.form2, "berry")
id(DOMSelectors.form3, "pokemon-species") */
//Pokemon name, suggest what they meant if spelled wrong for error
//Different regional forms, "change theme"
