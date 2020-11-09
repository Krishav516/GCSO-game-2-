var car, wall;

var speed, weight;

function setup() {
  createCanvas(750,450);

  speed = random(55,90);
  weight = random(400,1500);

  car = createSprite(30, 200, 50, 30);
  car.velocityX = speed;

  wall = createSprite(800,200,40, 80);
  wall.shapeColor = (80,80,80);
}

function draw() {
  background(255,255,255);  


  if(wall.x-car.x<(car.width+wall.width)/2)
  {
    console.log(deformation);

    car.velocityX = 0;
    var deformation = 0.5*speed*weight*speed/22500;
    
    if(deformation>100)
    {
      car.shapeColor = "yellow";
    }

    if(deformation<180 && deformation>100)
    {
      car.shapeColor = "red";
    }

    if(deformation<100)
    {
      car.shapeColor = "green";
    }
  }

  drawSprites();
  
}
