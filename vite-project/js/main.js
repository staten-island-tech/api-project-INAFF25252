import '/style.css'
import { DOMSelectors } from './Dom';
console.log(DOMSelectors);


function mystic(){
  DOMSelectors.theme.addEventListener("click", function(event){
      event.preventDefault
      if (document.body.classList.contains("maintheme")) {
          document.body.classList.add("mystic");
          document.body.classList.remove("maintheme")
          document.body.classList.add("main");
          document.h1.classList.add("second");
          DOMSelectors.card.classList.toggle("second");
      } 
      if (document.body.classList.contains("valor")) {
          document.body.classList.add("mystic");
          document.body.classList.remove("valor")
          document.body.classList.add("main");
          document.h1.classList.add("second");
          DOMSelectors.card.classList.toggle("second");
      } 
      if (document.body.classList.contains("instinct")) {
          document.body.classList.add("mystic");
          document.body.classList.remove("instinct")
          document.body.classList.add("main");
          document.h1.classList.add("second");
          DOMSelectors.card.classList.toggle("second");
      }  
  })

}

function instinct(){
  DOMSelectors.theme2.addEventListener("click", function(event){
      event.preventDefault
      if (document.body.classList.contains("maintheme")) {
          document.body.classList.add("instinct");
          document.body.classList.remove("maintheme")
          document.body.classList.add("main");
          document.h1.classList.add("second");
          DOMSelectors.card.classList.toggle("second");
      } 
      if (document.body.classList.contains("mystic")) {
          document.body.classList.add("instinct");
          document.body.classList.remove("mystic")
          document.body.classList.add("main");
          document.h1.classList.add("second");
          DOMSelectors.card.classList.toggle("second");
      } 
      if (document.body.classList.contains("valor")) {
          document.body.classList.add("instinct");
          document.body.classList.remove("valor")
          document.body.classList.add("main");
          document.h1.classList.add("second");
          DOMSelectors.card.classList.toggle("second");
      } 
  })

}

function valor(){
  DOMSelectors.theme3.addEventListener("click", function(event){
      event.preventDefault
      if (document.body.classList.contains("maintheme")) {
          document.body.classList.add("valor");
          document.body.classList.remove("maintheme")
          document.body.classList.add("main");
          document.h1.classList.add("second");
          DOMSelectors.card.classList.toggle("second");
      }
      if (document.body.classList.contains("mystic")) {
          document.body.classList.add("valor");
          document.body.classList.remove("mystic")
          document.body.classList.add("main");
          document.h1.classList.add("second");
          DOMSelectors.card.classList.toggle("second");
      }  
      if (document.body.classList.contains("instinct")) {
          document.body.classList.add("valor");
          document.body.classList.remove("instinct")
          document.body.classList.add("main");
          document.h1.classList.add("second");
          DOMSelectors.card.classList.toggle("second");
      }  
  })
}

mystic();
instinct();
valor();

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
  }
  const y = null
  if(x.types.length == 1){
   let type = y
   console.log(type)
  }
 */
 
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

