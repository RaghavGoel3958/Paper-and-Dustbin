class Paper{
	constructor(x,y,r)
	{

		var options={
			'restitution':0.3,
			'friction': 5.0,
			'density':1
		}
	
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
        this.image=loadImage("paper.png")
		
		World.add(world, this.body);

    }
	display()
	{
			var paperpos=this.body.position;		
			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			
		    image(this.image,0,0,this.r,this.r)

		    // ellipse(0,0,this.r,this.r)
			
			pop()
    }
}