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

//id(DOMSelectors.form, "pokemon")
function card(btn, endpoint){
  btn.addEventListener("click", function(event){
    event.preventDefault();
    clear();
async function otherButtons(){

  try{
    const get = await fetch(`${URL}${endpoint}`);
    const poke = await get.json();
    console.log(poke);
    //<img src = "item.front_default" class = "card-img" alt = "error"></img>
    //<a href= "${URL}${endpoint}/${index + 1}">Pokemon Info</a>
    poke.results.forEach((item, index)=>  {
      DOMSelectors.gallery.insertAdjacentHTML("beforeend", `
      <div class="card">
      <h2>${item.name}</h2>
      <h3>${index + 1}</h2>
      </div>
      `)})
   

  }catch(error)
  {console.error(error);}

}
otherButtons();
})}

card(DOMSelectors.form1, "type")
card(DOMSelectors.form2, "berry")
card(DOMSelectors.form3, "region")

function id(btn, endpoint){
  btn.addEventListener("click", function(event){
    event.preventDefault();
    clear()
async function pokemon(){
  for(let i=1; i<=99; i++){
  try{
    const get = await fetch(`${URL}${endpoint}/${i}`);
    const poke = await get.json();
    console.log(poke);

    function main(poke){
      DOMSelectors.gallery.insertAdjacentHTML("beforeend",
        `<div class="card">
        <h2>${poke.name}</h2>
        <img src = "${poke.sprites.front_default}" class = "card-img" alt = "error"></img>
        <h3>Id: ${poke.id}</h3>
        <h3>Base EXP: ${poke.base_experience}</h3>
        <h3>Height: ${poke.height}</h3>
        <h3>Weight: ${poke.weight}</h3>
        </div>`
        )}
    main(poke)
  }catch(error)
  {console.error(error);}

}
}
pokemon();
})}

id(DOMSelectors.form, "pokemon")


function search(){
  DOMSelectors.search.addEventListener("submit", function(event){
    event.preventDefault();
    const searchInput = DOMSelectors.input.value;
    if(searchInput){
      const url = URL + "pokemon/" + searchInput;
      async function getData(){
        try{
          const response = await fetch(url)
          const data = await response.json();
          console.log(data);
          
          function cardSearch(poke){
            DOMSelectors.gallery.insertAdjacentHTML("beforeend",
            `<div class="card">
            <h2>${poke.name}</h2>
            <img src = "${poke.sprites.front_default}" class = "card-img" alt = "error"></img>
            <h3>Id: ${poke.id}</h3>
            <h3>Base EXP: ${poke.base_experience}</h3>
            <h3>Height: ${poke.height}</h3>
            <h3>Weight: ${poke.weight}</h3>
            </div>`
            )
          }
          cardSearch(data)
      
        } catch(error){
          console.log(error)    
        }
      }
      getData(); 
      clear();
    }
    clearFields();
})}
search()

function clearFields(){
  DOMSelectors.input.value = ""
  }