// console.log("This is a browser Extension Running")

// const element = document.querySelector('img.lnXdpd');

// console.log(element)
// element.remove()



// const container = document.querySelector("div.k1zIA");

// const img = document.createElement("img");
// img.src = "https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?fit=476%2C280&ssl=1"

// container.appendChild(img);

const tries = 10;

 const intervalFunc =  setInterval(() => {
const container = document.querySelector("body");

const pullup = document.querySelector("#slideup-paywall");
const darkenOverlay = document.querySelector("#darken-overlay");

if(pullup && darkenOverlay && container) {
  container.classList.remove("noscroll");
  pullup.style.display = "none";
  darkenOverlay.style.display = "none";
}

if(tries <= 0){
  clearInterval(interval);
}

}, 5000);