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


const apiResponseDOM = document.getElementById("api-response");
const putQuoteInHTML = async () => {
    // defining an async arrow function
    const quote = await getData(URL);
    apiResponseDOM.innerHTML = `Quote: ${quote.content}`;
};
putQuoteInHTML(); 
 
async function pokemon(){
  try{
    const get = await fetch("https://pokeapi.co/api/v2/pokemon");
    const poke = await get.json();
    console.log(poke);
    return poke

  } catch(error)
  {console.error(error);

}
}
 pokemon();
//Pokemon name, suggest what they me



//Pokemon name, suggest what they meant if spelled wrong for error
//Different regional forms, "change theme"
