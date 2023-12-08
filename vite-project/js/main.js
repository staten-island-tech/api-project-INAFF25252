import '/style.css'
import { DOMSelectors } from './Dom';
console.log(DOMSelectors);

  
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
//Pokemon name, suggest what they meant if spelled wrong for error
//Different regional forms, "change theme"

