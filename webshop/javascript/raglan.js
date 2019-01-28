let black = document.getElementById('black');
let green = document.getElementById('green');
let red = document.getElementById('red');
let blue = document.getElementById('blue');

black.addEventListener('click', () => {
  console.log("hallo");
  mainImg.src = "../shirts/raglan/front_large_extended (4).jpg";
  color.innerHTML = "Black";
  black.style.borderColor = "#99ffff";
  green.style.borderColor = "#737373";
  red.style.borderColor = "#737373";
  blue.style.borderColor = "#737373";
})
green.addEventListener('click', () => {
  mainImg.src = "../shirts/raglan/front_large_extended (2).jpg";
  color.innerHTML = "Green";
  black.style.borderColor = "#737373";
  green.style.borderColor = "#99ffff";
  red.style.borderColor = "#737373";
  blue.style.borderColor = "#737373";
})
red.addEventListener('click', () => {
  mainImg.src = "../shirts/raglan/front_large_extended.jpg";
  color.innerHTML = "Red";
  black.style.borderColor = "#737373";
  green.style.borderColor = "#737373";
  red.style.borderColor = "#99ffff";
  blue.style.borderColor = "#737373";
})
blue.addEventListener('click', () => {
  mainImg.src = "../shirts/raglan/front_large_extended (1).jpg";
  color.innerHTML = "Blue";
  black.style.borderColor = "#737373";
  green.style.borderColor = "#737373";
  red.style.borderColor = "#737373";
  blue.style.borderColor = "#99ffff";
})
