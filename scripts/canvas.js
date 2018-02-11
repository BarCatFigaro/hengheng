<<<<<<< Updated upstream
class characters {

	var name;
	var type;
	var x, y;
	constructor(name, type)
	{
		this.name = name;
		this.type = type;
	}
	
	setName(name)
	{
		this.name = name;
	}

	getName()
	{
		return this.name;
	}

	setType(type)
	{
		this.type = type;
	}

	getType()
	{
		return this.type;	
	}

	move(newX, newY)
	{
		this.x += newX;
		this.y += newY;
	}

	getRandInt(max)
	{
		return Math.floor(Math.random() * Math.floor(max));		
	}

}

class student extends characters {

	var maxMoveDist = getRandInt(500);
	var alive;

	constructor(name, type, state)
	{
		super.constructor(name, type);
		this.state = state;
	}

	randMoveUp()
	{
		for (I = 0; I < maxMoveDist; I++)
		{
			move(0,-1)
		}
	}

	randMoveSide()
	{
		var randDir = getRandInt(1);
		if (randDir = 0)
		{
			for (I = 0; I < maxMoveDist; I++)
			{
				move(-1,0);
			}
		}
		else
		{
			for (I = 0; I < maxMoveDist; I++)
			{
				move(1, 0);
			}
		}
	}


=======
var renderer = PIXI.autoDetectRenderer(800, 600);
document.body.appendChild(renderer.view);

var stage = new PIXI.Container();

var background = new PIXI.Sprite.fromImage('../GraphicsRF/Assets/car.png');
stage.addChild(background);

stage.filters = [new PIXI.filters.VoidFilter()];
stage.filterArea = new PIXI.Rectangle(0, 0, 800, 600);

var blobArray = [];
var numBlobs = 10;

for (var i = 0; i < numBlobs; i++) {
    var blob = new PIXI.Sprite.fromImage('../GraphicsRF/Characters/blue_stand/blue_stand.png');

    blob.anchor.set(0.5);
    blob.scale.set(0.8 + Math.random() * 0.3);

    blob.position.x = Math.floor(Math.random() * renderer.width);
    blob.position.y = Math.floor(Math.random() * renderer.height);

    blob.blendMode = Math.random()>0.5? PIXI.BLEND_MODES.OVERLAY:PIXI.BLEND_MODES.HARD_LIGHT;
    blob.direction = Math.random() * Math.PI * 2;
    blob.turningSpeed = Math.random() - 0.8;
    blob.speed = 2 + Math.random() * 2;

    blobArray.push(blob);

    stage.addChild(blob);
>>>>>>> Stashed changes
}

var tick = 0;

requestAnimationFrame(anime);

function anime() {
    for (var i = 0; i < blobArray.length; i++) {
        var blob = blobArray[i];
        blob.direction = blob.turningSpeed * 0.01;
        blob.position.x = Math.sin(blob.direction) * blob.speed;
        blob.position.y = Math.cos(blob.direction) * blob.speed;
        blob.rotation = -blob.direction - Math.PI / 2;
    }
}

tick += 0.1;

renderer.render(stage);

requestAnimationFrame(anime);