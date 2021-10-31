var randomNumber1 = (Math.random() * 5) + 1;
var randomNumber2 = (Math.random() * 5) + 1;
var dicepng1 = "images/dice" + randomNumber1.toFixed() + ".png";
var dicepng2 = "images/dice" + randomNumber2.toFixed() + ".png";
document.querySelector(".img1").setAttribute("src", `${dicepng1}`);
document.querySelector(".img2").setAttribute("src", `${dicepng2}`);

if (randomNumber1.toFixed() > randomNumber2.toFixed()) {
    document.querySelector("h1").innerHTML = "Player1 Wins🚩";
}
else if (randomNumber1.toFixed() < randomNumber2.toFixed()) {
    document.querySelector("h1").innerHTML = "Player2 Wins🚩";
}
else {
    document.querySelector("h1").innerHTML = "🚩Draw🚩";
}