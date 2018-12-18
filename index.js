// function playRandom(){
//   var randomNumber1 = Math.floor(Math.random() * 7);
//   if (randomNumber1 === 0){
//     return 1;
//   }
//   else{
//     return randomNumber1;
//   }
// }
//
// function winner(){
//   var number1 = playRandom();
//   var number2 = playRandom();
//   document.querySelector(".img1").setAttribute("src", "images/dice" + number1 + ".png");
//   document.querySelector(".img2").setAttribute("src", "images/dice" + number2 + ".png");
//   if (number1 === number2){
//     document.querySelector("h1").textContent = "Draw!";
//   }
//   else if (number1 > number2){
//     document.querySelector("h1").textContent = "Player 1 Wins!";
//   }
//   else{
//     document.querySelector("h1").textContent = "Player 2 Wins!";
//   }
// }
//
// winner();

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;


document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

if (randomNumber1 === randomNumber2){
  document.querySelector("h1").innerHTML = "Draw!";
}
else if (randomNumber1 > randomNumber2){
  document.querySelector("h1").textContent = "Player 1 Wins! 🚩";
}
else{
  document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
}
