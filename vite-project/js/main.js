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
      `   )
        })
      }catch(error){
        console.error(error);
      } 
    }
    otherButtons();
  })
}

card(DOMSelectors.form1, "type")
card(DOMSelectors.form2, "berry")
card(DOMSelectors.form3, "region")

function id(){
  DOMSelectors.form.addEventListener("click", function(event){
    event.preventDefault();
    clear()
    async function pokemon(){
      for(let i=1; i<=99; i++){
        try{
          const get = await fetch(`${URL}pokemon/${i}`);
          const poke = await get.json();
          console.log(poke);
          main(poke)
        }catch(error){
          console.error(error);
        }
      }
    }
    pokemon();
  })
}

id();

function search(){
  DOMSelectors.search.addEventListener("submit", function(event){
    event.preventDefault();
    const searchInput = DOMSelectors.input.value;
    if(searchInput){
      const url = URL + "pokemon/" + searchInput.toLowerCase();
      async function getData(){
        try{
          const response = await fetch(url)
          const data = await response.json();
          console.log(data);
          main(data);
        }catch(error){
          console.log(error)    
        }
      }
      getData(); 
      clear();
    }
    clearFields();
  })
}
search()


function main(x){
  /*const z = x.types[1].type.name
  if(x.types.length == 2){
   let type = z
   console.log(type)
  }else{
    let type = null
    console.log(type)
  } */
 
  DOMSelectors.gallery.insertAdjacentHTML("beforeend",
    `<div class="card">
    <h2>${x.name}</h2>
    <img src = "${x.sprites.front_default}" class = "card-img" alt = "error"></img>
    <h3>Id: ${x.id}</h3>
    <h3>Type: ${x.types[0].type.name}</h3>
    <h3>Base EXP: ${x.base_experience}</h3>
    <h3>Height: ${x.height}</h3>
    <h3>Weight: ${x.weight/10} kg</h3>
    </div>`
  )
}

function clearFields(){
  DOMSelectors.input.value = ""
  }

