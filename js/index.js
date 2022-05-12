let isGameOver = false;
let carX = 250;

let move = flase;
let interval = 0;
let isGoingLeft = false;
let isGoingRight = false;
let carSpeedValue = 2;
let topToButtom = 0;

let intervalId = 0;
let roadImage = new Image();
roadImage.src = '../images/road.png';

let carImage = new Image();
carImage.src = '../images/car.png';

let carDirectionX = carDirectionValue;
let carDirectionY = carDirectionValue;


let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
// canvas.style.border = '2px solid black';
let displayScreen = document.querySelector('.game-intro');

window.onload = () => {
  canvas.style.display = 'none';
  document.getElementById('start-button').onclick = () => {
    // console.log("start clicked");
    startGame();
    control();
  };

  
  function startGame() {
    displayScreen.style.display = 'none';
    canvas.style.display = 'block';
    ctx.drawImage(roadImage, 0, 0, 500, 700);
    ctx.drawImage(carImage, carX, 400, 100, 200);
    // carX = carX -1;
    ctx.peginPath();
    ctx.fillStyle = 'red';
    ctx.fillRect(20, topToButtom, 100, 20);
    ctx.closePath();
    // topToButtom += 1;

    if (isGoingLeft) {
      if(carX > 0) {
        carX -= carSpeedValue;
      }
    } else if(isGoingRight) {
        if(carX < canvas.width - 100) {
          carX += carSpeedValue;
        }
      }
      if(move === false) {
        requestAnimationFrame(startGame);
      }
    }
  };


  function draw() {
ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  }

document.addEventListener("keydown", event => {
  if(event.code === 'ArrowLeft') {
    isGoingLeft = true;
  }
  if(event.code === 'ArrowRight') {
    isGoingRight = true;
  }
});


document.addEventListener("keyup", event => {
isGoingLeft = false;
isGoingRight = false;
});



