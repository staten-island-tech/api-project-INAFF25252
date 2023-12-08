//"X-Api-Key": "ee5186e1-43e4-4517-9356-5b6d610df291",
//const APIKEY = `df7c4485-0a70-4cc1-9e2e-519a4f6b08b9`
/*const URL = "https://holodex.net/api/v2"
// const URL = `https://sv443.net/jokeapi/v2`;
//X-APIKEY
async function getData(URL){
    try{
      const response = await fetch(URL,
        {headers: {
          "X-APIKEY": "df7c4485-0a70-4cc1-9e2e-519a4f6b08b9",
         }
        })
         if(response.status != 200){
            throw new Error(response);
          }
          console.log(response);
          const data = await response.json();
          console.log(data);
          document.querySelector("h1").textContent = {headers: {"X-APIKEY": "df7c4485-0a70-4cc1-9e2e-519a4f6b08b9"}}
          document.querySelector("h2").textContent = data.type;
        
    } catch(error){
      document.querySelector("h1").textContent = `Sorry I cannot find ${response}`
    }
}
getData(URL);
 */

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

/*const URL = "https://holodex.net/api/v2/"
//const APIKEY = `df7c4485-0a70-4cc1-9e2e-519a4f6b08b9`
// const URL = `https://sv443.net/jokeapi/v2`;
//X-APIKEY
async function getData(URL){
    try{
      const response = await fetch(URL,
        {headers: {
          "X-APIKEY": "df7c4485-0a70-4cc1-9e2e-519a4f6b08b9",
         }
        });

    if(!response.ok){
      throw new Error(response);
    }
    const data = await response.json();
    console.log(data);

  } catch(error){
    console.log("nope")    }
}
getData(URL);    */