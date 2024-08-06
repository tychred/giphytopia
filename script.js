"use strict";

async function getTrendingGifs() {
    const url = "https://api.giphy.com/v1/gifs/trending?api_key=QAHMQrTIXX19lY4ctkG18ZR4UY9PwDks&limit=5";
    try {
     const response = await fetch(url);
     if (!response.ok) {
         throw new Error('Response status: ${response status}');
     }
     const giphys = await response.json();
     return giphys.data;
    } catch (error) {
     console.error(error.message);
    }
 }
 
 async function renderImage() {
     const myGif = await getTrendingGifs()
     console.log(myGif)
     // console.log(`<img src="${myGif}" alt="first gif">`)
     // document.getElementById("first-gif").innerHTML = `<img src=${myGif} alt="first gif">`
     const gifMap = await myGif.map(gif => {
         console.log(gif)
         //TODO: Append each gif to the DOM
     })
 }
 renderImage()






