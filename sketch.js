var toad, fly, crocodile, bg
var toadImage, flyImage, crocImage, lotusImage, bgImage
var lotus, lotus1, lotus2, lotus3, lotus4, lotusGroup

function preload(){
    
  toadImage = loadImage("images/toad.png")
  flyImage = loadImage("images/fly.png")
  crocImage = loadImage("images/crocodile.png")
  lotusImage = loadImage("images/lotus.png")
  bgImage = loadImage("images/bg.png")
}

function setup(){
    createCanvas(displayWidth, displayHeight-125)


    bg = createSprite(780,400);
    bg.addImage(bgImage);
    bg.scale = 1.99

    //bg.velocityX = 5;
  

    toad = createSprite(300,500,20,20)
    toad.addImage(toadImage)
    toad.scale = 0.1


    var lotusGroup = createGroup()
    lotusGroup.add(lotus)

    lotus1 = createSprite(370,500,20,20)
    lotus1.addImage(lotusImage)
    lotus1.scale = 0.07

    lotus2 = createSprite(900,350,20,20)
    lotus2.addImage(lotusImage)
    lotus2.scale = 0.07

    lotus3 = createSprite(700,610,20,20)
    lotus3.addImage(lotusImage)
    lotus3.scale = 0.07

    lotus4 = createSprite(1200,550,20,20)
    lotus4.addImage(lotusImage)
    lotus4.scale = 0.07

    
    

    

}

function draw(){
  
    background("white")

    textSize(50)
    textFont("Georgia")
    fill('lightblue')
    stroke('darkblue')
    strokeWeight(5)
    text("Mr.Toad's Quest", 600, 65)
    
    //if(bg.x >1000){
      //bg.x = 550
    //}

    if(keyDown(UP_ARROW) && toad.y >= 300) {
      toad.velocityY = -12;
    }
    
    toad.velocityY = toad.velocityY +0.8;

    toad.collide(lotusGroup)


    flies();
    crocodiles();

    drawSprites();

}

function flies(){
  if (frameCount % 60 === 0) {

    position = Math.round(random(1,2));

    var flies = createSprite(displayWidth,40,10);
    flies.y = Math.round(random(220,300));
    flies.addImage(flyImage);
    flies.scale = 0.055;
    //flies.velocityX = -6;

    if(position==1){
      flies.x=1500;
      flies.velocityX = -8
     }
      else if (position==2){
      flies.x=0
      flies.velocityX = 8
      } 
 
    flies.lifetime = 250;

    
  }
    
}

function crocodiles(){

  //if (frameCount % 100 === 0) {
    var crocs = createSprite(900,500,40,10);
    //crocs.y = Math.round(random(400,470));
    crocs.addImage(crocImage);
    crocs.scale = 0.3;
    //crocs.velocityX = -8;

    //crocs.lifetime = 150;
    
 //}
  
}
