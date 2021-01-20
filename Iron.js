class Iron{
    constructor(x,y,width,height){
        var options = {
            'restitution':1.2,
            'friction':5.0,
            'density':1.0,       
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        strokeWeight(2);
        stroke("purple");
        fill("lightpurple");
        rect(0,0,this.width,this.height);
        pop();
    }
}