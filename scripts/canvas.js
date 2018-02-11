class Character {

    constructor(name, type) {
        his.name = name;
	    this.type =  type;
        this.x = 0;
        this.y = 0;
    }
	
	setName(name)
	{
		this.name = name;
	};

	getName()
	{
		return this.name;
	};

	setType(type)
	{
		this.type = type;
	};

	getType()
	{
		return this.type;	
	};

	move(newX, newY)
	{
		this.x += newX;
		this.y += newY;
	};

	getRandInt(max)
	{
		return Math.floor(Math.random() * Math.floor(max));		
	};

}

class Student extends Character {

	constructor(name, type, state)
	{
		super.constructor(name, type);
        this.state = state;
        this.maxMoveDist = getRandInt(500);
        this.alive = false;
	};

	randMoveUp()
	{
		for (I = 0; I < maxMoveDist; I++)
		{
			move(0,-1)
		}
	};

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
	};


}
