//Universal variables
var GameState = "Play";
var life = 3;
var score = 0;
var bg;
var i = 3;
var o = 0;

//Level 1 variables
var EnemySpaceship1;
var Player;
var bullet1, bullet2;
var Missiles;
var EnemySpaceship1Grp, MissilesGrp, BulletsGrp;
var SquadronSpaceship;


//Variables for Images
var PlayerImg;
var EnemySpaceship1Img, EnemySpaceship2Img, EnemySpaceship3Img;
var SquadronSpaceshipImg;
var MissilesImg, bulletsImg;

function preload(){
    PlayerImg = loadImage("images/Player Spaceship.png");
    bulletsImg = loadImage("images/bullet.png");

    EnemySpaceship1Img = loadImage("images/Enemy Spaceship1.png");
    EnemySpaceship2Img = loadImage("images/Enemy Spaceship2.png");
    EnemySpaceship3Img = loadImage("images/Enemy Spaceship3.png");

    SquadronSpaceshipImg = loadImage("images/Squadron Spaceship.png")
}
function setup(){
    createCanvas(displayWidth-40, displayHeight-30);

    //The player Sprite and spaceship we'll add Image afterwards
    player = createSprite(width/2, height-70, 70, 70);444
    player.addImage(PlayerImg);
    player.scale = 0.4;

    //Creating Groups For level1 variables
    EnemySpaceship1Grp = new Group();
    MissilesGrp = new Group();
    BulletsGrp = new Group();
    
}

function draw(){
    background(0);
    textSize(20);
    

    if(GameState === "Play")
    {
        text("Score : " + score, 50, 50);

        if(frameCount % 150 === 0)
        {
            SpawnSpaceships1();
        }
        if(EnemySpaceship1Grp.isTouching(BulletsGrp))
        {
            //if(EnemySpaceship1Grp)
            EnemySpaceship1Grp.get(i).destroy();
            BulletsGrp.get(o).destroy();
            //bullet1.destroy();

            score++;
            /*for(var t = 0; t < 50; i++){
                stroke("yellow");
                text("Score : " + score, 50, 50);
                score++;
            }*/
            
        }
        drawSprites();
    }

}

function SpawnBullets()
{
    bullet1 = createSprite(player.x - 40, player.y, 10, 10);
    bullet1.velocityY = -1.5;
    bullet1.addImage(bulletsImg);
    bullet1.scale = 0.1;
    bullet1.lifetime = 400;
    BulletsGrp.add(bullet1);

    bullet2 = createSprite(player.x + 35, player.y, 10,10);
    bullet2.velocityY = -1.5;
    bullet2.velocityX = 1.5;
    bullet2.addImage(bulletsImg);
    bullet2.scale = 0.1;
    BulletsGrp.add(bullet2);

    BulletsGrp.setLifetimeEach(400);

}
function SpawnSpaceships1()
{
    var b = 50;
    for(var a = 0; a <= 8; a++)
    {
                
        EnemySpaceship1 = createSprite(b, 50, 75, 75);
        b += 150;

        EnemySpaceship1.addImage(EnemySpaceship1Img);
        EnemySpaceship1.scale = 0.5;
        EnemySpaceship1Grp.add(EnemySpaceship1);
        
    }
    EnemySpaceship1Grp.setVelocityYEach(2);
    EnemySpaceship1Grp.setLifetimeEach(350);
}

function keyPressed()
{
    if(GameState === "Play" && keyCode === 32)
    {
        SpawnBullets();
    }
}