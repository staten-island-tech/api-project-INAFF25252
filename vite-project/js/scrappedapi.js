/* 
function clear() {  
  DOMSelectors.gallery.innerHTML=''
}

function all(btn, endpoint){
  btn.addEventListener("click", function(event){
    event.preventDefault();
    clear();
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
          <h2>${item.name}</h2>
          <img src="${item.sprites.front_default}">

          </div>`)})
        }
        main();
  

        }catch(error){
          console.error(error);}

      }
    }
  pokemon();
})}


all(DOMSelectors.form, "pokemon/",)
all(DOMSelectors.form1, "type/")
all(DOMSelectors.form2, "berry/")
all(DOMSelectors.form3, "pokemon-species/") */

/* function id(btn, endpoint){
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

id(DOMSelectors.form, "pokemon/",)
id(DOMSelectors.form1, "type/")
id(DOMSelectors.form2, "berry/")
id(DOMSelectors.form3, "region/") */
//Pokemon name, suggest what they meant if spelled wrong for error
//Different regional forms, "change theme"

/* function species(btn, endpoint){
  btn.addEventListener("click", function(event){
    event.preventDefault();
 
async function legendary(){
  for(let i=1; i<=20; i++){
  try{
    const get = await fetch(`${URL}${endpoint}${i}`);
    const poke = await get.json();
    console.log(poke);

    if(poke.is_legendary === true){

    function main(){
      poke.forEach((item)=>  {
      DOMSelectors.gallery.insertAdjacentHTML("beforebegin", `
       <div class="card">
       <img src = "${item.name}" 
       </div>`)})
      }
      main();
    }
    if(poke.is_legendary === false){
      console.log("none")
    }
  

  }catch(error)
  {console.error(error);}

}
}
legendary();
})}


species(DOMSelectors.form3, "pokemon-species/") */
/* function id(btn, endpoint){
  btn.addEventListener("click", function(event){
    event.preventDefault();
    clear();
async function otherButtons(){

  try{
    const get = await fetch(`${URL}${endpoint}`);
    const poke = await get.json();
    console.log(poke);
    
    poke.results.forEach((item, index)=>  {
      DOMSelectors.gallery.insertAdjacentHTML("beforeend", `
      <div class="card">
      <h2>${item.name}</h2>
      <a href= "${URL}${endpoint}/${index + 1}">Pokemon Info</a>
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
id(DOMSelectors.form3, "region") */
/* function id(btn, endpoint){
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
id(DOMSelectors.form1, "type")
id(DOMSelectors.form2, "berry")
id(DOMSelectors.form3, "region") */