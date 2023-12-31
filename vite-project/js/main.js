import '/style.css'
import { DOMSelectors } from './Dom';
console.log(DOMSelectors);


function mystic(name){
  DOMSelectors.theme.addEventListener("click", function(event){
      event.preventDefault
      if (document.body.classList.contains("maintheme")) {
          document.body.classList.add("mystic");
          document.body.classList.remove("maintheme")
          document.body.classList.add("main");
          let img = document.querySelector(".logo");
          img.setAttribute("src", name);
      } 
      if (document.body.classList.contains("valor")) {
          document.body.classList.add("mystic");
          document.body.classList.remove("valor")
          document.body.classList.add("main");
          let img = document.querySelector(".logo");
          img.setAttribute("src", name);
      } 
      if (document.body.classList.contains("instinct")) {
          document.body.classList.add("mystic");
          document.body.classList.remove("instinct")
          document.body.classList.add("main");
          let img = document.querySelector(".logo");
          img.setAttribute("src", name);
      }  
  })

}

function instinct(name){
  DOMSelectors.theme2.addEventListener("click", function(event){
      event.preventDefault
      if (document.body.classList.contains("maintheme")) {
          document.body.classList.add("instinct");
          document.body.classList.remove("maintheme")
          document.body.classList.add("main");
          let img = document.querySelector(".logo");
          img.setAttribute("src", name);
      }
      if (document.body.classList.contains("mystic")) {
          document.body.classList.add("instinct");
          document.body.classList.remove("mystic")
          document.body.classList.add("main");
          let img = document.querySelector(".logo");
          img.setAttribute("src", name);
      } 
      if (document.body.classList.contains("valor")) {
          document.body.classList.add("instinct");
          document.body.classList.remove("valor")
          document.body.classList.add("main");
          let img = document.querySelector(".logo");
          img.setAttribute("src", name);
      } 
  })

}

function valor(name){
  DOMSelectors.theme3.addEventListener("click", function(event){
      event.preventDefault
      if (document.body.classList.contains("maintheme")) {
          document.body.classList.add("valor");
          document.body.classList.remove("maintheme")
          document.body.classList.add("main");
          let img = document.querySelector(".logo");
          img.setAttribute("src", name);
      }
      if (document.body.classList.contains("mystic")) {
          document.body.classList.add("valor");
          document.body.classList.remove("mystic")
          document.body.classList.add("main");
          let img = document.querySelector(".logo");
          img.setAttribute("src", name);
      }
        
      if (document.body.classList.contains("instinct")) {
          document.body.classList.add("valor");
          document.body.classList.remove("instinct")
          document.body.classList.add("main");
          let img = document.querySelector(".logo");
          img.setAttribute("src", name);
  
      }
  })
}

mystic('/mystic.png');
instinct('/instinct.png');
valor('/valor.png');

//const URL2 = "https://ex.traction.one/pokedex/pokemon/"
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
//getData(URL2); 

function clear() {  
  DOMSelectors.gallery.innerHTML=''
}

// function clearButtons() {  
//   DOMSelectors.buttonFlip.innerHTML=''
// }

// function backButtons() {  
//   DOMSelectors.buttonFlip.innerHTML=`
//   <button type = "button" class = "next1">Page 2</button>
//   <button type = "button" class = "next2">Page 3</button>
//   <button type = "button" class = "next3">Page 4</button>
//   <button type = "button" class = "next4">Page 5</button>`
// }

//id(DOMSelectors.form, "pokemon")
function card(btn, endpoint){
  btn.addEventListener("click", function(event){
    event.preventDefault();
    clear();
    //clearButtons()
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
            <h3>${item.name}</h3>
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
card(DOMSelectors.form3, "region") 

function berries(){
  DOMSelectors.form2.addEventListener("click", function(event){
    event.preventDefault();
    clear()
    //clearButtons()
    async function berry(){
      for(let i=1; i<=64; i++){
        try{
          const get = await fetch(`${URL}berry/${i}`);
          const ber = await get.json();
          console.log(ber);
          function fruit(x){
            DOMSelectors.gallery.insertAdjacentHTML("beforeend",
            `<div class="card">
            <h2>${x.name}</h2>
            <img src = "/${x.name}-berry.png" class = "card-img" alt = "error"></img>
            <h3>Id: ${x.id}</h3>
            <h3>Size: ${x.size}</h3>
            <h3>Firmness: ${x.firmness.name}</h3>
            <h3>Firmness: ${x.smoothness}</h3>
            </div>`
            )
          }
          fruit(ber)
        }catch(error){
          console.error(error);
        }
      }
    }
    berry();
  })
}

berries();

function id(btn, x, y){
  btn.addEventListener("click", function(event){
    event.preventDefault();
    clear()
    async function pokemon(){
      for(let i=x; i<=y; i++){
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

id(DOMSelectors.form, 1, 50);
id(DOMSelectors.form4, 51, 100)
id(DOMSelectors.form5, 101, 150);
id(DOMSelectors.form6, 151, 200);
id(DOMSelectors.form7, 201, 250);

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
      //clearButtons()
    }
    clearFields();
  })
}
search()

function type(x){
  if(x.types.length == 2){
    const z = x.types[1].type.name
    let type = z
    console.log(type)
    return type
  }
  if(x.types.length == 1){
    const y = "only one"
    let type = y
    console.log(type)
    return type
  }
type()
}
function main(x){
  const string = type(x)

  DOMSelectors.gallery.insertAdjacentHTML("beforeend",
    `<div class="card">
    <h2>${x.name}</h2>
    <img src = "${x.sprites.front_default}" class = "card-img" alt = "error"></img>
    <h3>Id: ${x.id}</h3>
    <h3>Type 1: ${x.types[0].type.name}</h3>
    <h3>Type 2: ${string}</h3>
    <h3>Base EXP: ${x.base_experience}</h3>
    <h3>Height: ${x.height}</h3>
    <h3>Weight: ${x.weight/10} kg</h3>
    </div>`
  )
}

function clearFields(){
  DOMSelectors.input.value = ""
  }

