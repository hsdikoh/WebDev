
const THRESH_HOLD = 50;

let score = 0;
let currentNumber = parseInt(Math.random() * 100)

console.log(currentNumber)
const highButton = document.querySelector("#high")
const lowButton = document.querySelector("#low")
const generate = document.querySelector("#gen")


const scoreScreen = document.getElementById("score")

const elem = document.querySelector("#screen")

highButton.addEventListener("click", ()=>{
     
    if(currentNumber > THRESH_HOLD){
        showMessageOnScreen("Current is " + currentNumber +"<br>"+"You won")
        score++
    }else{
        showMessageOnScreen("Current is " + currentNumber +"<br>"+"You lost")
        score--
    }
    updateScreen()
})
generate.addEventListener("click", ()=>{
    currentNumber = parseInt(Math.random() * 100);
    clearScreen()
    showMessageOnScreen("Waiting for your input")
})

lowButton.addEventListener("click", ()=>{
    
    if(currentNumber < THRESH_HOLD){
        score++
        showMessageOnScreen("Current is " + currentNumber +"<br>"+"You won")
    }else{
        score--
        showMessageOnScreen("Current is " + currentNumber +"<br>"+"You lost")
    }
    updateScreen()

})


function showMessageOnScreen(message){
    const screen = document.querySelector("#screen");
    screen.innerHTML = message
}

function clearScreen(){
    const screen = document.querySelector("#screen");
    screen.innerHTML = ""
}



function updateScreen(){
    scoreScreen.innerHTML = "Score is "+ score;
    
}
sayHello()
sayHello(" Taylor", 4)


// console.log("AGE IS CALLED",age)

for(let i=0; i<10; i=i+3){
    console.log(i)
}


// while(true){
//     console.log("I am running")
// }


 const age = 15
//   age = 15

if(age > 20){
console.log("You are older")
}
else if(age  < 20  && age > 10 ){
    console.log("You are a bit younger")
}
else{
    console.log("You are a very young")



}




function sayHello(name="Emmanuel", times = 1){
   
    var something = "something"
   for (let index = 0; index < times; index++) {
       console.log("I am a function, hello "+ name)
   }
}


