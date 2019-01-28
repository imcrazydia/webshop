let white = document.getElementById('white');
let black = document.getElementById('black');
let red = document.getElementById('red');
let blue = document.getElementById('blue');

white.addEventListener('click', () => {
  console.log("hallo");
  mainImg.src = "../shirts/short_sleeve/front_large_extended.jpg";
  color.innerHTML = "White";
  white.style.borderColor = "#99ffff";
  black.style.borderColor = "#737373";
  red.style.borderColor = "#737373";
  blue.style.borderColor = "#737373";
})
black.addEventListener('click', () => {
  mainImg.src = "../shirts/short_sleeve/front_large_extended (1).jpg";
  color.innerHTML = "Black";
  white.style.borderColor = "#737373";
  black.style.borderColor = "#99ffff";
  red.style.borderColor = "#737373";
  blue.style.borderColor = "#737373";
})
red.addEventListener('click', () => {
  mainImg.src = "../shirts/short_sleeve/front_large_extended (2).jpg";
  color.innerHTML = "Red";
  white.style.borderColor = "#737373";
  black.style.borderColor = "#737373";
  red.style.borderColor = "#99ffff";
  blue.style.borderColor = "#737373";
})
blue.addEventListener('click', () => {
  mainImg.src = "../shirts/short_sleeve/front_large_extended (3).jpg";
  color.innerHTML = "Blue";
  white.style.borderColor = "#737373";
  black.style.borderColor = "#737373";
  red.style.borderColor = "#737373";
  blue.style.borderColor = "#99ffff";
})
