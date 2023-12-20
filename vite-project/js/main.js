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

function von(x){
  if(x === true){
    return "legendary"
  }else if(x===false){
    return 
  }
  }


function clear() {  
  DOMSelectors.gallery.innerHTML=''
}

function id(btn, endpoint){
  btn.addEventListener("click", function(event){
    event.preventDefault();
    clear();
async function otherButtons(){

  try{
    const get = await fetch(`${URL}${endpoint}`);
    const poke = await get.json();
    console.log(poke);
    
    poke.results.forEach((item, index)=>  {
      DOMSelectors.gallery.insertAdjacentHTML("afterbegin", `
      <div class="card">
      <h2>${item.name}</h2>
      <link rel = "stylesheet" href = >
      <h3>${index + 1}</h2>

      </div>`)})

  }catch(error)
  {console.error(error);}

}
otherButtons();
})}
id(DOMSelectors.form, "pokemon")
id(DOMSelectors.form1, "type")
id(DOMSelectors.form2, "berry")
id(DOMSelectors.form3, "pokemon-species")
 