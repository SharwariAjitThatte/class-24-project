class Sand{
    constructor(x,y,r){
        var options = {
            'restitution':1.2,
            'friction':5,
            'density':1,           
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x,this.y,(this.r - 20)/2,options);
        
        World.add(world,this.body);
       // Matter.Bodies.circle(x,y,radius,options);

    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(1);
        stroke("black");
        fill("red");
        ellipse(0,0,this.r);
        pop();
    }   
}