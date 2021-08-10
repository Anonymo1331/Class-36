var database;
var position;
var form, player, game;
var gameState = 0;
var playerCount = 0;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(400,400);

  
}

function draw(){
  background("white");
  
    
    drawSprites();
  
}


