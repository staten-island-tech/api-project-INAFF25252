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


function all(btn, endpoint){
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


all(DOMSelectors.form, "pokemon/",)
all(DOMSelectors.form1, "type")
all(DOMSelectors.form2, "berry")
all(DOMSelectors.form3, "pokemon-species")


//Pokemon name, suggest what they meant if spelled wrong for error
//Different regional forms, "change theme"
