var thickness,wall;
var speed,weight,bullet;



function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50,200,50,50);
   wall=createSprite(1200,200,thickness, height/2);
  wall.shapeColor=color(80,80,80);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  bullet.velocityX = speed;
}

function hasCollided(lbullet,lwall)
{
  bulletRightEdge=lbullet.x +lbullet.width;
  wallLeftEdge = wall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;
}


function draw() {
  background(255,255,255); 
  bullet.collide(wall);
  
 
  if(hasCollided(bullet,wall))
  {
    bullet.velocity=0;
    var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);

    
    if(damage>10)
    {
      wall.shapeColor=color(255,0,0);
    }



    if(damage<10)
    {
      wall.shapeColor=color(0,255,0);
    }
  }

  drawSprites();
}
