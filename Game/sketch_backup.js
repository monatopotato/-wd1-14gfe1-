/*s
var fixedrect;
var movingrect;

function setup() {
    createCanvas(1200, 800);
    movingrect = createSprite(400, 300, 80, 40);
    fixedrect = createSprite(400, 100, 50, 80);
    fixedrect.shapeColor = "green";
    movingrect.shapeColor = "green";
    fixedrect.debug = true;
    movingrect.debug = true;

}

function draw() {
    background(0, 0, 0);

    movingrect.y = World.mouseY;
    movingrect.x = World.mouseX;
    if (movingrect.x - fixedrect.x === fixedrect.width / 2 + movingrect.width / 2) {
        fixedrect.shapeColor = "red";
        movingrect.shapeColor = "red";


    }



    drawSprites();
}

*/