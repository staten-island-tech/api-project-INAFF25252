import '/style.css'
import { DOMSelectors } from './Dom';
console.log(DOMSelectors);

function theme(btn, x, y, z, m, name){
  btn.addEventListener("click", function(event){
    event.preventDefault
    if (document.body.classList.contains(m)) {
        document.body.classList.add(x);
        document.body.classList.remove(m)
        document.body.classList.add("main");
        let img = document.querySelector(".logo");
        img.setAttribute("src", name);
    } 
    if (document.body.classList.contains(z)) {
        document.body.classList.add(x);
        document.body.classList.remove(z)
        document.body.classList.add("main");
        let img = document.querySelector(".logo");
        img.setAttribute("src", name);
    } 
    if (document.body.classList.contains(y)) {
        document.body.classList.add(x);
        document.body.classList.remove(y)
        document.body.classList.add("main");
        let img = document.querySelector(".logo");
        img.setAttribute("src", name);
    }  
  })
}

theme(DOMSelectors.theme,"mystic","instinct","valor","maintheme",'/mystic.png');
theme(DOMSelectors.theme2,"instinct","mystic","valor","maintheme",'/instinct.png');
theme(DOMSelectors.theme3,"valor","instinct", "mystic", "maintheme",'/valor.png');

const URL = "https://pokeapi.co/api/v2/"
const dog = "https://dog.ceo/api/breeds/image/random";
console.log(fetch(URL));
console.log(fetch(dog));
//const URL = "https://pokeapi.co/api/v2/{endpoint}/"
//use ? for querue parameters, & is adding additional auerues.
async function getData(URL, URL2){
  try{
    const response = await fetch(URL)
    const data = await response.json();
    console.log(data);
    const dogResponse = await fetch(URL2)
    const dogData = await dogResponse.json();
    console.log(dogData);
    return dogData, data 
  } catch(error){
    console.log(error)    
  }
}
getData(URL, dog); 

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
        poke.results.forEach((item, index)=>  {
          DOMSelectors.gallery.insertAdjacentHTML("beforeend", `
            <div class="card">
            <h2>${item.name}</h2>
            <h3>${index + 1}</h2>
            <button type = "button" class = "var${index + 1}">All Pokemon: ${item.name}</button>
            </div>`   
          )
        })  
        const DOM = {
          var1:document.querySelector(".var1"),
          var2:document.querySelector(".var2"),
          var3:document.querySelector(".var3"),
          var4:document.querySelector(".var4"),
          var5:document.querySelector(".var5"),
          var6:document.querySelector(".var6"),
          var7:document.querySelector(".var7"),
          var8:document.querySelector(".var8"),
          var9:document.querySelector(".var9"),
          var10:document.querySelector(".var10"),
          var11:document.querySelector(".var11"),
          var12:document.querySelector(".var12"),
          var13:document.querySelector(".var13"),
          var14:document.querySelector(".var14"),
          var15:document.querySelector(".var15"),
          var16:document.querySelector(".var16"),
          var17:document.querySelector(".var17"),
          var18:document.querySelector(".var18"),
        }
        typeData(DOM.var1,"1")
        typeData(DOM.var2,"2")
        typeData(DOM.var3,"3")
        typeData(DOM.var4,"4")
        typeData(DOM.var5,"5")
        typeData(DOM.var6,"6")
        typeData(DOM.var7,"7")
        typeData(DOM.var8,"8")
        typeData(DOM.var9,"9")
        typeData(DOM.var10,"10")
        typeData(DOM.var11,"11")
        typeData(DOM.var12,"12")
        typeData(DOM.var13,"13")
        typeData(DOM.var14,"14")
        typeData(DOM.var15,"15")
        typeData(DOM.var16,"16")
        typeData(DOM.var17,"17")
        typeData(DOM.var18,"18")
      }catch(error){
        console.error(error);
      } 
    }
    otherButtons();    
  })
}
card(DOMSelectors.form1, "type") 

function regions(btn, endpoint){
  btn.addEventListener("click", function(event){
    event.preventDefault();
    clear();
    //clearButtons()
    async function region(){
      try{
       const get = await fetch(`${URL}${endpoint}`);
       const region = await get.json();
        console.log(region);
        region.results.forEach((item, index)=>  {
          DOMSelectors.gallery.insertAdjacentHTML("beforeend", `
            <div class="card">
            <h2>${item.name}</h2>
            <h3>${index + 1}</h2>
            </div>`   
          )
        })
      }catch(error){
        console.error(error);
      } 
    }
    region();
  })
}
regions(DOMSelectors.form3, "region") 

function typeData(btn,i){
  btn.addEventListener("click", function(event){
    event.preventDefault();
    clear();
    async function typeFilter(URL){
      try{
        const response = await fetch(`${URL}type/${i}`)
        const data = await response.json();
        console.log(data);
        data.pokemon.forEach((item)=>  {
          console.log(item)
          DOMSelectors.gallery.insertAdjacentHTML("beforeend", `
          <div class="card">
          <h3>${item.pokemon.name}</h2>
          </div>
          `)
        })
      }catch(error){
        console.log(error)    
      }
    }
    typeFilter(URL)
  })
}

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
            <h2>${x.name.toUpperCase()}</h2>
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
          const dogResponse = await fetch("https://dog.ceo/api/breeds/image/random")
          const dogData = await dogResponse.json();
          console.log(error)
          DOMSelectors.gallery.insertAdjacentHTML("beforeend",
          `
          <div class = "error">ERROR 404: Try Again</div>
          <div class = "error">Here take a dog pic:</div>
          <img src = "${dogData.message}" class = "card-img" alt = "error"></img>
          `
          )    
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
    <h2>${x.name.toUpperCase()}</h2>
    <img src = "${x.sprites.front_default}" class = "card-img" alt = "error"></img>
    <h3>Id: ${x.id}</h3>
    <h3>Type 1: ${x.types[0].type.name}</h3>
    <h3>Type 2: ${string}</h3>
    <h3>Base EXP: ${x.base_experience}</h3>
    <h3>Height: ${x.height/10} m</h3>
    <h3>Weight: ${x.weight/10} kg</h3>
    </div>`
  )
}

function clearFields(){
  DOMSelectors.input.value = ""
  }

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
