const content = document.querySelector(".content");
const colorRed = document.querySelector("#color-red");
const colorYellow = document.querySelector("#color-yellow");
const colorBlue = document.querySelector("#color-blue");
const colorGreen = document.querySelector("#color-green");

colorRed.onclick = function () {
  content.style.backgroundColor = "red";
}
colorYellow.onclick = function () {
  content.style.backgroundColor = "yellow";
}
colorBlue.onclick = function () {
  content.style.backgroundColor = "blue";
}
colorGreen.onclick = function () {
  content.style.backgroundColor = "green";
}