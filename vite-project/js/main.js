import '/style.css'
import { DOMSelectors } from './Dom';
console.log(DOMSelectors);

/* function region(){
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

region();
   */
const URL = "https://pokeapi.co/api/v2/pokemon"
//const URL = "https://pokeapi.co/api/v2/{endpoint}/"
//use ? for querue parameters, & is adding additional auerues.
async function getData(URL){
  try{
    const response = await fetch(URL)
    const data = await response.json();
    console.log(data);

    function all(btn,filter){
      btn.addEventListener("click", function(event){
        event.preventDefault();
      
        function main(){
          filter.results.forEach((item)=>  {
          DOMSelectors.gallery.insertAdjacentHTML("afterbegin", `
           <div class="card">
           <div class="name">${item.name}<div>
           </div>`)})
          }
        main();
      })
      } 
      all(DOMSelectors.form1,data);

  } catch(error){
    console.log(error)    
  }
}
getData(URL);  

/* const URL = "https://pokeapi.co/api/v2/"
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
    const quote = await fetchData(URL);
    apiResponseDOM.innerHTML = `Quote: ${quote.content}`;
};
putQuoteInHTML(); */
//Pokemon name, suggest what they me



//Pokemon name, suggest what they meant if spelled wrong for error
//Different regional forms, "change theme"
