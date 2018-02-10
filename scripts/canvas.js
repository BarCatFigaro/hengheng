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
		return Math.floor(Math.random() * Math.floor(max);		
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
		var randDir = get RandInt(1);
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
document.body.appendChild(renderer);

var stage = new PIXI.Container();

var background = new PIXI.Sprite.fromImage('../GraphicsRF/Assets/Road.png');
stage.addChild(background);

stage.filters = new [PIXI.filters.VoidFilter()];
stage.filterArea = new Rectangle(0, 0, 800, 600);

var blobArray = [];
var numBlobs = 10;

for (var i = 0; i < numBlobs; i++) {
    var blob = new PIXI.Sprite.fromImage('../GraphicsRF/Assets/');
>>>>>>> Stashed changes
}
