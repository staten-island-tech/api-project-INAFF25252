const URL = `https://sv443.net/jokeapi/v2`;

async function getData(URL){
    try{
      const response = await fetch(URL);
      const data = await response.json();
      console.log(data);
    } catch(error){
      document.querySelector("h1").textContent = `Sorry I cannot find ${response}`
    }
}
getData(URL);

/* const url = `https://sv443.net/jokeapi/v2`;
async function getData(url){
    try{
      const response = await fetch(url);
      if(response.stats != 200){
        throw new Error(response);
      }
      console.log(response);
      const data = await response.json();
      console.log(data);
      document.querySelector("h1").textContent = data.content;
      document.querySelector("h2").textContent = data.author;
    } catch(error){
      document.querySelector("h1").textContent = `Sorry I cannot find ${response}`
    }
} */

/* function greet(name){
  const greetPromise = new Promise(function(resolve,reject){
  resolve(`Hello ${name}`);
  });
  return greetPromise;
}
const Aaron= greet("Aaron");
console.log(Aaron);
Aaron.then((result)=>{
  console.log(result)
}) */