var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6
console.log("Random Number 1: " + randomNumber1); // Debugging line

var randomDiceImage = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png
console.log("Random Dice Image 1: " + randomDiceImage); // Debugging line

var randomImageSource = "images/" + randomDiceImage; // images/dice1.png - images/dice6.png
console.log("Image Source 1: " + randomImageSource); // Debugging line

var image1 = document.querySelector(".img1");
console.log("Image 1 element:", image1); // Debugging line

if (image1) {
  image1.setAttribute("src", randomImageSource);
  console.log("Image 1 src set to:", randomImageSource); // Debugging line
} else {
  console.log("Image 1 element not found!"); // Debugging line
}

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log("Random Number 2: " + randomNumber2); // Debugging line

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
console.log("Image Source 2: " + randomImageSource2); // Debugging line

var image2 = document.querySelector(".img2");
console.log("Image 2 element:", image2); // Debugging line

if (image2) {
  image2.setAttribute("src", randomImageSource2);
  console.log("Image 2 src set to:", randomImageSource2); // Debugging line
} else {
  console.log("Image 2 element not found!"); // Debugging line
}

// If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
