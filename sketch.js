//Create variables here
var dog, happyDog;
var database;
var foodS, foodStock;

function preload()
{
  //load images here
  dogImage = loadImage("Dog.png");
  happyDogImage = loadImage("happydog.png");
}

function setup() {
  database = firebase.database();
  background(46,139,87);
  createCanvas(500, 500);

  
  
  dog = createSprite(200,200,200,200);
  dog.addImage(dogImage);
  dog.scale = 0.3;

  foodStock = database.ref('Food');
  foodStock.on("value", readStock);

  
  
}


function draw() {  
  background(49,50,100);

  drawSprites();
  //add styles here
  textSize(20);
 // fill(blue);
 text("Food remaining:" + foodS, 100, 80);
  stroke(6);

  if(keyWentDown(UP_ARROW)){

    writeStock(foodS);
    dog.addImage(happyDogImage);
  
  }

}

function readStock(data){

foodS = data.val();




}

function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

database.ref('/').update({
Food : x

})

}


