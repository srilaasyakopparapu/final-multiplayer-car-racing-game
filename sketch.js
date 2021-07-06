var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var car1, car2, car3, car4, cars
var car1Image, car2Image, car3Image, car4Image, trackImage, groundImage
var welcomeImage
var finishPlayer = 0
var flag = false
var form, player, game;

function preload(){
  car1Image = loadImage("images/car1.png")
  car2Image = loadImage("images/car2.png")
  car3Image = loadImage("images/car3.png")
  car4Image = loadImage("images/car4.png")
  trackImage = loadImage("images/track.jpg")
  groundImage = loadImage("images/ground.png")
  welcomeImage = loadImage("images/welcome.jpg")
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight - 30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background(welcomeImage)
  if(playerCount === 4 && finishPlayer === 0){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(finishPlayer === 4){
    game.update(2);
  }
  if(gameState === 2 && finishPlayer === 4){
    game.end()
  }

}
